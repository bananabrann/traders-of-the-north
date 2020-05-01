#!/bin/bash

# SECTION
# The intent of this script to provide a user-friendly
# fire-and-forget method of installing dependencies.

GREEN = "\e[32m"
YELLOW = "\e[33m"
BOLD = "\e[1m"
CLEAR_ALL = "\e[0m"

clear
echo "********************************"
echo "* Traders of the North install *"
echo "********************************"

printf "
Hello! This script will install the neccesary dependencies to run
or develop Traders of the North. This script does ${YELLOW}not\e[0m install the
project dependencies, such as React and SASS, found in package.json.
This script will check for and install the following \e[1mglobally\e[0m:
- Node
- NPM
- Lua
- Docker

You may be prompted to enter your password. This is normal. After
completition of this script, please next run \e[32m\e[1mnpm install\e[0m to install
the project's individual dependencies."

printf "\n\nTo continue, please type \e[32m\e[1mY\e[0m and press Enter. To cancel, press any other key.\n"
read selection

if ! ( [ $selection == "Y" ] || [ $selection == "y" ] ) ; then
  printf "\n\e[33m\e[1m~~ User declined operation. Dependencies not intalled. ~~~\e[0m\nGoodbye!\n\n"
  exit 0
fi

cd ../

# /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
# brew install node
# npm install

printf "\n\e[1m\e[32m~~~ Install complete! ~~~
Please run npm install 
\e[0mYou maybe now safely terminate this window.\nGoodbye!\n\n"
