# This file is licensed under the Affero General Public License version 3 or
# later. See the COPYING file.
app_name=$(notdir $(CURDIR))
build_tools_directory=$(CURDIR)/build/tools
composer=$(shell which composer 2> /dev/null)

# Installs and updates the composer dependencies. If composer is not installed
# a copy is fetched from the web
composer:
ifeq (, $(composer))
	@echo "No composer command available, downloading a copy from the web"
	mkdir -p $(build_tools_directory)
	curl -sS https://getcomposer.org/installer | php
	mv composer.phar $(build_tools_directory)
	php $(build_tools_directory)/composer.phar install --prefer-dist
	php $(build_tools_directory)/composer.phar update --prefer-dist
else
	composer install --prefer-dist
	composer update --prefer-dist
endif

all: dev-setup lint build-js-production test

# Dev env management
dev-setup: clean clean-dev npm-init

npm-init:
	npm ci

npm-update:
	npm update

# Building
build-js:
	npm run dev

build-js-production:
	npm run build

watch-js:
	npm run watch

# Testing
test:
	npm run test

test-watch:
	npm run test:watch

test-coverage:
	npm run test:coverage

test-cypress:
	echo "Init server for $(app_name)"
	./cypress/start.sh $(app_name)
	npm run cypress:gui
	./cypress/stop.sh $(app_name)

test-cypress-kill:
	./cypress/stop.sh $(app_name)

# Linting
lint:
	npm run lint

lint-fix:
	npm run lint:fix

# Style linting
stylelint:
	npm run stylelint

stylelint-fix:
	npm run stylelint:fix

# Cleaning
clean:
	rm -rf js/*

clean-dev:
	rm -rf node_modules

clean-git:
	rm -r js/
	git checkout -- js/
