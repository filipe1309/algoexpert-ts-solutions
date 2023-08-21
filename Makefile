# install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install

# run tests
test:
	@echo "🟢 Running tests..."
	npm run test

# run specific test
# example: make test-one t=two-number-sum
test-one:
	@echo "🟢 Running tests..."
	npm run test -- -t "${t}"

# run node
run:
	@echo "🏁 Running code..."
	make test

# create new challenge
# example: make new l=easy c=valid-subsequence
new:
	@if [ -z ${c} ]; then echo "❌ Please provide a challenge name"; exit 1; fi
	@if [ -z ${l} ]; then echo "❌ Please provide a level (easy, medium, hard, very-hard)"; exit 1; fi
	@echo "📝 Creating new challenge ${c} in ${l} level..."
	@$(eval CAMEL := $(shell echo ${c} | perl -pe 's/(^|-)(\w)/\U$$2/g' | perl -nE 'say lcfirst'))
	@echo "Creating ${c} directory..."
	@mkdir src/${l}/${c}
	@echo "Creating ${c} solution file..."
	@touch src/${l}/${c}/solution.ts
	@echo "// https://www.algoexpert.io/questions/${c}\
	\n\
	\nfunction $(CAMEL)(input) {\
	\n  return mySolution1();\
	\n}\
	\n\
	\n// Complexity (worst-case): time O() | space O()\
	\nfunction mySolution1() {\
	\n  \
	\n}\n\
	\nexport default $(CAMEL);" >> src/${l}/${c}/solution.ts
	@echo "Creating ${c} test files..."
	@touch src/${l}/${c}/solution.spec.ts
	@echo "import { describe, expect, test } from '@jest/globals';\
	\nimport solution from './solution';\
	\nimport cases from './cases';\
	\n\
	\n// make test-one t=${c}\
	\ndescribe('${c}', () => {\
	\n  test.each(cases)('%# (%j)', ({ input, expected }) => {\
  \n    const result = solution(input);\
  \n    expect(result).toEqual(expected);\
  \n  });\
	\n});" >> src/${l}/${c}/solution.spec.ts
	@touch src/${l}/${c}/cases.ts
	@echo "export default [\
	\n  {\
	\n    input: [],\
	\n    expected: []\
	\n  },\
	\n];" >> src/${l}/${c}/cases.ts
	@echo "✅ Done!"

commit:
	@git add .
# get challenge name and level from git status
	@$(eval CHALLENGE_PATH := $(shell git status -s | grep -oE 'src\/.*\/.*\/' | sed 's/src\///g'))
	@$(eval LEVEL := $(shell echo ${CHALLENGE_PATH} | cut -d'/' -f1))
	@$(eval NAME_SNAKE_CASE := $(shell echo ${CHALLENGE_PATH} | cut -d'/' -f2))
# replace - with empty space
	@$(eval NAME := $(shell echo ${NAME_SNAKE_CASE} | sed 's/-/ /g'))
	@echo "📝 Committing changes to ${NAME} in ${LEVEL} level..."
	@git commit -m "feat(${LEVEL}): add my solution to ${NAME}"
# update readme checkbox
	@$(eval CHECKBOX_LINE := $(shell grep -n "${NAME_SNAKE_CASE}" README.md | cut -d':' -f1))
	@echo "Updating README checkbox at line ${CHECKBOX_LINE}..."
# replace empty space (4th character) with x
	@sed -i '' "${CHECKBOX_LINE}s/./x/4" README.md
	@echo "✅ Done!"

help:
	@echo "📖 Available commands:"
	@echo "  make install"
	@echo "  make test"
	@echo "  make run"
	@echo "  make new l=<level (easy, medium, hard, very-hard)> c=<challenge name>"
	@echo "  make commit"
	@echo "  make help"

# run:
# 	@$(eval ARG := $(filter-out $@,$(MAKECMDGOALS)))
# 	@echo Running with argument: $(ARG)
# 	mkdir src/${ARG}
# #	@echo Running with argument: $(filter-out $@,$(MAKECMDGOALS))

# %:
# 	@echo ""
