export default class Dll {
  value: number;
  prev: Dll | null;
  next: Dll | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  static toFlat(dll: Dll): FlatDll[] {
    const nodes = [];
    let node = dll;
    while (node) {
      nodes.push({
        prev: node.prev?.value ?? null,
        next: node.next?.value ?? null,
        value: node.value,
      });
      node = node.next as Dll;
    }
    return nodes as FlatDll[];
  }
}
