import { BinaryTree as BT } from "./solution";

// Invert Childs approach
// Complexity (worst-case): time O(n) | space O(d)
// where n is the number of nodes in the Binary Tree
// and d is the depth (height) of the Binary Tree
function invertBinaryTree(tree: BT | null): BT | null {
  if (!tree) return tree;

  const node = tree.left;
  tree.left = tree.right;
  tree.right = node;

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right); 

  return tree;
}


export default invertBinaryTree;
