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
	\nexport default function $(CAMEL)() {\
	\n  return mySolution1();\
	\n}" >> src/${l}/${c}/solution.ts
	@echo "" >> src/${l}/${c}/solution.ts
	@echo "function mySolution1() {\
	\n  \
	\n}" >> src/${l}/${c}/solution.ts
	@echo "Creating ${c} test files..."
	@touch src/${l}/${c}/solution.spec.ts
	@echo "import {describe, expect, test} from '@jest/globals';" >> src/${l}/${c}/solution.spec.ts 
	@echo "import solution from './solution';" >> src/${l}/${c}/solution.spec.ts
	@echo "import cases from './cases';" >> src/${l}/${c}/solution.spec.ts
	@echo "" >> src/${l}/${c}/solution.spec.ts
	@echo "describe('${c}', () => {" >> src/${l}/${c}/solution.spec.ts
	@echo "  test.each(cases)('Test %#', ({ input, expected }) => { \
  \n    const result = solution(input); \
  \n    expect(result).toEqual(expected); \
  \n  });" >> src/${l}/${c}/solution.spec.ts
	@echo "});" >> src/${l}/${c}/solution.spec.ts
	@touch src/${l}/${c}/cases.ts
	@echo "export default [\
	\n  {\
	\n    input: []\
	\n    expected: []\
	\n  },\
	\n];" >> src/${l}/${c}/cases.ts
	@echo "✅ Done!"

help:
	@echo "📖 Available commands:"
	@echo "  make test"
	@echo "  make run"
	@echo "  make new l=<level (easy, medium, hard, very-hard)> c=<challenge name>"
	@echo "  make help"

# run:
# 	@$(eval ARG := $(filter-out $@,$(MAKECMDGOALS)))
# 	@echo Running with argument: $(ARG)
# 	mkdir src/${ARG}
# #	@echo Running with argument: $(filter-out $@,$(MAKECMDGOALS))

# %:
# 	@echo ""
