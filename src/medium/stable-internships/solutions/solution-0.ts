// Gale-Shapley approach
// Complexity (worst-case): O(n^2) time | O(n) space
function stableInternships(interns: number[][], teams: number[][]): number[][] {
  let available = new Array(interns.length).fill(true);
  let matchings = new Array(teams.length).fill(null);
  while (available.some(i => i)) {
    for (let intern = 0; intern < interns.length; intern++) {
      if (!available[intern]) continue;
      const team = interns[intern].shift() || 0;
      if (matchings[team] === null) {
        matchings[team] = intern;
        available[intern] = false;
      } else if (teams[team].indexOf(intern) < teams[team].indexOf(matchings[team])) {
        available[matchings[team]] = true;
        matchings[team] = intern;
        available[intern] = false;
      }
    }
  }

  return matchings.map((intern, team) => [intern, team]);
}

export { stableInternships as solution0 };
