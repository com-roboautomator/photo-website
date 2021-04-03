install:
	echo "Installing dependencies" \
		&& CI=true npm ci \
		&& echo "Finished installing dependencies" \
		|| echo "Failed to install dependencies"

test:
	echo "Running unit tests" \
		&& CI=true npm test -- --coverage \
		&& echo "Finished running unit tests" \
		|| echo "One or more test failures"

build:
	echo "Building for production" \
		&& CI=true npm run build \
		&& echo "Finished building for production" \
		|| echo "Building failed"
