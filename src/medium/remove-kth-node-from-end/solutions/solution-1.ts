// Two Nodes approach
// Complexity (worst-case): O(n) time | O(1) space
function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let counter = 1;
  let first: LinkedList = head;
  let second: LinkedList | null = head;
  while (counter++ <= k) second = second!.next;

  if (second === null) {
    head.value = head.next!.value;
    head.next = head.next!.next;
    return;
  }
  while (second?.next) {
    second = second.next;
    first = first.next!;
  }
  first.next = first.next!.next;
  return head;
}

export { removeKthNodeFromEnd as solution1 };
