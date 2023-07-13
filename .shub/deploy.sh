#!/bin/bash

# Shub Deploy Script

.shub/shub-logo.sh
source .shub/colors.sh
source .shub/helpers.sh
source .shub/shub-envs.sh

read_arguments $*

echo -e "${GREEN}"
echo "#############################################"
echo "               Shub DEPLOY $VERSION                   "
echo -e "#############################################${NC}"
echo ""

.shub/self-update.sh && exit 0

if [ -f ".shub-state.ini" ]; then
    source .shub-state.ini
    source .shub-state-variables.ini
    echo -e "${YELLOW}⚠️  State file founded!${NC}"
  
    read -r -p "Do you want to use state file at step $(echo -e $GREEN"$STATE"$NC) [$(echo -e $GREEN"Y"$NC)/n]? " response
    response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
    if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
        echo -e "👉 State setted to \"${GREEN}$STATE${NC}\"."
    else
        STATE="0"
        flush_state
    fi
fi


if test $STATE -lt $STATE_STEP_SHUB_FILES_ID; then
    save_state_var "FAILED_MSG" "$FAILED_MSG"
    save_state_var "GIT_BRANCH" "$GIT_BRANCH"
    save_state_var "GIT_BRANCH_NEXT_CLASS" "$GIT_BRANCH_NEXT_CLASS"
    save_state_var "GIT_BRANCH_NEXT_CLASS_LW" "$GIT_BRANCH_NEXT_CLASS_LW"
    save_state_var "GIT_BRANCH_NEXT_CLASS_UP" "$GIT_BRANCH_NEXT_CLASS_UP"
fi

echo -e "🔽 Branch to deploy: \"${GREEN}$GIT_BRANCH${NC}\""

# Check if branch is master/main
MAIN_BRANCHES=("master" "main")
if array_contains MAIN_BRANCHES "$GIT_BRANCH"; then
    echo  -e "${YELLOW}⚠️  You are commiting to the $GIT_BRANCH branch, and this deploy script is not designed to deploy to the $GIT_BRANCH branch.${NC}"
    confirm "$(echo -e $YELLOW"Are you sure you want to continue?"$NC) [$(echo -e $GREEN"Y"$NC)/n]? "
fi

echo -e "⏩ Next branch:      \"${GREEN}$GIT_BRANCH_NEXT_CLASS_LW${NC}\""

echo "---------------------------------------------"

#################
#### TAGGING ####
#################

