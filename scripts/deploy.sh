#!/bin/bash

# GREEN = "\e[32m"
# BOLD = "\e[1m"
# CLEAR="\033[0m"

DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
npm run-script build && aws s3 sync $DIR/../build s3://traders.bananabrann.com

printf "\n\e[32m\e[1mdeploy.sh finished\033[0m\n"
