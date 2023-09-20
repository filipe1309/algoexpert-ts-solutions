// Convert binaryTree Obj To Flat Tree Obj
export function binaryTreeToFlatTreeObj(bt: BinaryTree): any[] {
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

