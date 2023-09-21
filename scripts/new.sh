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
    "name")        NAME_SNAKE="$value" ;;
    "level")       level="$value" ;;
    "category")    category="$value" ;;
    *)
  esac
done
# read challenge name if not provided ${NAME_SNAKE}
if [ -z ${NAME_SNAKE} ]; then 
  echo -e "Type challenge ${BOLD}name${RESET} in ${BOLD}snake-case${RESET} ${GRAY_DARKER}(ex: valid-subsequence)${RESET}";
  echo -e "${BOLD}${ITALIC}OR${RESET}";
  echo -e "Paste challenge ${BOLD}URL${RESET} ${GRAY_DARKER}(ex: https://www.algoexpert.io/questions/valid-subsequence)${RESET}";
  read -p "👉 " NAME_SNAKE
fi
# if challenge name is empty, exit
if [ -z ${NAME_SNAKE} ]; then echo "❌ Please provide a challenge name"; exit 1; fi
# if name is a url instead of a name, extract name from url
if [[ ${NAME_SNAKE} == *"https://www.algoexpert.io/questions/"* ]]; then
  NAME_SNAKE=$(echo ${NAME_SNAKE} | sed 's/https:\/\/www.algoexpert.io\/questions\///g')
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
echo -e "👉 You are about to create a new challenge ${GREEN}${BOLD}${NAME_SNAKE}${RESET} in ${GREEN}${BOLD}${level}${RESET} level."
echo -e "👉 Is this correct? (Y/n)"
read -p "👉 " confirm
if [[ ${confirm} != "Y" && ${confirm} != "y" && ${confirm} != "" ]]; then echo -e "${RED}${BOLD}❌ Aborted!${RESET}"; exit 1; fi
echo -e "✅ ${GREEN}${BOLD}Confirmed!${RESET}"

echo ""

# "📝 Creating new challenge ${NAME_SNAKE} in ${level} level..."
echo -e "📝 Creating new challenge ${GREEN}${BOLD}${NAME_SNAKE}${RESET} in ${GREEN}${BOLD}${level}${RESET} level..."

# Create directory
# if level directory does not exist, create it
if [ ! -d "src/${level}" ]; then
  echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}${RESET} directory..."
  mkdir src/${level}
fi
echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}/${NAME_SNAKE}${RESET} directory..."
mkdir src/${level}/${NAME_SNAKE}

# Create README file
echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}/${NAME_SNAKE}/README.md${RESET} file..."
touch src/${level}/${NAME_SNAKE}/README.md
# replace - with empty space
NAME=$(echo ${NAME_SNAKE} | sed 's/-/ /g')
# capitalize first letter of each word of NAME, ex: valid subsequence => Valid Subsequence
NAME=$(echo ${NAME} | perl -pe 's/(\w+)/\u$1/g')
# select category if not provided ${cat}
if [[ -z ${category} ]]; then
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
> Source: https://www.algoexpert.io/questions/${NAME_SNAKE}  
> Difficulty: ${LEVEL}  
> Category: ${CATEGORY}
---
" >> src/${level}/${NAME_SNAKE}/README.md


create_challenge_file() {
  local level=$1
  local NAME_SNAKE=$2
  local NAME=$3
  local filename=$4
  local content=$5
  content=$(export NAME=${NAME} && cat scripts/templates/${filename} | envsubst)
  echo -e " 👉 Creating ${GRAY}${BOLD}src/${level}/${NAME_SNAKE}/${filename}${RESET} file..."
  touch src/${level}/${NAME_SNAKE}/${filename}
  echo "$content" >> src/${level}/${NAME_SNAKE}/${filename}
}


# Create solution file
CAMEL=$(echo ${NAME_SNAKE} | perl -pe 's/(^|-)(\w)/\u$2/g' | perl -nE 'say lcfirst')
create_challenge_file ${level} ${NAME_SNAKE} ${CAMEL} "solution-0.ts" "$content"


# Create test file
create_challenge_file ${level} ${NAME_SNAKE} ${NAME_SNAKE} "solution.spec.ts" "$content"

# Create test cases file
create_challenge_file ${level} ${NAME_SNAKE} ${NAME_SNAKE} "cases.ts" "$content"

echo -e "✅ ${GREEN}${BOLD}Done!${RESET}"

