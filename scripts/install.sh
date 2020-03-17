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

printf "\nHello! This script will install the neccesary dependencies and start the development, and local 
version of Traders of the North.\nThe software to be downloaded consists of programs that are very 
typical of software engineering. This includes, but not limited to:
  • \e[1mBrew\e[0m, a MacOS software development package manager
  • \e[1mNode\e[0m, a JavaScript runtime enviroment
  • \e[1mReact\e[0m, a dynamic rendering framework
  
The dependencies may ask for your password. This is normal, as this
is your system protecting you."

printf "\n\nTo continue, please type \e[32m\e[1mY\e[0m and press Enter. To cancel, press any other key.\n"
read selection

if ! ( [ $selection == "Y" ] || [ $selection == "y" ] ) ; then
  printf "\n\e[33m\e[1m~~ User declined operation. Dependencies not intalled. ~~~\e[0m\nGoodbye!\n\n"
  exit 0
fi

cd ../

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install node
npm install

printf "\n\e[1m\e[32m~~~ Install complete! ~~~\n\e[0mYou maybe now safely terminate this window.\nGoodbye!\n\n"
