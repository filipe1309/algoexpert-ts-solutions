# run tests
test:
	@echo "🟢 Running tests..."
	npm run test

# run node
run:
	@echo "🏁 Running code..."
	make test

# create new challenge
# example: make new l=easy c=valid-subsequence
new:
	if [ -z ${c} ]; then echo "❌ Please provide a challenge name"; exit 1; fi
	if [ -z ${l} ]; then echo "❌ Please provide a level (easy, medium, hard, very-hard)"; exit 1; fi
	@echo "📝 Creating new challenge ${c} in ${l} level..."
	mkdir src/${l}/${c}
	touch src/${l}/${c}/solution.ts
	touch src/${l}/${c}/solution.spec.ts
	touch src/${l}/${c}/cases.ts

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
