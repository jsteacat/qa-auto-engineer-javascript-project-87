lint:
	npx eslint . --fix
test:
	npm test
install:
	npm ci
test-coverage:
	npm test -- --coverage --coverageProvider=v8
gendiff:
    node bin/gendiff.js
