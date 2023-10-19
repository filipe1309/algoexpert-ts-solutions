// Greedy Algorithm Accumulation approach
// Accumulate the miles left after each city and keep track of the city with the
// least miles left. 
// Complexity (worst-case): O(n) time | O(1) space
function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  let validStartingCityIdx = 0;
  let milesRemaining = 0;
  let milesRemainingAtValidStartingCity = 0;

  for (let i = 1; i < distances.length; i++) {
    // Calculate the miles left after each city.
    milesRemaining += fuel[i - 1] * mpg - distances[i - 1];

    // If the miles left is less than the miles left at the current valid
    // starting city, update the valid starting city.
    if (milesRemaining < milesRemainingAtValidStartingCity) {
      milesRemainingAtValidStartingCity = milesRemaining;
      validStartingCityIdx = i;
    }
  }

  return validStartingCityIdx;
}

export { validStartingCity as solution1 };
