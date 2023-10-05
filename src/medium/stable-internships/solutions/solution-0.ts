// Gale-Shapley Algorithm approach
// This is classic problem of matching two sets of elements, where each element 
// has a preference list of the other set.
// AKA: Stable Marriage Problem, Stable Roommates Problem, Stable Matching Problem (SMP)
// Complexity (worst-case): O(n^2) time | O(n) space
function stableInternships(interns: number[][], teams: number[][]): number[][] {
  let available = new Array(interns.length).fill(true); // available[i] = true if intern i is available
  let matchings = new Array(teams.length).fill(null); // matchings[i] = j if intern j is matched with team i
  while (available.some(i => i)) { // while there is an available intern

    // for each intern, try to match with the highest ranked team
    for (let intern = 0; intern < interns.length; intern++) {
      if (!available[intern]) continue;

      // get the highest ranked team for this intern
      const team = interns[intern].shift() || 0;

      // if the team is available, match the intern with the team
      if (matchings[team] === null) {
        matchings[team] = intern;
        available[intern] = false;
      } else 
        // if the team is not available (already matched with another intern), check if the team prefers this new intern
        if (teams[team].indexOf(intern) < teams[team].indexOf(matchings[team])) {
        available[matchings[team]] = true;
        matchings[team] = intern;
        available[intern] = false;
      }
    }
  }

  return matchings.map((intern, team) => [intern, team]);
}

export { stableInternships as solution0 };
