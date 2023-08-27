export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// Test: make test t=middle-node
function middleNode(linkedList: LinkedList) {
  return mySolution1(linkedList);
  // return solution1(linkedList);
}

// Complexity (worst-case): time O(n), space O(1)
function mySolution1(linkedList: LinkedList): LinkedList | null {
  let slowNode: LinkedList | null | undefined = linkedList;
  let fastNode: LinkedList | null = linkedList;

  while (fastNode && fastNode.next) {
    slowNode = slowNode?.next;
    fastNode = fastNode?.next?.next;
  }

  return slowNode;
}

// Complexity (worst-case): time O(n), space O(1)
function solution1(linkedList: LinkedList): LinkedList | null {
  let count = 0;
  let currentNode: LinkedList | null = linkedList;
  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  }

  const middle = Math.floor(count / 2);
  currentNode = linkedList;
  for (let i = 0; i < middle; i++) {
    currentNode = currentNode?.next || null;
  }

  return currentNode;
}

export default middleNode;
