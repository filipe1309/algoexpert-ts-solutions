.ONESHELL:
SHELL := /bin/bash

# install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install

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
	@echo "  make install (installs dependencies)"
	@echo "  make test [t=<test name>] (runs all tests or specific test)"
	@echo "  make test-changed (runs changed tests)"
	@echo "  make new [n=<challenge name>] [l=<level (easy, medium, hard, very-hard)>] [c=<category>] (creates new challenge)"
	@echo "  make commit (commits changes and updates README.md)"
	@echo "  make help"
	

# run:
# 	@$(eval ARG := $(filter-out $@,$(MAKECMDGOALS)))
# 	@echo Running with argument: $(ARG)
# 	mkdir src/${ARG}
# #	@echo Running with argument: $(filter-out $@,$(MAKECMDGOALS))

# %:
# 	@echo ""
