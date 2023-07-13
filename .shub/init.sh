#!/bin/bash

# Shub INIT Project Script

exec 0< /dev/tty

.shub/shub-logo.sh
source .shub/colors.sh   
source .shub/helpers.sh


# Remove Run info from README.md
sed -i.bak '/SHUBCONFIG/d' ./README.md

echo "---------------------------------------------"

read -r -p "Configure template [$(echo -e $GREEN"Y"$NC)/n]? " response
response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
    
    clear

    echo -e "${GREEN}"
    echo "#############################################"
    echo "               ▶ DOTR INIT SCRIPT        "
    echo -e "#############################################${NC}"

    VERSION=$(head -n 1 .shub/version)

    is_in_git_repo() {
        if [ -d .git ]; then
            return 0
        else
            return 1
        fi
    }

    read_values() {
        if is_in_git_repo; then
            PROJECT_REPO_LINK=$(git config --get remote.origin.url)
            PROJECT_REPO_NAME=$(basename `git rev-parse --show-toplevel`)
            GIT_USERNAME=$(git config user.name)

            function extractUserFromGitHubLInk () {
                # url="git://github.com/some-user/my-repo.git"
                # url="https://github.com/some-user/my-repo.git"
                # url="git@github.com:some-user/my-repo.git"
                url=$1
                re="^(https|git)(:\/\/|@)([^\/:]+)[\/:]([^\/:]+)\/(.+).git$"

                if [[ $url =~ $re ]]; then    
                    protocol=${BASH_REMATCH[1]}
                    separator=${BASH_REMATCH[2]}
                    hostname=${BASH_REMATCH[3]}
                    user=${BASH_REMATCH[4]}
                    repo=${BASH_REMATCH[5]}

                    GITHUB_USER=$user
                fi
            }

            extractUserFromGitHubLInk $PROJECT_REPO_LINK
        else
            PROJECT_REPO_LINK="{{ REPLACE_WITH_YOUR_REPO_LINK }}"
            PROJECT_REPO_NAME="{{ REPLACE_WITH_YOUR_REPO_NAME }}"
            GIT_USERNAME="{{ REPLACE_WITH_YOUR_NAME }}"
        fi

        echo ""
        echo "---------------------------------------------"
        echo "Type some infos about the course below: "
        echo "---------------------------------------------"
        echo ""

        PROJECT_DEFAULT_NAME=${PROJECT_REPO_NAME//-/ } # Replace all '-' with ' '
        PROJECT_DEFAULT_NAME=( $PROJECT_DEFAULT_NAME ) # without quotes
        PROJECT_DEFAULT_NAME="${PROJECT_DEFAULT_NAME[@]^}" # cap first letter
        printf "Project name [$GREEN%s$NC]: " "$PROJECT_DEFAULT_NAME"
        read -r PROJECT_NAME
        [ -z "$PROJECT_NAME" ] && PROJECT_NAME="$PROJECT_DEFAULT_NAME"

        printf 'Course source (e.g. Dotr Channel, Alura, Pluralsight) []: '
        read -r COURSE_SOURCE

        printf 'Course name []: '
        read -r COURSE_NAME

        printf 'Course link []: '
        read -r COURSE_LINK

        printf "Course type (e.g. class, episode, article) [$GREEN%s$NC]: " "class"
        read -r COURSE_TYPE
        [ -z "$COURSE_TYPE" ] && COURSE_TYPE="class"

        COURSE_MULTIPLE='true'
        read -r -p "This course will be $(echo -e $GREEN"unique"$NC) [$(echo -e $GREEN"Y"$NC)/n]? " response
        [[ $response =~ ^(yes|y|YES|Y| ) ]] || [[ -z $response ]] && COURSE_MULTIPLE='false'

        SHUB_VERSION='true'
        read -r -p "Remove ShubcoGen from app version control? [$(echo -e $GREEN"Y"$NC)/n] " response
        [[ $response =~ ^(yes|y|YES|Y| ) ]] || [[ -z $response ]] && SHUB_VERSION='false' && echo ".shub" >> .gitignore

JSON_TEMPLATE='{
    "version": "%s",
    "username": "%s",
    "github_username": "%s",
    "project_name": "%s",
    "project_repo_name": "%s",
    "project_repo_link": "%s",
    "course_source": "%s",
    "course_name": "%s",
    "course_link": "%s",
    "course_type": "%s",
    "course_multiple": "%s",
    "vcs": "%s"
}\n'
        JSON_CONFIG=$(printf "$JSON_TEMPLATE" "$VERSION" "$GIT_USERNAME" "$GITHUB_USER" "$PROJECT_NAME" "$PROJECT_REPO_NAME" "$PROJECT_REPO_LINK" "$COURSE_SOURCE" "$COURSE_NAME" "$COURSE_LINK" "$COURSE_TYPE" "$COURSE_MULTIPLE" "$SHUB_VERSION")
    }

    if [ -f "shub-config.json" ]; then
        echo "shub-config.json detected"
        read -r -p "Use $(echo -e $GREEN"shub-config.json"$NC) configs [$(echo -e $GREEN"Y"$NC)/n]? " response
        response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
        if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
            # Read json file content
            JSON_CONFIG="$(cat shub-config.json)"

            #version=$(parse_json "$JSON_CONFIG" version)
            GIT_USERNAME=$(parse_json "$JSON_CONFIG" username)
            GITHUB_USER=$(parse_json "$JSON_CONFIG" github_username)
            PROJECT_NAME=$(parse_json "$JSON_CONFIG" project_name)
            PROJECT_REPO_NAME=$(parse_json "$JSON_CONFIG" project_repo_name)
            PROJECT_REPO_LINK=$(parse_json "$JSON_CONFIG" project_repo_link)
            COURSE_SOURCE=$(parse_json "$JSON_CONFIG" course_source)
            COURSE_NAME=$(parse_json "$JSON_CONFIG" course_name)
            COURSE_LINK=$(parse_json "$JSON_CONFIG" course_link)
            COURSE_TYPE=$(parse_json "$JSON_CONFIG" course_type)
            COURSE_MULTIPLE=$(parse_json "$JSON_CONFIG" course_multiple)
            VCS=$(parse_json "$JSON_CONFIG" vcs)
        else
            read_values
        fi
    else 
        read_values
    fi

    echo ""
    echo "---------------------------------------------"

    JSONF=$(format_json "$JSON_CONFIG")
    echo "$JSONF"
    
    echo "---------------------------------------------"
    echo ""

    read -r -p "Accept configs [$(echo -e $GREEN"Y"$NC)/n]? " response
    response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
    if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
        # Update template
        
        # To support sed from both MacOS and Linux distros
        SEDOPTION=
        if [[ "$OSTYPE" == "darwin"* ]]; then
            SEDOPTION="''"
        fi

        sed -i $SEDOPTION -e "s/{{ PROJECT_NAME }}/$PROJECT_NAME/g" README.md
        sed -i $SEDOPTION -e "s/{{ COURSE_SOURCE }}/$COURSE_SOURCE/g" README.md
        sed -i $SEDOPTION -e "s/{{ COURSE_NAME }}/$COURSE_NAME/g" README.md
        sed -i $SEDOPTION -e "s,{{ COURSE_LINK }},$COURSE_LINK,g" README.md
        sed -i $SEDOPTION -e "s,{{ COURSE_TYPE }},$COURSE_TYPE,g" README.md
        sed -i $SEDOPTION -e "s/{{ PROJECT_REPO_NAME }}/$PROJECT_REPO_NAME/g" README.md
        sed -i $SEDOPTION -e "s/{{ GITHUB_USER }}/$GITHUB_USER/g" README.md
        sed -i $SEDOPTION -e "s/{{ GIT_USERNAME }}/$GIT_USERNAME/g" README.md
        sed -i $SEDOPTION -e "s/{{ VERSION }}/$VERSION/g" README.md

