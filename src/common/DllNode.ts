export default class DllNode {
  value: number;
  prev: DllNode | null;
  next: DllNode | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  static toFlat(dllNode: DllNode | null): FlatDll[] {
    const nodes = [];
    let node = dllNode;
    while (node) {
      nodes.push({
        prev: node.prev?.value.toString() ?? null,
        next: node.next?.value.toString() ?? null,
        value: node.value,
      });
      node = node.next as DllNode;
    }
    return nodes as FlatDll[];
  }
}
