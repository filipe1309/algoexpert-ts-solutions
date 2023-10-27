// Two Pointers Switch Lists approach
// Complexity (worst-case): O(n + m) time | O(1) space
function mergingLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let p1: LinkedList | null = linkedListOne;
  let p2: LinkedList | null = linkedListTwo;
  
  while (p1?.value !== p2?.value) {
    p1 = p1 ? p1.next : linkedListTwo;
    p2 = p2 ? p2.next : linkedListOne;
  }

  return p1;
}


export { mergingLinkedLists as solution3 };
