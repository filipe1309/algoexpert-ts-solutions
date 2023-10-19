// Greedy Algorithm Accumulation approach
// Accumulate the miles left after each city and keep track of the city with the
// least miles left. 
// Complexity (worst-case): O(n) time | O(1) space
function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  let validStartingCityIdx = 0;
  let milesLeft = 0;
  let currFuel = 0;
  for (let i = 0; i < distances.length; i++) {
    // Calculate the miles left after each city.
    let nextFuel = currFuel + fuel[i]*mpg - distances[i];
    distances[i] = currFuel;
    currFuel = nextFuel;

    // Update the valid starting city index and miles accumulated if the current
    // city has less miles left than the current valid starting city.
    if (milesLeft > distances[i]) {
      validStartingCityIdx = i;
      milesLeft = distances[i];
    }
  }

  return validStartingCityIdx;
}

export { validStartingCity as solution1 };
