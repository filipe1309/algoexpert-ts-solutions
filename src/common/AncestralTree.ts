
export default class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;
  // decendants: AncestralTree[] = [];

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }

  static toAT(flatATreeObj: any[], resultObj: ResultAncestralTree) {
    const nodes = flatATreeObj.map((node) => new AncestralTree(node.name));
    for (let i = 0; i < flatATreeObj.length; i++) {
      const node = flatATreeObj[i];
      const ancestor = node.ancestor !== null ? nodes.find((n) => n.name == node.ancestor)! : null;
      nodes[i].ancestor = ancestor;
      if (nodes[i].name === resultObj.topAncestor) resultObj.topAncestor = nodes[i];
      if (nodes[i].name === resultObj.descendantOne) resultObj.descendantOne = nodes[i];
      if (nodes[i].name === resultObj.descendantTwo) resultObj.descendantTwo = nodes[i];
      // if (ancestor) ancestor.decendants.push(nodes[i]);
    }
    resultObj.ancestralTree = nodes[0];
  }

  // addAsAncestor(descendants: string[]) {
  //   for (const descendant of descendants) {
  //     const child = new AncestralTree(descendant);
  //     child.ancestor = this;
  //   }
  //   return this;
  // }

  // addAsDescendant(descendants: string[]) {
  //   for (const descendant of descendants) {
  //     const child = new AncestralTree(descendant);
  //     this.decendants.push(child);
  //     child.ancestor = this;
  //   }
  //   return this;
  // }
}
