
export default class BinaryTreeWithParent {
  value: number;
  left: BinaryTreeWithParent | null;
  right: BinaryTreeWithParent | null;
  parent: BinaryTreeWithParent | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  static flatTreeObjToBinaryTreeWithParent(treeObj: any[]): BinaryTreeWithParent {
    const nodes = treeObj.map((node) => new BinaryTreeWithParent(node.value));
    for (let i = 0; i < treeObj.length; i++) {
      const node = treeObj[i];
      const left = node.left !== null ? nodes[node.left - 1] : null;
      const right = node.right !== null ? nodes[node.right- 1] : null;
      nodes[i].left = left;
      nodes[i].right = right;
      if (left) left.parent = nodes[i];
      if (right) right.parent = nodes[i];
    }
    return nodes[0];
  }
}
