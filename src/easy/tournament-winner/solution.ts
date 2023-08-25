// https://www.algoexpert.io/questions/tournament-winner

export default function tournamentWinner(competitions: string[][], results: number[]) {
  return mySolution1(competitions, results);
}

// time O(n), space O(k) k=#teams
function mySolution1(competitions: string[][], results: number[]) {
  let finalWinner = ""
  const homeTeamWon = 1;
  const points = {"": 0} as { [key: string]: number };
  for (let i = 0; i < results.length; i++) {
    let [homeTeam, awayTeam] = competitions[i]
    let currWinnerKey = (results[i] === homeTeamWon) ? homeTeam : awayTeam;

    updateScore(points, currWinnerKey);

    if (points[currWinnerKey] > points[finalWinner]) finalWinner = currWinnerKey;
  }

  return finalWinner;
}

function updateScore(points: { [key: string]: number }, currWinnerKey: string) {
  if (!points[currWinnerKey]) points[currWinnerKey] = 0;
  points[currWinnerKey] += 3;
}
