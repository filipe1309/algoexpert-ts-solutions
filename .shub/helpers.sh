#!/bin/bash

# Shub Helpers Script

parse_json() {
    echo $1 | \
    sed -e 's/[{}]/''/g' | \
    sed -e 's/", "/'\",\"'/g' | \
    sed -e 's/" ,"/'\",\"'/g' | \
    sed -e 's/" , "/'\",\"'/g' | \
    sed -e 's/","/'\"---SEPERATOR---\"'/g' | \
    awk -F=':' -v RS='---SEPERATOR---' "\$1~/\"$2\"/ {print}" | \
    sed -e "s/\"$2\"://" | \
    tr -d "\n\t" | \
    sed -e 's/\\"/"/g' | \
    sed -e 's/\\\\/\\/g' | \
    sed -e 's/^[ \t]*//g' | \
    sed -e 's/^"//'  -e 's/"$//' | \
    sed -e 's/"//' | \
    sed -e 's/ $//'
}

format_json() {
    echo $1 | \
    grep -Eo '"[^"]*" *(: *([0-9]*|"[^"]*")[^{}\["]*|,)?|[^"\]\[\}\{]*|\{|\},?|\[|\],?|[0-9 ]*,?' | \
    awk '{if ($0 ~ /^[}\]]/ ) offset-=4; printf "%*c%s\n", offset, " ", $0; if ($0 ~ /^[{\[]/) offset+=4}'
}

confirm() {
    read -r -p "${1:-Are you sure? [$(echo -e $GREEN"Y"$NC)/n]} " response
    response=$(echo "$response" | tr '[:upper:]' '[:lower:]') # tolower
    if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
        echo -e "${GREEN}Ok =)${NC}"
    else
        if [ -f ".shub-state.ini" ]; then
            flush_state
        fi
        exit 0;
    fi
}


read_arguments() {
    echo "👉 use -h to show help"
    echo ""
    while getopts "a,h,m:" opt; do
        case $opt in
            a) ALL="y"
            ;;
            m) MESSAGE=$(echo "$*" | sed -e 's/-a//' -e 's/-m//' -e 's/-h//'| sed -e 's/^[[:space:]]*//')
            ;;
            h) echo "Usage: $0 [-a] [-m message] [-h]"
                echo "  -a: Accept all"
                echo "  -m: Tag message"
                echo "  -h: Help"
                exit 0
            ;;
            \?) echo "Invalid option -$OPTARG" >&2
            exit 1
            ;;
        esac

        case $OPTARG in
            -a) echo "Option $opt needs a valid argument"
            exit 1
            ;;
        esac
    done
}

array_contains () { 
    local array="$1[@]"
    local seeking=$2
    local in=1
    for element in "${!array}"; do
        if [[ $element == "$seeking" ]]; then
            in=0
            break
        fi
    done
    return $in
}

save_state_var() {
    echo "$1=\"$2\"" >> .shub-state-variables.ini
}

commit_state() {
    echo "STATE=\"$1\"" > .shub-state.ini
}

flush_state() {
    rm .shub-state.ini
    rm .shub-state-variables.ini
}
