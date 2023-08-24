export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  return mySolution1(linkedList);
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(linkedList: LinkedList) {
  let node = linkedList;
  while (node.next) {
    if (node.next.value === node.value) {
      node.next = node.next.next;
      continue;
    }
    node = node.next;
  }

  return linkedList;
}

// Complexity (worst-case): time O(n) | space O(1)
function solution(linkedList: LinkedList) {
  let currentNode = linkedList;
  while (currentNode) {
    let nextDistinctNode = currentNode.next;
    while (nextDistinctNode && nextDistinctNode.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next;
    }
    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }

  return linkedList;
}

export default removeDuplicatesFromLinkedList;
