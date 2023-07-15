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
	mkdir src/${l}/${c}
	touch src/${l}/${c}/solution.ts
	touch src/${l}/${c}/solution.spec.ts
	touch src/${l}/${c}/cases.ts
