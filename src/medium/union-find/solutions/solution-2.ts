// ?? approach
// Complexity (worst-case): createSet O(1) time | O(1) space, find O(n) time | O(1) space, union O(logn) time | O(1) space
class UnionFind {
  // Add an index signature to allow string keys
  [key: string]: any;

  parents: Record<number, number>;
  ranks: Record<number, number>;

  constructor() {
    this.parents = {}
    this.ranks = {}
  }

  createSet(value: number) {
    this.parents[value] = value;
    this.ranks[value] = 0;
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

    const valueOneRoot = this.find(valueOne)!;
    const valueTwoRoot = this.find(valueTwo)!;
    // Use ranks to determine which node should be the parent
    if (this.ranks[valueOneRoot] < this.ranks[valueTwoRoot]) {
      this.parents[valueOneRoot] = valueTwoRoot;
    } else if (this.ranks[valueOneRoot] > this.ranks[valueTwoRoot]) {
      this.parents[valueTwoRoot] = valueOneRoot;
    } else {
      this.parents[valueTwoRoot] = valueOneRoot;
      this.ranks[valueOneRoot] += 1;
    }
    return null;
  }
}
export { UnionFind as solution2 };
