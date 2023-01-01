#!/bin/bash

echo "Health check"

URL="https://crimson-glade-7942.fly.dev/health"
response=$(curl $URL)

if [[ $response == "ok" ]]
then
    exit 0
else
    exit 1 # exit status 1 means that the script "fails"
fi