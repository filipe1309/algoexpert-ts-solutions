.ONESHELL:
SHELL := /bin/bash

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
# example: make new [l=easy] [c=valid-subsequence]
new:
	./scripts/new.sh l=${l} c=${c}

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
