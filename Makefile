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
# example: make new l=easy c=valid-subsequence
new:
	./scripts/new.sh ${l} ${c}

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
