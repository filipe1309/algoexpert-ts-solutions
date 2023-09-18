export function bstToTreeNodesArray(bst: BinaryTree): any[] {
  const nodes = [];
  const queue = [bst];
  while (queue.length) {
    const node = queue.shift() as BST;
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
