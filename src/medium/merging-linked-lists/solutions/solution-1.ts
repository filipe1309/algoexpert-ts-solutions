// Make Lists the Same Length && Find The Intersection approach
// Complexity (worst-case): O(n + m) time | O(1) space
// where n is the number of nodes in the first linked list
// and m is the number of nodes in the second linked list
function mergingLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let p1: LinkedList | null = linkedListOne;
  let p2: LinkedList | null = linkedListTwo;
  // get the lenght of both lists
  let countP1 = 0;
  let countP2 = 0;
  while (p1) { p1 = p1.next; countP1++; }
  while (p2) { p2 = p2.next; countP2++; }

  // if lists have diff lenghts, remove first nodes of the largerst
  const diff = Math.abs(countP1 - countP2);
  p1 = (countP1 > countP2) ? advanceList(linkedListOne, diff) : linkedListOne;
  p2 = (countP2 > countP1) ? advanceList(linkedListTwo, diff) : linkedListTwo;

  // walk until find the intersection or the finish of a list
  while (p1?.value !== p2?.value) { p1 = p1!.next; p2 = p2!.next; }

  return p1;
}

function advanceList(p: LinkedList, num: number): LinkedList {
  while (num-- > 0) p = p.next!;
  return p;
}


export { mergingLinkedLists as solution1 };