generateTag() {
    if [[ $NEWEST_TAG != *$GIT_BRANCH* ]]; then
        if [ -z "$ALL" ]; then
            read -r -p "Do you want to generate a $(echo -e $GREEN"tag"$NC) based on branch \"$(echo -e $GREEN"$GIT_BRANCH"$NC)\" [$(echo -e $GREEN"Y"$NC)/n]? " response
            response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
        else
            response="y"
        fi
        if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
            echo ""
            echo -e "🏷  ${GREEN}Generating tag...${NC}"
            echo ""
            echo "# TAG MESSAGE"
            echo -e "# Example: ${GREEN}\"$(git tag -n9 | head -n 1 | awk '{for(i=2;i<=NF;++i)printf $i FS}' | awk -F" - " '{print $2}')\"${NC}"
            TAG_MSG_PREFIX_SUGGESTION="$(tr '[:lower:]' '[:upper:]' <<< ${TAG_NAME:0:1})${TAG_NAME:1}"
            
            save_state_var "TAG_MSG_PREFIX_SUGGESTION" "$TAG_MSG_PREFIX_SUGGESTION"
            
            if [ -z "$ALL" ]; then
                echo -e "Type the tag message prefix [${GREEN}$TAG_MSG_PREFIX_SUGGESTION - ${NC}]:"
                read -e TAG_MSG_PREFIX
            fi

            save_state_var "TAG_MSG_PREFIX" "$TAG_MSG_PREFIX"

            if [ -z "$TAG_MSG_PREFIX"  -a "$TAG_MSG_PREFIX" != " " ]; then
                TAG_MSG_PREFIX=$TAG_MSG_PREFIX_SUGGESTION
            fi

            if [ -z "$MESSAGE" ]; then
                echo -e "Type the tag message [${GREEN}$TAG_MSG${NC}]:"
                read -e TAG_MSG_USR
            fi
            if [ ! -z "$MESSAGE"  -a "$MESSAGE" != " " ]; then
                TAG_MSG_USR="$MESSAGE"
            fi

            save_state_var "TAG_MSG_USR" "$TAG_MSG_USR"

            if [ ! -z "$TAG_MSG_USR"  -a "$TAG_MSG_USR" != " " ]; then
                TAG_MSG_SLUG=$(echo "$TAG_MSG_USR" | iconv -t ascii//TRANSLIT | sed -r 's/[~\^]+//g' | sed -r 's/[^a-zA-Z0-9]+/-/g' | sed -r 's/^-+\|-+$//g' | tr A-Z a-z)
                TAG_NAME="${TAG_NAME}-${TAG_MSG_SLUG}"
                TAG_MSG="$TAG_MSG_PREFIX - $TAG_MSG_USR"
            fi
            
            echo ""
            echo "---------------------------------------------"
            echo "                     TAG                     "
            echo "---------------------------------------------"
            echo -e "[NAME]= \"${GREEN}$TAG_NAME${NC}\""
            echo -e "[MSG]= \"${GREEN}$TAG_MSG${NC}\""
            echo "---------------------------------------------"
            
            save_state_var "TAG_NAME" "$TAG_NAME"
            save_state_var "TAG_MSG" "$TAG_MSG"

            if [ -z "$ALL" ]; then
                read -r -p "Are you sure [$(echo -e $GREEN"Y"$NC)/n]? " response
                response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
                echo ""
            else
                response="y"
            fi
            
            if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
                git tag -a $TAG_NAME -m "$TAG_MSG"                
                echo ""
                echo -e "🏷  ${GREEN}Tag ($TAG_NAME) generated!${NC}"
            else
                read -r -p "Recreate tag [$(echo -e $GREEN"Y"$NC)/n]? " response
                response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
                if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
                    generateTag
                fi
                echo "Bye =)"
                exit 0
            fi
        fi
    fi
}



#################
#### BRANCH #####
#################

sleep 1

clear

echo "🟢 Starting deploy process ..."

# STEP 1 - SHUB FILES

if test $STATE -lt $STATE_STEP_SHUB_FILES_ID; then
    echo ""
    echo -e "$GREEN# STEP $STATE_STEP_SHUB_FILES_ID/$STATE_STEPS - SHUB FILES$NC"
    echo ""
    echo "✔ Auto commiting notes ..."
    
    # Update notes file
    echo ""
    echo "## $GIT_BRANCH_NEXT_CLASS_UP" >> notes.md
    echo "" >> notes.md

    git add notes.md && git commit -m "docs: update notes" --no-verify
    if ( ! test -f ".gitignore" ) || ( test -f ".gitignore" && ! grep -q .shub ".gitignore" ); then
        echo "✔ Auto commiting shub files ..."
        git add .shub && git commit -m "chore: update shub files" --no-verify
        echo ""
    fi
    commit_state "$STATE_STEP_SHUB_FILES_ID"
    clear
fi

# STEP 2 - CHECKOUT

if test $STATE -lt $STATE_STEP_CHECKOUT_ID; then
    echo ""
    echo -e "$GREEN# STEP $STATE_STEP_CHECKOUT_ID/$STATE_STEPS - CHECKOUT$NC"
    echo ""
    if [ -z "$ALL" ]; then
        confirm "Checkout to \"$(echo -e $GREEN"$GIT_DEFAULT_BRANCH"$NC)\" branch [$(echo -e $GREEN"Y"$NC)/n]? "
        echo ""
    fi
    { git checkout $GIT_DEFAULT_BRANCH  || { echo -e "$FAILED_MSG" ; exit 1; } }
    commit_state "$STATE_STEP_CHECKOUT_ID"
    clear
fi

# STEP 3 - MERGE

if test $STATE -lt $STATE_STEP_MERGE_ID; then
    echo ""
    echo -e "$GREEN# STEP $STATE_STEP_MERGE_ID/$STATE_STEPS - MERGE$NC"
    echo ""
    if [ -z "$ALL" ]; then
        confirm "Merge current branch ($GIT_BRANCH) [$(echo -e $GREEN"Y"$NC)/n]? "
        echo ""
    fi
    { git merge $GIT_BRANCH  || { echo -e "$FAILED_MSG" ; exit 1; } }
    commit_state "$STATE_STEP_MERGE_ID"
    clear
fi

# STEP 4 - TAG

if test $STATE -lt $STATE_STEP_TAG_ID; then
    echo ""
    echo -e "$GREEN# STEP $STATE_STEP_TAG_ID/$STATE_STEPS - TAG$NC"
    echo ""
    generateTag
    commit_state "$STATE_STEP_TAG_ID"
    clear
fi

# STEP 5 - DEPLOY BRANCH

if test $STATE -lt $STATE_STEP_DEPLOY_BRANCH_ID; then
    echo ""
    echo -e "$GREEN# STEP $STATE_STEP_DEPLOY_BRANCH_ID/$STATE_STEPS - DEPLOY BRANCH$NC"
    echo ""
    if [ -z "$ALL" ]; then
        confirm "Deploy on \"$(echo -e $GREEN"$GIT_DEFAULT_BRANCH"$NC)\" branch [$(echo -e $GREEN"Y"$NC)/n]? "
        echo ""
    fi
    echo "🚀 Deploying on \"$(echo -e $GREEN"$GIT_DEFAULT_BRANCH"$NC)\" branch"
    { git push origin $GIT_DEFAULT_BRANCH --follow-tags --no-verify || { echo -e "$FAILED_MSG" ; exit 1; } }
    commit_state "$STATE_STEP_DEPLOY_BRANCH_ID"
    clear
    echo ""
    echo -e "${GREEN}"
    echo "#############################################"
    echo "               🏁 DEPLOY COMPLETED                   "
    echo -e "#############################################${NC}"
    echo ""
fi

# STEP 6 - NEXT

if test $STATE -lt $STATE_STEP_NEXT_ID; then
    echo ""
    echo -e "$GREEN# STEP $STATE_STEP_NEXT_ID/$STATE_STEPS - NEXT$NC"
    echo ""
    if [ -z "$ALL" ]; then
        confirm "Go to next \"$(echo -e $GREEN"$COURSE_TYPE"$NC)\" ($GIT_BRANCH_NEXT_CLASS_LW) [$(echo -e $GREEN"Y"$NC)/n]? " 
    fi
    echo ""
    git checkout -b $GIT_BRANCH_NEXT_CLASS_LW
    clear
fi

if [ -f ".shub-state.ini" ]; then
    flush_state
fi

echo -e "$BLACK $ON_GREEN"
echo -e "🏁 Deploy script finished!"
echo -e "$NC"
echo -e "$DARK_GRAY"
echo -e "Thank you =)"
echo -e "$NC"
