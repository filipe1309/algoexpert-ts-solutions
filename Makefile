.ONESHELL:
SHELL := /bin/bash

GRAY_DARKER=\033[0;90m
NC=\033[0m # No Color

# install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install
	npm run prepare

# run all tests: make test
# run specific test: make test t=two-number-sumtest
test:
	@echo "🟢 Running tests..."
	npm run test -- -t "${t}"

# run changed tests: make test-changed
test-changed:
	@echo "🟢 Running changed tests..."
	npm run test:changed

# run node
run:
	@echo "🏁 Running code..."
	make test

# create new challenge
# example: make new [l=easy] [c=valid-subsequence]
new:
	./scripts/new.sh name=${n} level=${l} category=${c}

commit:
	./scripts/commit.sh

help:
	@echo "📖 Available commands:"
	@echo -e "  make install ${GRAY_DARKER}(installs dependencies)${NC}"
	@echo -e "  make test [t=<test name>] ${GRAY_DARKER}(runs all tests or specific test)${NC}"
	@echo -e "  make test-changed ${GRAY_DARKER}(runs changed tests)${NC}"
	@echo -e "  make new [n=<challenge name>] [l=<level ${GRAY_DARKER}(easy, medium, hard, very-hard)${NC}>] [c=<category>] ${GRAY_DARKER}(creates new challenge)${NC}"
	@echo -e "  make commit ${GRAY_DARKER}(commits changes and updates README.md)${NC}"
	@echo -e "  make help"
	

# run:
# 	@$(eval ARG := $(filter-out $@,$(MAKECMDGOALS)))
# 	@echo Running with argument: $(ARG)
# 	mkdir src/${ARG}
# #	@echo Running with argument: $(filter-out $@,$(MAKECMDGOALS))

# %:
# 	@echo ""
