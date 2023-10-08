class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  // Queue approach
  // Complexity (worst-case): O(v + e) time | O(v) space
  // v: number of vertices (nodes)
  // e: number of edges (connections)
  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];
    while (queue.length) {
      const node = queue.shift()!;
      array.push(node.name);
      queue.push(...node.children)  
    }
    return array;
  }
}

export { Node as solution0 };
