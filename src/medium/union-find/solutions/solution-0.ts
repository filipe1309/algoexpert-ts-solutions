// Array of Representative & Set Object approach
// Complexity (worst-case): createSet O(1) time | O(1) space, find O(n) time | O(1) space, union O(n) time | O(1) space
class UnionFind {
  // Add an index signature to allow string keys
  [key: string]: any;

  setList: {rep: number, set: Set<number>}[];

  constructor() {
    this.setList = [];
  }

  createSet(value: number) {
    const newSet = new Set<number>();
    newSet.add(value);
    this.setList.push({rep: value, set: newSet});
    return null;
  }

  find(value: number) {
    const result = this.setList.find((setObj) => setObj.set.has(value));
    return result ? result.rep : null;
  }

  union(valueOne: number, valueTwo: number) {
    const resultOne = this.setList.find((setObj) => setObj.set.has(valueOne));
    const resultTwo = this.setList.find((setObj) => setObj.set.has(valueTwo));
    if (!resultOne || !resultTwo) return null;
    const newSet = new Set([...resultOne.set, ...resultTwo?.set]);
    const newRep = resultOne.rep;
    this.setList = this.setList.filter((setObj) => !setObj.set.has(valueOne) && !setObj.set.has(valueTwo))
    this.setList.push({rep: newRep, set: newSet});
    return null;
  }
}

export { UnionFind as solution0 };
