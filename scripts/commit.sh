#!/bin/bash

# This script commits changes to a challenge directory

git add .
# get challenge name and level from git status
CHALLENGE_PATH=$(git status -s | grep -oE 'src\/.*\/.*\/' | sed 's/src\///g')
LEVEL=$(echo ${CHALLENGE_PATH} | cut -d'/' -f1)
NAME_SNAKE_CASE=$(echo ${CHALLENGE_PATH} | cut -d'/' -f2)
# replace - with empty space
NAME=$(echo ${NAME_SNAKE_CASE} | sed 's/-/ /g')
echo "📝 Committing changes to ${NAME} in ${LEVEL} level..."
echo "✅ COMMIT MSG: \"feat(${LEVEL}): add my solution to ${NAME}\"";
git status -s
# request confirm before commit, y as default with enter
read -p "Are you sure you want to commit? [Y/n] " -n 1 -r;
echo "";
if [[ $REPLY =~ ^[Yy]$ ]] || [[ $REPLY == "" ]]; then
  echo "✅ Committing changes...";
else
  echo "❌ Commit aborted";
  exit 1;
fi
git commit -m "feat(${LEVEL}): add my solution to ${NAME}"
echo "✅ Done!"
echo ""
echo "📝 Pushing changes to ${NAME} in ${LEVEL} level in README..."
# update readme checkbox
FULL_LINE=$(grep -n "${NAME_SNAKE_CASE}" README.md)
CHECKBOX_LINE=$(echo "${FULL_LINE}" | cut -d':' -f1)
echo "Item to update: ${FULL_LINE}, at line ${CHECKBOX_LINE}"
# request confirm before update README, y as default with enter
read -p "Are you sure you want to update README? [Y/n] " -n 1 -r;
echo "";
if [[ $REPLY =~ ^[Yy]$ ]] || [[ $REPLY == "" ]]; then
  echo "✅ Updating README checkbox...";
else
  echo "❌ README update aborted";
  exit 1;
fi
echo "Updating README checkbox at line ${CHECKBOX_LINE} of ${NAME_SNAKE_CASE}..."
# replace empty space (4th character) with x
sed -i '' "${CHECKBOX_LINE}s/./x/4" README.md
git add README.md
git commit -m "docs(README.md): check ${NAME} in ${LEVEL} level"
echo "✅ Done!"

