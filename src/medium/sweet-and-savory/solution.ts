// Test: make test t=sweet-and-savory
function sweetAndSavory(dishes: number[], target: number): number[] {
  return solutions.mySolution1(dishes, target);
}

const solutions = {
  mySolution1, // time O(nlogn) | space O(1)
  solution1    // time O(nlogn) | space O(n)
  // solution2 // time O(??) | space O(??)
};

// Sorting & 2 Pointers approach
// Complexity (worst-case): time O(nlogn) | space O(1)
function mySolution1(dishes: number[], target: number): number[] {
  let flavorProfile = [0, 0];
  dishes.sort((a, b) => a - b);
  let left = 0;
  let right = dishes.length - 1;
  while (dishes[left] < 0 && dishes[right] > 0) {
    if ((dishes[left] + dishes[right]) <= target) {
      if (flavorProfile[0] === 0 || (dishes[left] + dishes[right]) > (flavorProfile[0] + flavorProfile[1])) {
        flavorProfile = [dishes[left], dishes[right]];
      }
      left++;
    }
    else right--;
  }
  return flavorProfile;
}

// Sorting + 2 Arrays Sw/Sv approach
// Complexity (worst-case): time O(nlogn) | space O(n)
function solution1(dishes: number[], target: number): number[] {
  let sweetDishes = dishes.filter((dish) => dish < 0).sort((a, b) => b - a)
  let savoryDishes = dishes.filter((dish) => dish > 0).sort((a, b) => a - b);
  let bestPair = [0, 0];
  let bestDiff = Infinity;
  let sweetIdx = 0;
  let savoryIdx = 0;

  while (sweetIdx < sweetDishes.length && savoryIdx < savoryDishes.length) {
    let currSum = sweetDishes[sweetIdx] + savoryDishes[savoryIdx];
    if (currSum <= target) {
      let currDiff = target - currSum;
      if (currDiff < bestDiff) {
        bestDiff = currDiff;
        bestPair = [sweetDishes[sweetIdx], savoryDishes[savoryIdx]];
      }
      savoryIdx++;
    } 
    else sweetIdx++;
  }

  return  bestPair;
}

export default sweetAndSavory;
