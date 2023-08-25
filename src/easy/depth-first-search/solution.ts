// https://www.algoexpert.io/questions/depth-first-search

class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  initializeRecursive(node: Node) {
    this.name = node.name;
    while (node.children.length) {
      let child = node.children.shift();
      if (!child) continue;
      this.children.push(new Node(child.name));
      this.children[this.children.length - 1].initializeRecursive(child);
    }
  }

  depthFirstSearch(array: string[]) {
    return this.solution1(array);
  }

  // Iterative
  // Complexity (worst-case): time O(v+e) | space O(v) v=vertices,e=edges
  mySolution1(array: string[]) {
    let stack = [this as Node];

    while (stack.length) {
      let node = stack.shift();
      if (node) {
        stack.unshift(...node.children);
        array.push(node.name);
      }
    }

    return array;
  }

  // Recursive
  // Complexity (worst-case): time O(v+e) | space O(v) v=vertices,e=edges
  solution1(array: string[]) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}


export default Node;
