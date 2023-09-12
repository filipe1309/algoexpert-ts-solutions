// Test: make test t=sweet-and-savory
function sweetAndSavory(dishes: number[], target: number): number[] {
  return solutions.mySolution1(dishes, target);
}

const solutions = {
  mySolution1, // time O(nlogn) | space O(1)
  // solution1 // time O(??) | space O(??)
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

export default sweetAndSavory;
