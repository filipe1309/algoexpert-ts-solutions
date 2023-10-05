// Iterative BF approach
// Complexity (worst-case): O(n^2) time | O(n^2) space
function stableInternships(interns: number[][], teams: number[][]): number[][] {
  const chosenInterns: Record<number, number> = {};
  const freeInterns: number[] = interns.map((_, i) => i);
  const currentInternChoices = new Array(interns.length).fill(0);
  const teamMaps: Record<number, number>[] = [];

  // create a map of each team's preference for each intern
  for (const team of teams) {
    const rank: Record<number, number> = {};
    team.forEach((internNum, i) => rank[internNum] = i);
    teamMaps.push(rank);
  }

  while (freeInterns.length > 0) {
    const internNum = freeInterns.pop()!;

    // get the intern's current team preference
    const intern = interns[internNum];
    const teamPreference = intern[currentInternChoices[internNum]];
    currentInternChoices[internNum]++;

    // if the team is not in the chosen interns, add it
    if (!(teamPreference in chosenInterns)) {
      chosenInterns[teamPreference] = internNum;
      continue;
    }

    // if the team is in the chosen interns, check if the intern is preferred
    const previousIntern = chosenInterns[teamPreference];
    const previousInternRank = teamMaps[teamPreference][previousIntern];
    const currentInternRank = teamMaps[teamPreference][internNum];

    // if the intern is preferred, add the previous intern to the free interns
    // and add the intern to the chosen interns
    // otherwise, add the intern to the free interns
    if (currentInternRank < previousInternRank) {
      freeInterns.push(previousIntern);
      chosenInterns[teamPreference] = internNum;
    } else freeInterns.push(internNum)
  }

  // return the chosen interns as an array of [intern, team] pairs
  const matches = Object.entries(chosenInterns).map(([t, i]) => [i, parseInt(t)]);

  return matches;
}

export { stableInternships as solution1 };
