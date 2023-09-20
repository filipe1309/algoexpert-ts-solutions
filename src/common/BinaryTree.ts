export default class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  static flatTreeObjToBinaryTree(treeObj: any[]): BinaryTree {
    const nodes = treeObj.map((node) => new BinaryTree(node.value));
    for (let i = 0; i < treeObj.length; i++) {
      const node = treeObj[i];
      const left = node.left !== null ? nodes[node.left] : null;
      const right = node.right !== null ? nodes[node.right] : null;
      nodes[i].left = left;
      nodes[i].right = right;
    }
    return nodes[0];
  }

  static binaryTreeToFlatTreeObj(bt: BinaryTree): any[] {
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
