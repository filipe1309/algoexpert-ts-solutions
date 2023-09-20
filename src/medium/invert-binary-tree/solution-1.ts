// Queue approach
// Complexity (worst-case): time O(n) | space O(n)
// where n is the number of nodes in the Binary Tree
function invertBinaryTree(tree: BinaryTree | null): BinaryTree | null {
  let queue: (BinaryTree | null)[] = [tree];
  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;

    const left = node.left;
    node.left = node.right;
    node.right = left;

    queue.push(node.left, node.right);
  }

  return tree;
}


export default invertBinaryTree;
