export class DoublyLinkedList {
  head: Dll | null;
  tail: Dll | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add an index signature to allow string keys
  [key: string]: any;

  // Complexity (worst-case): O(1) time | O(1) space
  setHead(node: Dll) {
    if (this.head === null) { this.head = this.tail = node; return; }
    return this.insertBefore(this.head, node);
  }

  // Complexity (worst-case): O(1) time | O(1) space
  setTail(node: Dll) {
    if (this.tail === null) { this.setHead(node); return; }
    return this.insertAfter(this.tail, node);
  }

  // Complexity (worst-case): O(1) time | O(1) space
  insertBefore(node: Dll, nodeToInsert: Dll) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else node.prev.next = nodeToInsert;
    node.prev = nodeToInsert;
    return this;
  }

  // Complexity (worst-case): O(1) time | O(1) space
  insertAfter(node: Dll, nodeToInsert: Dll) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else node.next.prev = nodeToInsert;
    node.next = nodeToInsert;
    return this.head;
  }

  // Complexity (worst-case): O(p) time | O(1) space
  insertAtPosition(position: number, nodeToInsert: Dll) {
    if (position === 1) { this.setHead(nodeToInsert); return; }
    let node = this.head;
    let currPosition = 1;
    while (node !== null && currPosition++ !== position) node = node.next;
    if (node) return this.insertBefore(node, nodeToInsert);
    else return this.setTail(nodeToInsert);
  }

  // Complexity (worst-case): O(n) time | O(1) space
  removeDllsWithValue(value: number) {
    let currDll = this.head
    while (currDll) {
      const nodeToRemove = currDll;
      currDll = currDll.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
    return this;
  }

  // Complexity (worst-case): O(1) time | O(1) space
  remove(node: Dll) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    
    if (node.next) node.next.prev = node.prev;
    if (node.prev) node.prev.next = node.next;
    node.next = node.prev = null;
    return this;
  }

  // Complexity (worst-case): O(n) time | O(1) space
  containsDllWithValue(value: number) {
    let currDll = this.head;
    while (currDll && currDll.value !== value) currDll = currDll.next;
    return currDll !== null;
  }
}

export { DoublyLinkedList as solution0 };
