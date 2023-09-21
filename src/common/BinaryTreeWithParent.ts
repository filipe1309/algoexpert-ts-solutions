
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

  static toBTWP(flatTreeObj: any[]): BinaryTreeWithParent {
    const nodes = flatTreeObj.map((node) => new BinaryTreeWithParent(node.value));
    for (let i = 0; i < flatTreeObj.length; i++) {
      const node = flatTreeObj[i];
      const left = node.left !== null ? nodes[node.left - 1] : null;
      const right = node.right !== null ? nodes[node.right- 1] : null;
      nodes[i].left = left;
      nodes[i].right = right;
      if (left) left.parent = nodes[i];
      if (right) right.parent = nodes[i];
    }
    return nodes[0];
  }

  static findNodeInTree(tree: BinaryTreeWithParent | null, nodeValue: number): BinaryTreeWithParent | null {
    if (!tree) return null;
    if (tree.value === nodeValue) return tree;
    const left: BinaryTreeWithParent | null = this.findNodeInTree(tree.left, nodeValue);
    if (left) return left;
    const right: BinaryTreeWithParent | null = this.findNodeInTree(tree.right, nodeValue);
    if (right) return right;
    return null;
  }
}
