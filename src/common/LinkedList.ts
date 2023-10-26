export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  static fromFlatArray(flatArray: { id: string, next: string | null, value: number }[]): LinkedList {
    const nodes: { [key: string]: LinkedList } = {};
    for (const node of flatArray) {
      nodes[node.id] = new LinkedList(node.value);
    }
    for (const node of flatArray) {
      if (node.next !== null) {
        nodes[node.id].next = nodes[node.next];
      }
    }
    return nodes[flatArray[0].id];
  }

  static toFlatArray(linkedList: LinkedList): FlatLinkedList[] {
    const flatArray: FlatLinkedList[] = [];
    let node: LinkedList | null = linkedList;
    while (node !== null) {
      flatArray.push(this.getFlatNode(node, flatArray));
      node = node.next;
    }
    return flatArray;
  }

  static getFlatNode(node: LinkedList, flatArray: FlatLinkedList[]): FlatLinkedList {
      let nodeId = node.value.toString();
      let nextId = node.next ? node.next?.value.toString() : null;
      let hasEqualNext = nextId === nodeId
      // if node is already in flatArray, append -2, -3, etc. to nodeId
      let i = 2;
      if (flatArray.some(n => n.id === nodeId)) {
        while (flatArray.some(n => n.id === `${nodeId}-${i}`)) { i++; }
        nodeId = `${nodeId}-${i++}`;
      }
      if (hasEqualNext) nextId = node.next?.value.toString() + `-${i}`;
      return { id: nodeId, next: nextId, value: node.value };
  }
}
