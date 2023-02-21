#!/bin/bash

while getopts k:h: flag
do
    case "${flag}" in
        h) hostname=${OPTARG};;
    esac
done

if [[ -z "$hostname" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployWebsite.sh -k <pem key file> -h <hostname>\n\n"
    exit 1
fi

printf "\n----> Deploying root website to $hostname \n-------------------------------\n"

# Step 1 - Copy all files found in the current directory.
printf "\n----> Copy the home page files to the target.\n"
pscp -i  ubuntu@$hostname:public_html/
