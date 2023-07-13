#!/bin/bash

# Shub Envs Script

VERSION=$(head -n 1 .shub/version)

# Init variables
JSON_CONFIG="$(cat shub-config.json)"
COURSE_TYPE=$(parse_json "$JSON_CONFIG" course_type)

## Git variables
GIT_BRANCH=$(git branch --show-current)
GIT_DEFAULT_BRANCH=$(git remote show origin | grep 'HEAD' | cut -d':' -f2 | sed -e 's/^ *//g' -e 's/ *$//g')
[ $GIT_DEFAULT_BRANCH = "(unknown)" ] && GIT_DEFAULT_BRANCH="main"
FAILED_MSG="\u274c ERROR =/"

## Course variables
IFS='-' read -ra ADDR <<< "$GIT_BRANCH"
CLASS_TYPE="${ADDR[0]}-"
if [[ ${ADDR[1]} == *"."* ]]; then
    IFS='.' read -ra ADDR <<< "${ADDR[1]}"
    CLASS_NUMBER="$CLASS_NUMBER ${ADDR[1]}"
    CLASS_TYPE="${CLASS_TYPE}${ADDR[0]}."
fi
CLASS_NUMBER=${ADDR[1]}

## Git variables based on course variables
GIT_BRANCH_NEXT_CLASS=$CLASS_TYPE$(($CLASS_NUMBER + 1))
GIT_BRANCH_NEXT_CLASS_LW=$(echo "$GIT_BRANCH_NEXT_CLASS" | tr '[:upper:]' '[:lower:]')  # tolower
GIT_BRANCH_NEXT_CLASS_UP=$(echo "$GIT_BRANCH_NEXT_CLASS" | tr '[:lower:]' '[:upper:]')  # toupper

## Tag variables
TAG_NAME=$GIT_BRANCH
TAG_MSG="Auto generated tag message"
NEWEST_TAG=$(git describe --abbrev=0 --tags)

## State variables
STATE="0"
STATE_STEP_SHUB_FILES_ID="1"
STATE_STEP_CHECKOUT_ID="2"
STATE_STEP_MERGE_ID="3"
STATE_STEP_TAG_ID="4"
STATE_STEP_DEPLOY_BRANCH_ID="5"
STATE_STEP_NEXT_ID="6"


SHUB_ENVS="$(cat .shub/shub-envs.sh)"
STATE_STEPS=$(grep -o -i "STATE_STEP_" .shub/shub-envs.sh | wc -l)
STATE_STEPS=$(($STATE_STEPS - 1))
