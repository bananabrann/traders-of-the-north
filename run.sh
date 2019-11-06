# The intent of this script to provide a user-friendly
# fire-and-forget method of installing dependencies
# and serving the game locally.

brew doctor
npm -g install npm
npm install -g serve
serve -s build