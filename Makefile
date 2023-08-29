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
	@echo "  make install"
	@echo "  make test"
	@echo "  make run"
	@echo "  make new [l=<level (easy, medium, hard, very-hard)>] [c=<challenge name>]"
	@echo "  make commit"
	@echo "  make help"
	

# run:
# 	@$(eval ARG := $(filter-out $@,$(MAKECMDGOALS)))
# 	@echo Running with argument: $(ARG)
# 	mkdir src/${ARG}
# #	@echo Running with argument: $(filter-out $@,$(MAKECMDGOALS))

# %:
# 	@echo ""
