# Set commit-msg hook
echo '#!/bin/sh
npx --no -- commitlint --edit "$1"' >.git/hooks/commit-msg
chmod +x .git/hooks/commit-msg

# Set pre-commit hook
echo '#!/bin/sh
checkExitCode() {
    if [[ "$1" == 1 ]]; then
        exit 1
    fi
}

npm run format
checkExitCode $?

npm run lint:scss
checkExitCode $?

npm run lint:js
checkExitCode $?

npm run format:check
checkExitCode $?' >.git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
