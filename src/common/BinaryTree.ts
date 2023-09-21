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
      const left = node.left !== null ? nodes[node.left] : null;
      const right = node.right !== null ? nodes[node.right] : null;
      nodes[i].left = left;
      nodes[i].right = right;
    }
    return nodes[0];
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
