export default class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  static toBT(flatTreeObj: any[]): BinaryTree {
    const nodes = flatTreeObj.map((node) => new BinaryTree(node.value));
    for (let i = 0; i < flatTreeObj.length; i++) {
      const node = flatTreeObj[i];
      nodes[i].left = node.left ? this.getFlatNode(nodes, parseInt(node.left)) : null;
      nodes[i].right = node.right ? this.getFlatNode(nodes, parseInt(node.right)) : null;
    }
    return nodes[0];
  }

  static getFlatNode(nodes: BinaryTree[], value:number): BinaryTree | null {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].value === value) return nodes[i];
    }
    return null;
  }

  static toFlat(bt: BinaryTree): any[] {
    const nodes = [];
    const queue = [bt];
    while (queue.length) {
      const node = queue.shift() as BT;
      nodes.push({
        left: node.left?.value ?? null,
        right: node.right?.value ?? null,
        value: node.value,
      });
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return nodes;
  }
}
