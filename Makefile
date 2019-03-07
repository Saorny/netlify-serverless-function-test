clean:
	rm dist/*.js
	rm -rdf node_modules

install:
	npm install

run:
	echo "LAUNCHING APP"
	npm run lambda-serve

build:
	echo "BUILDING APP"
	npm run build

init: install build run

restart: build run
