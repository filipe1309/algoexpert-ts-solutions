// BF approach
// Complexity (worst-case): O(n^2) time | O(1) space
function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  for (let startCityIdx = 0; startCityIdx < distances.length; startCityIdx++) {
    let currMilesAvailable = 0;
    for (let currCityIdx = 0; currCityIdx < distances.length; currCityIdx++) {
      let pos = (startCityIdx + currCityIdx) % distances.length;
      currMilesAvailable += fuel[pos]*mpg - distances[pos];
      if (currMilesAvailable < 0) break;
    }
    if (currMilesAvailable >= 0) return startCityIdx;
  }
  return -1;
}

export { validStartingCity as solution0 };
