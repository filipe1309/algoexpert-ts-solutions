// https://www.algoexpert.io/questions/optimal-freelancing

function optimalFreelancing(jobs: Record<string, number>[]) {
  return mySolution1(jobs);
}

// Complexity (worst-case): time O(n*logn) | space O(n)
function mySolution1(jobs: Record<string, number>[]) {
  let days: Record<number, number[]> = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };

  for (let job of jobs) {
    if (job.deadline > 7) job.deadline = 7;
    days[job.deadline].push(job.payment);
    days[job.deadline].sort((a, b) => b - a);
    days[job.deadline] = days[job.deadline].slice(0, job.deadline);
  }

  for (let i = 7; i > 0; i--) {
    if (days[i].length > 1) {
      for (let j = 1; j <= (days[i].length - 1); j++) {
        let lastEl = days[i][j];
        for (let k = 1; k < i; k++) {
          if (days[k].length === 0 || (days[k][0] < lastEl)) {
            days[k][0] = lastEl;
            break;
          }
        }
      }
    }
  }

  let total = 0;
  for (let day in days) {
    total += (days[day][0] ?? 0);
  }

  return total;
}

export default optimalFreelancing;
