CHECK_MARK="\033[0;32m\xE2\x9C\x94\033[0m"

echo -n "Updating NPM...                "
npm install -g npm
echo -e "\\r${CHECK_MARK} Updated NPM          "

echo -n "Building Traders of the North...                "
npm run-script build
echo -e "\\r${CHECK_MARK} Updated NPM          "

echo -n "Installing and launching server...                "
npm install -g serve
serve -s build
echo -e "\\r${CHECK_MARK} Build completed          "
echo "\\n ~~~ Have Fun! ~~~"