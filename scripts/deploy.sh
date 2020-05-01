#!/bin/bash

# SECTION
# This script automates the process to deploy the project to the
# AWS S3 instance.

# NOTE
# You must have your AWS CLI configured. See `aws config` for setup
# process and instructions.

DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

npm run-script build

# NOTE Normally I would would the DIR, but because
# this script is executed from project root, we need
# to be in projcet root and not the script location

# aws s3 sync $DIR/build s3://traders.bananabrann.com
aws s3 sync build s3://traders.bananabrann.com

printf "\n\e[32m\e[1mdeploy.sh finished\033[0m\n"
