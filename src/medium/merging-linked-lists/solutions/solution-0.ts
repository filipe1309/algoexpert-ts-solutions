// BF Two Pointers approach
// Complexity (worst-case): O(n * m) time | O(1) space
function mergingLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let p1: LinkedList | null = linkedListOne;
  let p2: LinkedList | null = linkedListTwo;

  while (p1) {
    if (p1.value === p2.value && verifyEquality(p1, p2)) return p1;
    p2 = p2.next;
    if (p2 === null) { p1 = p1.next; p2 = linkedListTwo }
  }
  
  return null;
}

function verifyEquality(p1: LinkedList | null, p2: LinkedList | null): boolean {
  while (p1 && p2) {
    if (p1.value !== p2.value) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1 === null && p2 == null;
}

export { mergingLinkedLists as solution0 };
