# Set commit-msg hook
echo '#!/bin/sh
npx --no -- commitlint --edit "$1"' > .git/hooks/commit-msg
chmod +x .git/hooks/commit-msg

# Set pre-commit hook
echo '#!/bin/sh
npm run format
npm run fix
npm run format:check' > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit