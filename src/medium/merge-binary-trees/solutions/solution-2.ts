// Iterative DFS approach
// Complexity (worst-case): time O(n) | space O(h)
function mergeBinaryTrees(tree1: BinaryTree | null, tree2: BinaryTree | null): BinaryTree | null {
  if (!tree1) return tree2;

  let tree1Stack = [tree1];
  let tree2Stack = [tree2];

  while (tree1Stack.length) {
    const tree1Node = tree1Stack.pop()!;
    const tree2Node = tree2Stack.pop()!;

    if (!tree2Node) continue;

    tree1Node.value += tree2Node.value;

    if (tree1Node.left) {
      tree1Stack.push(tree1Node.left);
      tree2Stack.push(tree2Node.left);
    } else {
      tree1Node.left = tree2Node.left;
    }

    if (tree1Node.right) {
      tree1Stack.push(tree1Node.right);
      tree2Stack.push(tree2Node.right);
    } else {
      tree1Node.right = tree2Node.right;
    }
  }

  return tree1;
}

export { mergeBinaryTrees as solution2 };
