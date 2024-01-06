lint:
	npx eslint . --fix
test:
	npm test
install:
	npm install
test-coverage:
	npm test -- --coverage --coverageProvider=v8
