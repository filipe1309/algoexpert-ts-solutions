#!/bin/bash

clear

source scripts/colors.sh

# This script commits changes to a challenge directory and updates the README checkbox

# read m argument from command line
for argument in "$@"
do
  key=$(echo $argument | cut -f1 -d=)
  value=$(echo $argument | cut -f2 -d=)

  case "$key" in
    "m")        message="$value" ;;
    *)
  esac
done


git add .
# get challenge name and level from git status
CHALLENGE_PATH=$(git status -s | grep -oE 'src\/.*\/.*\/' | sed 's/src\///g')
LEVEL=$(echo ${CHALLENGE_PATH} | cut -d'/' -f1)
# get solution file name, ex: solution-0.ts, solution-1.ts etc, remove level and challenge name
SOLUTION_NAME=$(git status -s | grep -oE 'solution-[0-9].ts' | sed 's/src\///g' | tail -1)
NAME_SNAKE_CASE=$(echo ${CHALLENGE_PATH} | cut -d'/' -f2)

# if no message provided, set default message
if [ -z ${message} ]; then 
  # convert dolution name from solution-0.ts to solution 0
  SOLUTION_NAME=$(echo ${SOLUTION_NAME} | sed 's/-/ /g' | sed 's/.ts//g')
  message="feat(${NAME_SNAKE_CASE}): add ${SOLUTION_NAME}"
fi

# replace - with empty space
NAME=$(echo ${NAME_SNAKE_CASE} | sed 's/-/ /g')
echo -e "📝 Committing changes to ${GREEN}${BOLD}${NAME}${NC} in ${GREEN}${BOLD}${LEVEL}${NC} level..."
echo -e "${GRAY_DARKER}commit msg: \"${message}\"${NC}";
git status -s
# request confirm before commit, y as default with enter
read -p "Are you sure you want to commit? [Y/n] " -n 1 -r;
echo "";
if [[ $REPLY =~ ^[Yy]$ ]] || [[ $REPLY == "" ]]; then
  echo "✅ Committing changes...";
else
  echo -e "${RED}${BOLD}❌ Commit aborted${NC}";
  exit 1;
fi

git commit -m "${message}"
echo -e "${GREEN}${BOLD}✅ Done!${NC}"

clear


# update readme checkbox
FULL_LINE=$(grep -n "${NAME_SNAKE_CASE}" README.md)
# verify [x] is not already checked
if [[ ${FULL_LINE} == *"[x]"* ]]; then
  echo -e "${GREEN}${BOLD}✅ README checkbox already checked${NC}";
else
  echo -e "${GREEN}${BOLD}✅ README checkbox not checked${NC}";
  CHECKBOX_LINE_NUMBER=$(echo "${FULL_LINE}" | cut -d':' -f1)
  echo -e "📝 Pushing changes to ${GREEN}${BOLD}${NAME}${NC} in ${GREEN}${BOLD}${LEVEL}${NC} level in README..."
  echo -e "👉 Updating \"${BOLD}${FULL_LINE}${NC}\", at ${BOLD}${CHECKBOX_LINE_NUMBER}${NC} line"
  # request confirm before update README, y as default with enter
  read -p "Are you sure you want to update README? [Y/n] " -n 1 -r;
  echo "";
  if [[ $REPLY =~ ^[Yy]$ ]] || [[ $REPLY == "" ]]; then
    # ✅ Updating README checkbox at line ${CHECKBOX_LINE_NUMBER} of ${NAME_SNAKE_CASE}...
    echo -e "${GREEN}${BOLD}✅ Updating README checkbox at line ${CHECKBOX_LINE_NUMBER} of ${NAME_SNAKE_CASE}...${NC}";
  else
    echo -e "${RED}${BOLD}❌ README update aborted${NC}";
    exit 1;
  fi
  # replace empty space (4th character) with x
  sed -i '' "${CHECKBOX_LINE_NUMBER}s/./x/4" README.md
  git add README.md
  git commit -m "docs(README.md): check ${NAME} in ${LEVEL} level"
fi

echo -e "${GREEN}${BOLD}✅ Done!${NC}"
exit 0;

