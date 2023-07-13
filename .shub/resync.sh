#!/bin/bash

# Shub Resync Script

.shub/shub-logo.sh
source .shub/colors.sh

echo -e "${GREEN}"
echo "#############################################"
echo "               DOTR RESYNC                   "
echo -e "#############################################${NC}"

# Detect if there is a tag with interation number, and if so, ask user if they want to deploy using that tag info
GIT_BRANCH=$(git branch --show-current)
GIT_REPO=$(git config --get remote.origin.url)
NEWEST_TAG=$(git ls-remote --tags --refs --sort="v:refname" $GIT_REPO | tail -n1 | sed 's/.*\///')
arrIN=(${NEWEST_TAG//-/ })
CLASS_TYPE_DETECTED=${arrIN[0]}
NUM=${arrIN[1]}
NUM=$((NUM + 1))
GIT_BRANCH_FROM_TAG="$CLASS_TYPE_DETECTED-$NUM"
GIT_DEFAULT_BRANCH=$(git remote show origin | grep 'HEAD' | cut -d':' -f2 | sed -e 's/^ *//g' -e 's/ *$//g')
[ $GIT_DEFAULT_BRANCH = "(unknown)" ] && GIT_DEFAULT_BRANCH="main"

if [[ $NUM =~ ^[0-9]+$ ]] && [ "$GIT_BRANCH_FROM_TAG" != "$GIT_BRANCH" ]; then
    echo ""
    echo -e "${YELLOW}⚠️  Interation number \"$NUM\" of \"$CLASS_TYPE_DETECTED\" was detected from the last tag!${NC}"
    GIT_BRANCH_FROM_NEXT_TAG="$CLASS_TYPE_DETECTED-$NUM"
    read -r -p "Do you want to use it to set your branch as \"$(echo -e $GREEN"$CLASS_TYPE_DETECTED-$NUM"$NC)\" [$(echo -e $GREEN"Y"$NC)/n]? " response
    response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
    if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
        if git status | grep notes.md; then
          git add notes.md && git commit -m "docs: update notes"
        fi
        git checkout $GIT_DEFAULT_BRANCH
        git pull origin $GIT_DEFAULT_BRANCH
        if [ $? -ne 0 ]; then
          echo -e "${RED}❌ Pull \"$GIT_DEFAULT_BRANCH\" fails!${NC}"
          git checkout $GIT_BRANCH
          exit 1
        fi
        git checkout -b $GIT_BRANCH_FROM_NEXT_TAG
        echo -e "${GREEN}✅  Branch set to \"$GIT_BRANCH_FROM_NEXT_TAG\"${NC}"
        GIT_BRANCH_NEXT_CLASS_UP=$(echo "$GIT_BRANCH_FROM_NEXT_TAG" | tr '[:lower:]' '[:upper:]')  # toupper
        echo "## $GIT_BRANCH_NEXT_CLASS_UP" >> notes.md
        echo "" >> notes.md

        if [ "$GIT_BRANCH" != "$GIT_DEFAULT_BRANCH" ]; then
          read -r -p "Do you want to delete last branch \"$(echo -e $GREEN"$GIT_BRANCH"$NC)\" [$(echo -e $GREEN"Y"$NC)/n]? " response
          response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
          if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
            git branch -d $GIT_BRANCH
          fi
        fi
    fi
else
  echo -e "${YELLOW}⚠️  No interation number detected!${NC}"
fi