# Create version file
curl -o .shub/latest-release.json --create-dirs https://api.github.com/repos/filipe1309/shubcogen-template/releases/latest -H 'Cache-Control: no-cache' 2>/dev/null
LATEST_RELEASE="$(cat .shub/latest-release.json)"
REMOTE_VERSION=$(parse_json "$LATEST_RELEASE" tag_name)
rm .shub/latest-release.json
echo "$REMOTE_VERSION" > .shub/version

# Save JSON config file
cat <<EOF > shub-config.json
$JSON_CONFIG
EOF
    fi

    read -r -p "Keep shub scripts (deploy, init...) [$(echo -e $GREEN"Y"$NC)/n]? " response
    response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
    if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
        echo -e "${GREEN}OK =)${NC}"
    else
        # Remove shub scripts
        rm -rf .shub
        rm deploy.sh
        rm .editorconfig
    fi

    # Auto init first new branch based on course type
    if is_in_git_repo; then
        GIT_BRANCH=$(git branch --show-current)
        [[ $COURSE_MULTIPLE = 'true' ]] && FIRST_BRANCH_NAME="${COURSE_TYPE}-1.1" || FIRST_BRANCH_NAME="${COURSE_TYPE}-1"
        if [ $GIT_BRANCH != $FIRST_BRANCH_NAME ]; then
            read -r -p "Checkout to new branch ($(echo -e $GREEN"$FIRST_BRANCH_NAME"$NC)) [$(echo -e $GREEN"Y"$NC)/n]? " response
            response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
            if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
                git checkout -b $FIRST_BRANCH_NAME
                FIRST_BRANCH_NAME=$(echo "$FIRST_BRANCH_NAME" | tr '[:lower:]' '[:upper:]')  # toupper
                echo "## $FIRST_BRANCH_NAME" >> notes.md
                echo "" >> notes.md
            fi
        fi
    fi

    echo "---------------------------------------------"
    echo ""
    echo -e "✔ CONFIGURATION COMPLETED"
    echo ""
    echo "---------------------------------------------"

    # Always remove init script
    if [ -f init.sh ]; then
        rm init.sh
    fi
else
    exit 0;
fi
