install:
	yarn

init: init build run

run:
	npm run lambda-serve

build:
	npm run lambda-build

restart: build run
