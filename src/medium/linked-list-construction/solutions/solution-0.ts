export class DoublyLinkedList {
  head: DllNode | null;
  tail: DllNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add an index signature to allow string keys
  [key: string]: any;

  // Complexity (worst-case): O(1) time | O(1) space
  setHead(node: DllNode) {
    if (this.head === null) { this.head = this.tail = node; return; }
    this.insertBefore(this.head, node);
  }

  // Complexity (worst-case): O(1) time | O(1) space
  setTail(node: DllNode) {
    if (this.tail === null) { this.setHead(node); return; }
    this.insertAfter(this.tail, node);
  }

  // Complexity (worst-case): O(1) time | O(1) space
  insertBefore(node: DllNode, nodeToInsert: DllNode) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else node.prev.next = nodeToInsert;
    node.prev = nodeToInsert;
  }

  // Complexity (worst-case): O(1) time | O(1) space
  insertAfter(node: DllNode, nodeToInsert: DllNode) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else node.next.prev = nodeToInsert;
    node.next = nodeToInsert;
  }

  // Complexity (worst-case): O(p) time | O(1) space
  insertAtPosition(position: number, nodeToInsert: DllNode) {
    if (position === 1) { this.setHead(nodeToInsert); return; }
    let node = this.head;
    let currPosition = 1;
    while (node !== null && currPosition++ !== position) node = node.next;
    if (node) this.insertBefore(node, nodeToInsert);
    else this.setTail(nodeToInsert);
  }

  // Complexity (worst-case): O(n) time | O(1) space
  removeNodesWithValue(value: number) {
    let currDllNode = this.head
    while (currDllNode) {
      const nodeToRemove = currDllNode;
      currDllNode = currDllNode.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }

  // Complexity (worst-case): O(1) time | O(1) space
  remove(node: DllNode) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    
    if (node.next) node.next.prev = node.prev;
    if (node.prev) node.prev.next = node.next;
    node.next = node.prev = null;
  }

  // Complexity (worst-case): O(n) time | O(1) space
  containsNodeWithValue(value: number) {
    let currDll = this.head;
    while (currDll && currDll.value !== value) currDll = currDll.next;
    return currDll !== null;
  }
}

export { DoublyLinkedList as solution0 };
