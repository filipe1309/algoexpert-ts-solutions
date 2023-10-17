// Sort && Map with Durations & Indices approach
// Complexity (worst-case): O(n*logn) time | O(n) space
function taskAssignment(k: number, tasks: number[]) {
  const pairedTasks: number[][] = [];
  const taskDurationsToIndices = getTaskDurationsToIndices(tasks);
  const sortedTasks = [...tasks].sort((a, b) => a - b);

  for (let idx = 0; idx < k; idx++) {
    const task1Duration = sortedTasks[idx];
    const task1Indice = taskDurationsToIndices[task1Duration].pop()!;
    const task2Duration = sortedTasks[tasks.length - idx - 1];
    const task2Indice = taskDurationsToIndices[task2Duration].pop()!;

    pairedTasks.push([task1Indice, task2Indice])
  }

  return pairedTasks;
}

// Map with durantion and positions (index)
function getTaskDurationsToIndices(tasks: number[]) {
  const tasksDurationsToIndices: {[task: number]: number[]} = {};

  for (let idx = 0; idx < tasks.length; idx++) {
    const taskDuration = tasks[idx];
    if (taskDuration in tasksDurationsToIndices) {
      tasksDurationsToIndices[taskDuration].push(idx)
    } else {
      tasksDurationsToIndices[taskDuration] = [idx]
    }
  }

  return tasksDurationsToIndices;
}

export { taskAssignment as solution1 };
