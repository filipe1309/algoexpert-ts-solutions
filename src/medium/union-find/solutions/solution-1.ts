// Parents Tree approach
// Complexity (worst-case): createSet O(1) time | O(1) space, find O(n) time | O(1) space, union O(n) time | O(1) space
class UnionFind {
  // Add an index signature to allow string keys
  [key: string]: any;

  parents: Record<number, number>

  constructor() {
    this.parents = {}
  }

  createSet(value: number) {
    this.parents[value] = value;
    return null;
  }

  find(value: number) {
    if(!(value in this.parents)) return null;

    // Find the root of the set
    let currentParent = value;
    while (currentParent !== this.parents[currentParent]) {
      currentParent = this.parents[currentParent]
    }
    return currentParent;
  }

  union(valueOne: number, valueTwo: number) {
    if(!(valueOne in this.parents) || !(valueTwo in this.parents)) return null;

    // Make valueOne the parent of valueTwo
    const valueOneRoot = this.find(valueOne)!;
    const valueTwoRoot = this.find(valueTwo)!;
    this.parents[valueTwoRoot] = valueOneRoot;
    return null;
  }
}
export { UnionFind as solution1 };
