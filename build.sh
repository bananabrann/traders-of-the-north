# The intent of these commands is to go through the files and remove
# lines that are solely used in development.
# This should include commented lines, and console.log()s

brew doctor
npm -g install npm

# grep "console.log" -r --exclude=\serviceWorker.js src/* > temp.txt
# sed '/^[[:blank:]]*#/d;s/#.*//' temp.txt

npm run-script build