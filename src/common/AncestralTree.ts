
export default class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

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
    }
    resultObj.ancestralTree = nodes[0];
  }
}
