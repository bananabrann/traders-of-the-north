# The intent of this script is a user-friendly
# way over removing all dependencies of the project.
# This script is intended for non-developers who want
# to install the game locally. 

GREEN = "\e[32m"
YELLOW = "\e[33m"
LIGHT_CYAN = "\e[96m"
BOLD = "\e[1m"
BLINK = "\e[5m"
CLEAR_ALL = "\e[0m"

clear
echo "********************************"
echo "* Traders of the North install *"
echo "********************************"

printf "\nHello! This script will \e[1muninstall\e[0m all the dependencies that the install script has 
put on your system. If you accept the following message, \e[1mdo not interupt this program\e[0m until 
you see the \"done\" message at the end.\e[0m

You may be prompted to confirm uninstallation. This is normal, and simply select \"y\" during those times.

\e[5m\e[96m~~~\e[0m \e[1m\e[96mDo NOT interrupt this program!\e[0m \e[5m\e[96m~~~\e[0m"

printf "\n\nTo continue, please type \e[32m\e[1mY\e[0m and press Enter. To cancel, press any other key.\n"
read selection

if ! ( [ $selection == "Y" ] || [ $selection == "y" ] ) ; then
  printf "\n\e[33m\e[1m~~ User declined operation. Dependencies not uninstalled. ~~~\e[0m\nGoodbye!\n\n"
  exit 0
fi

cd ~/Desktop/traders-of-the-north/

npm uninstall *

cd ~/

brew uninstall --force node
rm -f /usr/local/bin/npm /usr/local/lib/dtrace/node.d
rm -rf ~/.npm

brew cleanup

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"

printf "\n\e[1m\e[32m~~~ Uninstall complete! ~~~\n\e[0mYou maybe now safely terminate this window.\nGoodbye!\n\n"