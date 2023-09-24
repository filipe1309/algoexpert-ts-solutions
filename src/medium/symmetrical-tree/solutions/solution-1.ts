// Iterative DFS approach
// Complexity (worst-case): time O(n) | space O(h)
function symmetricalTree(tree: BinaryTree): boolean {
  let leftStack: (BinaryTree | null | undefined)[] = [tree.left];
  let rightStack: (BinaryTree | null | undefined)[] = [tree.right];

  while (leftStack.length) {
    const left = leftStack.shift();
    const right = rightStack.shift();
    if (left?.value !== right?.value) return false;
    if (!left || !right) continue;
    leftStack.push(left.left, left.right)
    rightStack.push(right.right, right.left)
  }

  return true;
}


export {symmetricalTree as solution1};
