#!/bin/bash

# This script creates a new challenge directory with README, solution, test and test cases files

clear

source scripts/menu.sh
source scripts/colors.sh

# Read arguments
# read arguments from command line
for argument in "$@"
do
  key=$(echo $argument | cut -f1 -d=)
  value=$(echo $argument | cut -f2 -d=)

  case "$key" in
    "name")        name="$value" ;;
    "level")       level="$value" ;;
    "category")    category="$value" ;;
    *)
  esac
done
# read challenge name if not provided ${name}
if [ -z ${name} ]; then 
  echo -e "Type challenge ${BOLD}name${RESET} in ${BOLD}snake-case${RESET} ${GRAY_DARKER}(ex: valid-subsequence)${RESET}";
  echo -e "${BOLD}${ITALIC}OR${RESET}";
  echo -e "Paste challenge ${BOLD}URL${RESET} ${GRAY_DARKER}(ex: https://www.algoexpert.io/questions/valid-subsequence)${RESET}";
  read -p "👉 " name
fi
# if challenge name is empty, exit
if [ -z ${name} ]; then echo "❌ Please provide a challenge name"; exit 1; fi
# if name is a url instead of a name, extract name from url
if [[ ${name} == *"https://www.algoexpert.io/questions/"* ]]; then
  name=$(echo ${name} | sed 's/https:\/\/www.algoexpert.io\/questions\///g')
fi
# read challenge level if not provided ${level}
if [ -z ${level} ]; then 
  echo "Challenge level:"
  case `select_opt "😎 easy" "😅 medium" "😰 hard" "😱 very-hard"` in
      0) level="easy";;
      1) level="medium";;
      2) level="hard";;
      3) level="very-hard";;
  esac
fi
# if challenge level is empty, exit
if [ -z ${level} ]; then echo "❌ Please provide a level (easy, medium, hard, very-hard)"; exit 1; fi

# Confirm with Yy or Enter
echo -e "👉 You are about to create a new challenge ${GREEN}${BOLD}${name}${RESET} in ${GREEN}${BOLD}${level}${RESET} level."
echo -e "👉 Is this correct? (Y/n)"
read -p "👉 " confirm
if [[ ${confirm} != "Y" && ${confirm} != "y" && ${confirm} != "" ]]; then echo -e "${RED}${BOLD}❌ Aborted!${RESET}"; exit 1; fi
echo -e "✅ ${GREEN}${BOLD}Confirmed!${RESET}"

echo ""

# "📝 Creating new challenge ${name} in ${level} level..."
echo -e "📝 Creating new challenge ${GREEN}${BOLD}${name}${RESET} in ${GREEN}${BOLD}${level}${RESET} level..."

# Create directory
# if level directory does not exist, create it
if [ ! -d "src/${level}" ]; then
  echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}${RESET} directory..."
  mkdir src/${level}
fi
echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}/${name}${RESET} directory..."
mkdir src/${level}/${name}

# Create README file
echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}/${name}/README.md${RESET} file..."
touch src/${level}/${name}/README.md
# replace - with empty space
NAME=$(echo ${name} | sed 's/-/ /g')
# capitalize first letter of each word of NAME, ex: valid subsequence => Valid Subsequence
NAME=$(echo ${NAME} | perl -pe 's/(\w+)/\u$1/g')
# select category if not provided ${cat}
if [ -z ${category} ]; then
  echo "Category:"
  case `select_opt "Arrays" "Binary Trees" "Binary Search Trees" "Dynamic Programming" "Famous Algorithms" "Graphs" "Greedy Algorithms" "Heaps" "Linked Lists" "Recursion" "Searching" "Sorting" "Stacks" "Strings" "Tries"` in
      0) category="Arrays";;
      1) category="Binary Trees";;
      2) category="Binary Search Trees";;
      3) category="Dynamic Programming";;
      4) category="Famous Algorithms";;
      5) category="Graphs";;
      6) category="Greedy Algorithms";;
      7) category="Heaps";;
      8) category="Linked Lists";;
      9) category="Recursion";;
      10) category="Searching";;
      11) category="Sorting";;
      12) category="Stacks";;
      13) category="Strings";;
      14) category="Tries";;
  esac
fi
# capitalize level name
LEVEL=$(echo ${level} | perl -pe 's/(\w+)/\u$1/g')
# capitalize category name
CATEGORY=$(echo ${category} | perl -pe 's/(\w+)/\u$1/g')
echo "# ${NAME}
> Source: https://www.algoexpert.io/questions/${name}  
> Difficulty: ${LEVEL}  
> Category: ${CATEGORY}
---
" >> src/${level}/${name}/README.md

# Create solution file
echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}/${name}/solution.ts${RESET} file..."
touch src/${level}/${name}/solution.ts
CAMEL=$(echo ${name} | perl -pe 's/(^|-)(\w)/\u$2/g' | perl -nE 'say lcfirst')
echo -e "// Test: make test t=${name}
function ${CAMEL}(array: number[]): number[] {
  return mySolution1(array); // time O(??) | space O(??)
}

// ?? approach
// Complexity (worst-case): time O(??) | space O(??)
function mySolution1(array: number[]): number[] {
  return [];
}

export default ${CAMEL};" >> src/${level}/${name}/solution.ts

# Create test file
echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}/${name}/solution.spec.ts${RESET} file..."
touch src/${level}/${name}/solution.spec.ts
echo "import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('${name}', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    expect(result).toEqual(expected);
  });
});" >> src/${level}/${name}/solution.spec.ts

# Create test cases file
echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}/${name}/cases.ts${RESET} file..."
touch src/${level}/${name}/cases.ts
echo "export default [
  {
    input: [],
    expected: []
  },
];" >> src/${level}/${name}/cases.ts
echo -e "✅ ${GREEN}${BOLD}Done!${RESET}"

