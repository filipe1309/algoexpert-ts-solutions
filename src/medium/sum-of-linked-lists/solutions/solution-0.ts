// ?? approach

import { LinkedList } from "common/LinkedList";

// Complexity (worst-case): O(??) time | O(??) space
function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let p1: LinkedList | null | undefined = linkedListOne
  let p2: LinkedList | null | undefined = linkedListTwo
  let head: LinkedList | null = null;
  let node: LinkedList | null = null;
  let sumNext = 0;
  while (p1 || p2  || sumNext) {
    let p1Value = p1 ? p1.value : 0;
    let p2Value = p2 ? p2.value : 0;
    let currSum = p1Value + p2Value + sumNext;
    sumNext = 0;
    if (currSum >= 10 && p1 && p2) { 
      sumNext = Math.floor(currSum/10); 
      currSum %= 10; 
    }
    if (!head) { head = new LinkedList(currSum); node = head; }
    else if (node) {
      node.next = new LinkedList(currSum); 
      node = node.next
    }
    p1 = p1?.next
    p2 = p2?.next
  }

  return head;
}

export { sumOfLinkedLists as solution0 };
