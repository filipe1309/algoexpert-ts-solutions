#!/bin/bash

# This script creates a new challenge directory with README, solution, test and test cases files

clear

source scripts/menu.sh
source scripts/colors.sh

########################## Read arguments ##########################

for argument in "$@"
do
  key=$(echo $argument | cut -f1 -d=)
  value=$(echo $argument | cut -f2 -d=)

  case "$key" in
    "name")        NAME_SNAKE="$value" ;;
    "level")       LEVEL_LOWERCASE="$value" ;;
    "category")    CATEGORY="$value" ;;
    *)
  esac
done
# read challenge name if not provided ${NAME_SNAKE}
if [ -z ${NAME_SNAKE} ]; then 
  echo -e "Type challenge ${BOLD}name${NC} in ${BOLD}snake-case${NC} ${GRAY_DARKER}(ex: valid-subsequence)${NC}";
  echo -e "${BOLD}${ITALIC}OR${NC}";
  echo -e "Paste challenge ${BOLD}URL${NC} ${GRAY_DARKER}(ex: https://www.algoexpert.io/questions/valid-subsequence)${NC}";
  read -p "👉 " NAME_SNAKE
fi
# if challenge name is empty, exit
if [ -z ${NAME_SNAKE} ]; then echo "❌ Please provide a challenge name"; exit 1; fi
# if name is a url instead of a name, extract name from url
if [[ ${NAME_SNAKE} == *"https://www.algoexpert.io/questions/"* ]]; then
  NAME_SNAKE=$(echo ${NAME_SNAKE} | sed 's/https:\/\/www.algoexpert.io\/questions\///g')
fi
# read challenge level if not provided ${LEVEL_LOWERCASE}
if [ -z ${LEVEL_LOWERCASE} ]; then 
  echo "Challenge level:"
  case `select_opt "😎 easy" "😅 medium" "😰 hard" "😱 very-hard"` in
      0) LEVEL_LOWERCASE="easy";;
      1) LEVEL_LOWERCASE="medium";;
      2) LEVEL_LOWERCASE="hard";;
      3) LEVEL_LOWERCASE="very-hard";;
  esac
fi
# if challenge level is empty, exit
if [ -z ${LEVEL_LOWERCASE} ]; then echo "❌ Please provide a level (easy, medium, hard, very-hard)"; exit 1; fi

# Confirm with Yy or Enter
echo -e "👉 You are about to create a new challenge ${GREEN}${BOLD}${NAME_SNAKE}${NC} in ${GREEN}${BOLD}${LEVEL_LOWERCASE}${NC} level."
echo -e "👉 Is this correct? (Y/n)"
read -p "👉 " confirm
if [[ ${confirm} != "Y" && ${confirm} != "y" && ${confirm} != "" ]]; then echo -e "${RED}${BOLD}❌ Aborted!${NC}"; exit 1; fi
echo -e "✅ ${GREEN}${BOLD}Confirmed!${NC}"

echo ""

########################## Create challenge files ##########################

# "📝 Creating new challenge ${NAME_SNAKE} in ${LEVEL_LOWERCASE} level..."
echo -e "📝 Creating new challenge ${GREEN}${BOLD}${NAME_SNAKE}${NC} in ${GREEN}${BOLD}${LEVEL_LOWERCASE}${NC} level..."

# Create directory
# if level directory does not exist, create it
if [ ! -d "src/${LEVEL_LOWERCASE}" ]; then
  echo -e " 👉 Creating ${GRAY}${BOLD}src/${LEVEL_LOWERCASE}${NC} directory..."
  mkdir src/${LEVEL_LOWERCASE}
fi
echo -e " 👉 Creating ${GRAY}${BOLD}src/${LEVEL_LOWERCASE}/${NAME_SNAKE}${NC} directory..."
mkdir src/${LEVEL_LOWERCASE}/${NAME_SNAKE}

