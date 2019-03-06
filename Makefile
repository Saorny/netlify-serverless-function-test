install:
	echo "INSTALL DEPENDENCIES"
	yarn

init: install build run
	echo "DONE!"

run:
	eho "LAUNCHING APP"
	npm run lambda-serve

build:
	echo "BUILDING APP"
	npm run lambda-build

restart: build run
