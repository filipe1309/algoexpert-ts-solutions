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
NAME_SNAKE_CASE=$(echo ${CHALLENGE_PATH} | cut -d'/' -f2)
# replace - with empty space
NAME=$(echo ${NAME_SNAKE_CASE} | sed 's/-/ /g')
echo -e "📝 Committing changes to ${GREEN}${BOLD}${NAME}${NORMAL}${NC} in ${GREEN}${BOLD}${LEVEL}${NORMAL}${NC} level..."
echo -e "${GRAY_DARKER}commit msg: \"feat(${NAME_SNAKE_CASE}): add my solution\"${NC}";
git status -s
# request confirm before commit, y as default with enter
read -p "Are you sure you want to commit? [Y/n] " -n 1 -r;
echo "";
if [[ $REPLY =~ ^[Yy]$ ]] || [[ $REPLY == "" ]]; then
  echo "✅ Committing changes...";
else
  echo -e "${RED}${BOLD}❌ Commit aborted${NORMAL}${NC}";
  exit 1;
fi

# if no message provided, set default message
if [ -z ${message} ]; then 
  message="feat(${NAME_SNAKE_CASE}): add my solution"
fi

git commit -m "${message}"
echo -e "${GREEN}${BOLD}✅ Done!${NORMAL}${NC}"

clear

echo -e "📝 Pushing changes to ${GREEN}${BOLD}${NAME}${NORMAL}${NC} in ${GREEN}${BOLD}${LEVEL}${NORMAL}${NC} level in README..."
# update readme checkbox
FULL_LINE=$(grep -n "${NAME_SNAKE_CASE}" README.md)
CHECKBOX_LINE=$(echo "${FULL_LINE}" | cut -d':' -f1)
echo -e "👉 Updating \"${BOLD}${FULL_LINE}${NORMAL}\", at ${BOLD}${CHECKBOX_LINE}${NORMAL} line"
# request confirm before update README, y as default with enter
read -p "Are you sure you want to update README? [Y/n] " -n 1 -r;
echo "";
if [[ $REPLY =~ ^[Yy]$ ]] || [[ $REPLY == "" ]]; then
  # ✅ Updating README checkbox at line ${CHECKBOX_LINE} of ${NAME_SNAKE_CASE}...
  echo -e "${GREEN}${BOLD}✅ Updating README checkbox at line ${CHECKBOX_LINE} of ${NAME_SNAKE_CASE}...${NORMAL}${NC}";
else
  echo -e "${RED}${BOLD}❌ README update aborted${NORMAL}${NC}";
  exit 1;
fi
# replace empty space (4th character) with x
sed -i '' "${CHECKBOX_LINE}s/./x/4" README.md
git add README.md
git commit -m "docs(README.md): check ${NAME} in ${LEVEL} level"
echo -e "${GREEN}${BOLD}✅ Done!${NORMAL}${NC}"

