.ONESHELL:
SHELL := /bin/bash

GRAY_DARKER=\033[0;90m
BOLD=\033[1m
ITALIC=\033[3m
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
# example: make new [n=valid-subsequence] [l=easy] [c=arrays]
# example 2: make new [n="Invert Binary Tree"] [l=medium] [c="Binary Trees"]
new:
	./scripts/new.sh name="${n}" level="${l}" category="${c}"

# create new solution
# example: make new-solution [n=valid-subsequence] [l=easy]
new-solution:
	./scripts/new-solution.sh name="${n}" level="${l}"

# commit changes
# example: make commit [m="feat: add two number sum solution"]
commit:
	./scripts/commit.sh m="${m}"

help:
	@echo -e "📖 ${BOLD}Available commands:${NC}"
	@echo ""
	@echo -e "  make ${BOLD}install${NC} ${GRAY_DARKER}(installs dependencies)${NC}"
	@echo -e "  make ${BOLD}test${NC} ${ITALIC}[t=<challenge-name-in-snake-case>]${NC} ${GRAY_DARKER}(runs all tests or specific test)${NC}"
	@echo -e "  make ${BOLD}test-changed${NC} ${GRAY_DARKER}(runs changed tests)${NC}"
	@echo -e "  make ${BOLD}new${NC} ${ITALIC}[n="<challenge-name-in-snake-case>"] [l=<level>] [c="<category>"]${NC} ${GRAY_DARKER}(creates new challenge, levels: (easy, medium, hard, very-hard))${NC}"
	@echo -e "  make ${BOLD}new-solution${NC} ${ITALIC}[n="<challenge-name-in-snake-case>"] [l=<level>]${NC} ${GRAY_DARKER}(creates new solution, levels: (easy, medium, hard, very-hard))${NC}"
	@echo -e "  make ${BOLD}commit${NC} ${GRAY_DARKER}(commits changes and updates README.md)${NC}"
	@echo -e "  make ${BOLD}help${NC}"
	

# run:
# 	@$(eval ARG := $(filter-out $@,$(MAKECMDGOALS)))
# 	@echo Running with argument: $(ARG)
# 	mkdir src/${ARG}
# #	@echo Running with argument: $(filter-out $@,$(MAKECMDGOALS))

# %:
# 	@echo ""
