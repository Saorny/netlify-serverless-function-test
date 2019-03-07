install:
	npm install

init: install build run

run:
	echo "LAUNCHING APP"
	npm run lambda-serve

build:
	echo "BUILDING APP"
	npm run lambda-build

restart: build run
