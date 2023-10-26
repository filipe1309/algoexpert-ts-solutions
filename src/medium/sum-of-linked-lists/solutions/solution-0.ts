import { LinkedList } from "common/LinkedList";

// Two Pointers approach
// Complexity (worst-case): O(max(n, m)) time | O(max(n, m)) space
// where n is the length of linkedListOne and m is the length of linkedListTwo
function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let p1: LinkedList | null | undefined = linkedListOne
  let p2: LinkedList | null | undefined = linkedListTwo
  let head: LinkedList = new LinkedList(0);
  let node = head;
  let carry = 0;
  while (p1 || p2 || carry) {
    let p1Value = p1 ? p1.value : 0;
    let p2Value = p2 ? p2.value : 0;
    let currSum = p1Value + p2Value + carry;
    carry = Math.floor(currSum/10);
    currSum %= 10;
    node.next = new LinkedList(currSum); 
    node = node.next;
    p1 = p1?.next;
    p2 = p2?.next;
  }

  return head.next;
}

export { sumOfLinkedLists as solution0 };
