#!/bin/bash

# NOTE --------------
# This script will be responsible for preparing and publishing the WebGL
# build to Microsoft Azure.

# The script imports variables from .env.sh
# -------------------



# SECTION -----------
# Initialization
# -------------------

echo "Initializing ... "

RED='\033[0;31m'
NC='\033[0m'

function found_error() {
    local message=$1
    echo -e "\n\t${RED}<ERROR> $message"
    exit 1
}

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source $DIR/.env.sh

if [ -z "$RESOURCE_GROUP" ]
then
    found_error "Azure Resource Group not detected!"
else
    echo -e "\tResource Group: $RESOURCE_GROUP"
fi

if [ -z "$STORAGE_CONTAINER" ]
then
    found_error "Azure Storage Container not detected!"
else
    echo -e "\tStorage Container: $STORAGE_CONTAINER"
fi



# SECTION -----------
# Upload to Azure
# -------------------

# TODO -- Check if Unity WebGL Build directory present

# TODO -- Upload to Azure Storage Container

# TODO -- (Opt.) Ping website for test
