// BF approach
// Complexity (worst-case): O(n^2) time | O(1) space
function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  let validStartingCityIdx = 0;
  fuel = fuel.map((f) => f * mpg);
  for (let i = 0; i < distances.length; i++) {
    let currFuel = 0;
    for (let j = 0; j < distances.length; j++) {
      let pos = (i + j) % distances.length;
      currFuel += fuel[pos] - distances[pos];
      if (currFuel < 0) break;
      if (currFuel >= 0 && j === distances.length - 1) return i;
    }
  }
  return validStartingCityIdx;
}

export { validStartingCity as solution0 };
