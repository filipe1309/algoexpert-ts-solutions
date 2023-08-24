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
# Create directory
	@$(eval CAMEL := $(shell echo ${c} | perl -pe 's/(^|-)(\w)/\U$$2/g' | perl -nE 'say lcfirst'))
	@echo "Creating ${c} directory..."
	@mkdir src/${l}/${c}
# Create README file
	@echo "Creating ${c} README file..."
	@touch src/${l}/${c}/README.md
# replace - with empty space
	@$(eval NAME := $(shell echo ${c} | sed 's/-/ /g'))
# capitalize first letter of each word of NAME, ex: valid subsequence => Valid Subsequence
	@$(eval NAME := $(shell echo ${NAME} | perl -pe 's/(\w+)/\u$$1/g'))
	@echo "# ${NAME}\n\
	\n> Source: https://www.algoexpert.io/questions/${c}  \
	\n> Difficulty: ${l}  \
	\n> Category: \n\
	\n---\n" >> src/${l}/${c}/README.md
# Create solution file
	@echo "Creating ${c} solution file..."
	@touch src/${l}/${c}/solution.ts
	@echo "// Test: make test-one t=${c}\
	\nfunction $(CAMEL)(input) {\
	\n  return mySolution1();\
	\n}\
	\n\
	\n// Complexity (worst-case): time O() | space O()\
	\nfunction mySolution1() {\
	\n  \
	\n}\n\
	\nexport default $(CAMEL);" >> src/${l}/${c}/solution.ts
# Create test file
	@echo "Creating ${c} test files..."
	@touch src/${l}/${c}/solution.spec.ts
	@echo "import { describe, expect, test } from '@jest/globals';\
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
	@echo "✅ COMMIT MSG: \"feat(${LEVEL}): add my solution to ${NAME}\"";
	@git status -s
# request confirm before commit, y as default with enter
	@read -p "Are you sure you want to commit? [Y/n] " -n 1 -r; \
	echo ""; \
	if [[ $$REPLY =~ ^[Yy]$$ ]] || [[ $$REPLY == "" ]]; then \
		echo "✅ Committing changes..."; \
	else \
		echo "❌ Commit aborted"; \
		exit 1; \
	fi
  @git commit -m "feat(${LEVEL}): add my solution to ${NAME}"
	@echo "✅ Done!"
	@echo ""
	@echo "📝 Pushing changes to ${NAME} in ${LEVEL} level in README..."
# update readme checkbox
	@$(eval FULL_LINE := $(shell grep -n "${NAME_SNAKE_CASE}" README.md))
	@$(eval CHECKBOX_LINE := $(shell echo "${FULL_LINE}" | cut -d':' -f1))
	@echo "Item to update: ${FULL_LINE}, at line ${CHECKBOX_LINE}"
# request confirm before update README, y as default with enter
	@read -p "Are you sure you want to update README? [Y/n] " -n 1 -r; \
	echo ""; \
	if [[ $$REPLY =~ ^[Yy]$$ ]] || [[ $$REPLY == "" ]]; then \
		echo "✅ Updating README checkbox..."; \
	else \
		echo "❌ README update aborted"; \
		exit 1; \
	fi
	@echo "Updating README checkbox at line ${CHECKBOX_LINE} of ${NAME_SNAKE_CASE}..."
# replace empty space (4th character) with x
	@sed -i '' "${CHECKBOX_LINE}s/./x/4" README.md
	@git add README.md
	@git commit -m "docs(README.md): check ${NAME} in ${LEVEL} level"
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
