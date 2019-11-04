CHECK_MARK="\033[0;32m\xE2\x9C\x94\033[0m"

echo -n "Installing dependencies..."
npm install
echo -e "\\r${CHECK_MARK} Installed dependencies          "
