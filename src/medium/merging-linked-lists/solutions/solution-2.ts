// Set approach
// Complexity (worst-case): O(n + m) time | O(n) space
function mergingLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let listOneSet = new Set<number>();
  let currNode: LinkedList | null = linkedListOne;

  while (currNode) { listOneSet.add(currNode.value); currNode = currNode.next; }
  currNode = linkedListTwo;
  // console.log(listOneSet);
  while (currNode) {
    // console.log(currNode);
    if (listOneSet.has(currNode.value)) return currNode;
    currNode = currNode.next;
  }
  return null;
}

export { mergingLinkedLists as solution2 };
