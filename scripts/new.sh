#!/bin/bash

# This script creates a new challenge directory with README, solution, test and test cases files

# read arguments from command line
for argument in "$@"
do
  key=$(echo $argument | cut -f1 -d=)
  value=$(echo $argument | cut -f2 -d=)

  case "$key" in
    "c")        c="$value" ;;
    "l")        l="$value" ;;
    *)
  esac
done

# read challenge name if not provided $1
if [ -z ${c} ]; then echo "Challenge name:"; read c; fi
# if challenge name is empty, exit
if [ -z ${c} ]; then echo "❌ Please provide a challenge name"; exit 1; fi
# read challenge level if not provided $2
if [ -z ${l} ]; then read -p "Challenge level (easy, medium, hard, very-hard): " l; fi
# if challenge level is empty, exit
if [ -z ${l} ]; then echo "❌ Please provide a level (easy, medium, hard, very-hard)"; exit 1; fi
echo "📝 Creating new challenge ${c} in ${l} level..."
# Create directory
echo "Creating ${c} directory..."
mkdir src/${l}/${c}
# Create README file
echo "Creating ${c} README file..."
touch src/${l}/${c}/README.md
# replace - with empty space
NAME=$(echo ${c} | sed 's/-/ /g')
# capitalize first letter of each word of NAME, ex: valid subsequence => Valid Subsequence
NAME=$(echo ${NAME} | perl -pe 's/(\w+)/\u$1/g')
echo -e "# ${NAME}\n\
\n> Source: https://www.algoexpert.io/questions/${c}  \
\n> Difficulty: ${l}  \
\n> Category: \n\
\n---\n" >> src/${l}/${c}/README.md
# Create solution file
echo "Creating ${c} solution file..."
touch src/${l}/${c}/solution.ts
CAMEL=$(echo ${c} | perl -pe 's/(^|-)(\w)/\u$2/g' | perl -nE 'say lcfirst')
echo -e "// Test: make test-one t=${c}\
\nfunction ${CAMEL}(input) {\
\n  return mySolution1();\
\n}\
\n\
\n// Complexity (worst-case): time O() | space O()\
\nfunction mySolution1() {\
\n  \
\n}\n\
\nexport default ${CAMEL};" >> src/${l}/${c}/solution.ts
# Create test file
echo "Creating ${c} test files..."
touch src/${l}/${c}/solution.spec.ts
echo -e "import { describe, expect, test } from '@jest/globals';\
\nimport solution from './solution';\
\nimport cases from './cases';\
\n\
\ndescribe('${c}', () => {\
\n  test.each(cases)('%# (%j)', ({ input, expected }) => {\
\n    const result = solution(input);\
\n    expect(result).toEqual(expected);\
\n  });\
\n});" >> src/${l}/${c}/solution.spec.ts
# Create test cases file
touch src/${l}/${c}/cases.ts
echo -e "export default [\
\n  {\
\n    input: [],\
\n    expected: []\
\n  },\
\n];" >> src/${l}/${c}/cases.ts
echo "✅ Done!"

