// Count && Remove approach
// Complexity (worst-case): O(n) time | O(1) space
function removeKthNodeFromEnd(head: LinkedList, k: number) {
  // Count the number of nodes in the linked list
  let counter = 1;
  let currNode: LinkedList | null = head;
  while (currNode && counter++) currNode = currNode.next;

  // Remove the kth node from the end
  let position = Math.abs(counter - k - 1);
  if (!position) {
    head.value = head.next!.value;
    head.next = head.next!.next;
    return;
  }
  currNode = head;
  while (--position > 0) currNode = currNode!.next;
  currNode!.next = currNode!.next!.next;
  return head;
}

export { removeKthNodeFromEnd as solution0 };
