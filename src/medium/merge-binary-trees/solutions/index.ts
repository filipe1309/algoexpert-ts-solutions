export * from './solution-0';
export * from './solution-1';
export * from './solution-2';


// loop through the solutions and export them
// import { readdirSync, readFileSync, writeFileSync } from 'fs';

// const SOLUTIONS_DIR = '.';

// const solutions = readdirSync(SOLUTIONS_DIR)
//   .filter((file) => file.startsWith('solution-'))
//   .map((file) => readFileSync(`${SOLUTIONS_DIR}/${file}`, 'utf8'));

// solutions.forEach((solution, index) => {
//   const solutionName = solution.match(/(?<=function )\w+/)?.[0] ?? '';
//   const solutionExport = `export * from './${solutionName}';`;
//   writeFileSync(`${SOLUTIONS_DIR}/${index}.ts`, solutionExport);
// });



