export default class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  static toBT(flatTree: FlatTree[]): BinaryTree {
    const nodeMap: Record<string, BinaryTree> = {};
    // Create a map of nodes by id
    for (const flatNode of flatTree) {
        nodeMap[flatNode.id] = new BinaryTree(flatNode.value);
    }
    // Connect the nodes to build the binary tree
    for (const flatNode of flatTree) {
        const node = nodeMap[flatNode.id];
        if (flatNode.left !== null) node.left = nodeMap[flatNode.left];
        if (flatNode.right !== null) node.right = nodeMap[flatNode.right];
    }
    return nodeMap[flatTree[0].id];
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
