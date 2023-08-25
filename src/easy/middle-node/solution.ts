export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// Test: make test-one t=middle-node
function middleNode(linkedList: LinkedList) {
  return mySolution1(linkedList);
}

// Complexity (worst-case): time O(n), space O(1)
function mySolution1(linkedList: LinkedList) {
  let p1 = linkedList;
  let p2 = linkedList;

  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  return p1;
}

export default middleNode;
