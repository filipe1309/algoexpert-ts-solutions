// https://www.algoexpert.io/questions/depth-first-search

/*
  Depth-first Search

  You're given a Node class that has a name and an array of optional children nodes.
  When put together, nodes form an acyclic tree-like structure.

  Implement the depthFirstSearch method on the Node class, which takes in an empty
  array, traverses the tree using the Depth-first Search approach (specifically
  navigating the tree from left to right), stores all of the nodes' names in the
  input array, and returns it.

  If you're unfamiliar with Depth-first Search, we recommend watching the Conceptual
  Overview section of this question's video explanation before starting to code.

  Sample Input:
  graph =  A
        /  |  \
      B    C   D
    /   \   /   \
  E      F G     H
        / \  \
       I   J  K

  Sample Output:
  ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
*/

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