echo -e " 👉 Creating ${GRAY}${BOLD}src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solutions${NC} directory..."
mkdir src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solutions

create_challenge_file() {
  local FILENAME=$1
  local LEVEL=$2
  local NAME_SNAKE=$3
  local NAME=$4
  local CATEGORY=$5
  local CONTENT=$6
  # if CONTENT is empty, read CONTENT from template file
  if [[ -z ${CONTENT} ]]; then
    # capitalize level name
    LEVEL_CAP=$(echo ${LEVEL} | perl -pe 's/(\w+)/\u$1/g')
    CONTENT=$(export NAME=${NAME} && export NAME_SNAKE=${NAME_SNAKE} && export LEVEL=${LEVEL_CAP} && export CATEGORY=${CATEGORY} && cat scripts/templates/${FILENAME} | envsubst)
  fi
  echo -e " 👉 Creating ${GRAY}${BOLD}src/${LEVEL}/${NAME_SNAKE}/${FILENAME}${NC} file..."
  touch src/${LEVEL}/${NAME_SNAKE}/${FILENAME}
  echo "$CONTENT" >> src/${LEVEL}/${NAME_SNAKE}/${FILENAME}
}

# Create README file
# select category if not provided ${cat}
if [[ -z ${CATEGORY} ]]; then
  echo "Category:"
  case `select_opt "Arrays" "Binary Trees" "Binary Search Trees" "Dynamic Programming" "Famous Algorithms" "Graphs" "Greedy Algorithms" "Heaps" "Linked Lists" "Recursion" "Searching" "Sorting" "Stacks" "Strings" "Tries"` in
      0) CATEGORY="Arrays";;
      1) CATEGORY="Binary Trees";;
      2) CATEGORY="Binary Search Trees";;
      3) CATEGORY="Dynamic Programming";;
      4) CATEGORY="Famous Algorithms";;
      5) CATEGORY="Graphs";;
      6) CATEGORY="Greedy Algorithms";;
      7) CATEGORY="Heaps";;
      8) CATEGORY="Linked Lists";;
      9) CATEGORY="Recursion";;
      10) CATEGORY="Searching";;
      11) CATEGORY="Sorting";;
      12) CATEGORY="Stacks";;
      13) CATEGORY="Strings";;
      14) CATEGORY="Tries";;
  esac
fi
CATEGORY_CAP=$(echo ${CATEGORY} | perl -pe 's/(\w+)/\u$1/g')
# replace - with empty space
NAME=$(echo ${NAME_SNAKE} | sed 's/-/ /g')
# capitalize first letter of each word of NAME, ex: valid subsequence => Valid Subsequence
NAME_CAP=$(echo ${NAME} | perl -pe 's/(\w+)/\u$1/g')
create_challenge_file "README.md" ${LEVEL_LOWERCASE} ${NAME_SNAKE} "${NAME_CAP}" "${CATEGORY_CAP}"

# Create solution file
NAME_CAMEL=$(echo ${NAME_SNAKE} | perl -pe 's/(^|-)(\w)/\u$2/g' | perl -nE 'say lcfirst')
create_challenge_file "solutions/solution-0.ts" ${LEVEL_LOWERCASE} ${NAME_SNAKE} ${NAME_CAMEL} "solution0"

# Create solution index file
create_challenge_file "solutions/index.ts" ${LEVEL_LOWERCASE} ${NAME_SNAKE} ${NAME_CAMEL} "${CATEGORY_CAP}" "export * from './solution-0';"

# Create test file
create_challenge_file "solution.spec.ts" ${LEVEL_LOWERCASE} ${NAME_SNAKE} ${NAME_SNAKE}

# Create test cases file
create_challenge_file "cases.ts" ${LEVEL_LOWERCASE} ${NAME_SNAKE} ${NAME_SNAKE}

echo -e "✅ ${GREEN}${BOLD}Done!${NC}"

