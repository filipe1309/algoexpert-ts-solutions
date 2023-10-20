export class MinHeap {
  // Add an index signature to allow string keys
  [key: string]: any;

  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  // Complexity (worst-case): O(n) time | O(1) space
  buildHeap(array: number[]) {
    const firstParentIdx = Math.floor((array.length -2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length -1, array);
    }
    return array;
  }

  // Switch with its minor Child approach
  // Complexity (worst-case): O(logn) time | O(1) space
  siftDown(currentIdx: number, endIdx: number, heap: number[]) {
    let childOneIdx = 2 * currentIdx + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
      let idxToWap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToWap = childTwoIdx;
      }
      else idxToWap = childOneIdx;
      if (heap[idxToWap!] < heap[currentIdx]) {
        this.swap(currentIdx, idxToWap!, heap);
        currentIdx = idxToWap!;
        childOneIdx = 2 * currentIdx + 1;
      }
      else break;
    }
  }

  // Switch with its Parent approach
  // Complexity (worst-case): O(logn) time | O(1) space
  siftUp(currentIdx: number, heap: number[]) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  // Complexity (worst-case): O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }
  
  // Complexity (worst-case): O(logn) time | O(1) space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const removedValue = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removedValue;
  }

  // Complexity (worst-case): O(logn) time | O(1) space
  insert(value: number) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
    return null;
  }

  swap(pos1: number, pos2: number, heap: number[]) {
    [heap[pos1], heap[pos2]] = [heap[pos2], heap[pos1]];
  }
}

export { MinHeap as solution0 };
