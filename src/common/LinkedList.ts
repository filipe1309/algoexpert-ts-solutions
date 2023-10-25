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

  static toFlatArray(linkedList: LinkedList): { id: string, next: string | null, value: number }[] {
    const flatArray: { id: string, next: string | null, value: number }[] = [];
    let node: LinkedList | null = linkedList;
    while (node !== null) {
      flatArray.push({ id: node.value.toString(), next: null, value: node.value });
      node = node.next;
    }
    for (let i = 0; i < flatArray.length - 1; i++) {
      flatArray[i].next = flatArray[i + 1].id;
    }
    return flatArray;
  }
}
