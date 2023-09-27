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

# read new solution number
NEW_SOLUTION_NUMBER=$(wc -l < src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solutions/index.ts | tr -d '[:space:]')
LAST_SOLUTION_NUMBER=$(($NEW_SOLUTION_NUMBER - 1))

# Confirm with Yy or Enter
echo -e "👉 You are about to create a new solution (#${NEW_SOLUTION_NUMBER}) for ${GREEN}${BOLD}${NAME_SNAKE}${NC} challenge in ${GREEN}${BOLD}${LEVEL_LOWERCASE}${NC} level."
echo -e "👉 Is this correct? (Y/n)"
read -p "👉 " confirm
if [[ ${confirm} != "Y" && ${confirm} != "y" && ${confirm} != "" ]]; then echo -e "${RED}${BOLD}❌ Aborted!${NC}"; exit 1; fi
echo -e "✅ ${GREEN}${BOLD}Confirmed!${NC}"

echo ""

########################## Create solution file ##########################

# "📝 Creating new challenge ${NAME_SNAKE} in ${LEVEL_LOWERCASE} level..."
echo -e "📝 Creating new solution ${GREEN}${BOLD}${NAME_SNAKE}${NC} in ${GREEN}${BOLD}${LEVEL_LOWERCASE}${NC} level..."

# mkdir src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solutions

create_challenge_file() {
  local FILENAME=$1
  local LEVEL=$2
  local NAME_SNAKE=$3
  local NAME=$4
  local CATEGORY=$5
  local CONTENT=$6
  # if CONTENT is empty, read CONTENT from template file
  if [[ -z ${CONTENT} ]]; then
    TEMPLATE_FILENAME=$FILENAME
    # if filename is solution-*.ts, rename to solution-0.ts
    if [[ ${TEMPLATE_FILENAME} == "solutions/solution-"*".ts" ]]; then TEMPLATE_FILENAME="solutions/solution-0.ts"; fi
    echo -e " 👉 loading template file scripts/templates/${TEMPLATE_FILENAME}..."
    # capitalize level name
    LEVEL_CAP=$(echo ${LEVEL} | perl -pe 's/(\w+)/\u$1/g')
    CONTENT=$(export NAME=${NAME} && export NAME_SNAKE=${NAME_SNAKE} && export LEVEL=${LEVEL_CAP} && export CATEGORY=${CATEGORY} && cat scripts/templates/${TEMPLATE_FILENAME} | envsubst)
  fi
  echo -e " 👉 Creating ${GRAY}${BOLD}src/${LEVEL}/${NAME_SNAKE}/${FILENAME}${NC} file..."
  touch src/${LEVEL}/${NAME_SNAKE}/${FILENAME}
  echo "$CONTENT" >> src/${LEVEL}/${NAME_SNAKE}/${FILENAME}
}

# Create new solution file
NAME_CAMEL=$(echo ${NAME_SNAKE} | perl -pe 's/(^|-)(\w)/\u$2/g' | perl -nE 'say lcfirst')
create_challenge_file "solutions/solution-${NEW_SOLUTION_NUMBER}.ts" ${LEVEL_LOWERCASE} ${NAME_SNAKE} ${NAME_CAMEL} "solution${NEW_SOLUTION_NUMBER}"

# Update solution index file
echo -e " 👉 Updating ${GRAY}${BOLD}src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solutions/index.ts${NC} file..."
echo "export * from './solution-${NEW_SOLUTION_NUMBER}';" >> src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solutions/index.ts

# Update test file, inserting import statement after last import "from "./solutions";""
echo -e " 👉 Updating ${GRAY}${BOLD}src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solution.spec.ts${NC} file..."
# get last import statement line number
LAST_IMPORT_LINE_NUMBER=$(grep -n "from \"./solutions\";" src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solution.spec.ts | cut -f1 -d:)
LAST_IMPORT_LINE_NUMBER=$(($LAST_IMPORT_LINE_NUMBER - 1))
# add "solution-{NEW_SOLUTION_NUMBER}," after last import statement
sed -i '' "${LAST_IMPORT_LINE_NUMBER}s/$/\n  solution${NEW_SOLUTION_NUMBER},   \/\/ time O(??) | space O(??)/" src/${LEVEL_LOWERCASE}/${NAME_SNAKE}/solution.spec.ts





echo -e "✅ ${GREEN}${BOLD}Done!${NC}"

