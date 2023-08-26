#!/bin/bash

# This script creates a new challenge directory with README, solution, test and test cases files

# Read arguments
# read arguments from command line
for argument in "$@"
do
  key=$(echo $argument | cut -f1 -d=)
  value=$(echo $argument | cut -f2 -d=)

  case "$key" in
    "c")        c="$value" ;;
    "l")        l="$value" ;;
    *)
  esac
done
# read challenge name if not provided $1
if [ -z ${c} ]; then echo "Challenge name:"; read c; fi
# if challenge name is empty, exit
if [ -z ${c} ]; then echo "❌ Please provide a challenge name"; exit 1; fi
# read challenge level if not provided $2
if [ -z ${l} ]; then read -p "Challenge level (easy, medium, hard, very-hard): " l; fi
# if challenge level is empty, exit
if [ -z ${l} ]; then echo "❌ Please provide a level (easy, medium, hard, very-hard)"; exit 1; fi


echo "📝 Creating new challenge ${c} in ${l} level..."

# Create directory
echo " 👉 Creating ${c} directory..."
mkdir src/${l}/${c}

# Create README file
echo " 👉 Creating ${c} README file..."
touch src/${l}/${c}/README.md
# replace - with empty space
NAME=$(echo ${c} | sed 's/-/ /g')
# capitalize first letter of each word of NAME, ex: valid subsequence => Valid Subsequence
NAME=$(echo ${NAME} | perl -pe 's/(\w+)/\u$1/g')
echo "# ${NAME}
> Source: https://www.algoexpert.io/questions/${c}  
> Difficulty: ${l}  
> Category: 
---
" >> src/${l}/${c}/README.md

# Create solution file
echo " 👉 Creating ${c} solution file..."
touch src/${l}/${c}/solution.ts
CAMEL=$(echo ${c} | perl -pe 's/(^|-)(\w)/\u$2/g' | perl -nE 'say lcfirst')
echo -e "// Test: make test-one t=${c}
function ${CAMEL}(input) {
  return mySolution1(); // time O() | space O()
}

// Complexity (worst-case): time O() | space O()
function mySolution1() {
  
}

export default ${CAMEL};" >> src/${l}/${c}/solution.ts

# Create test file
echo " 👉 Creating ${c} test files..."
touch src/${l}/${c}/solution.spec.ts
echo "import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('${c}', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    expect(result).toEqual(expected);
  });
});" >> src/${l}/${c}/solution.spec.ts

# Create test cases file
echo " 👉 Creating ${c} test cases file..."
touch src/${l}/${c}/cases.ts
echo "export default [
  {
    input: [],
    expected: []
  },
];" >> src/${l}/${c}/cases.ts
echo "✅ Done!"

