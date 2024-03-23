#!/bin/bash

# make a js array consisting of strings of every name of every badge in the badges folder
# output it to BADGES_FILE
FOLDER="files/img/badges/"
BADGES_FILE="files/js/badges.js"

rm $BADGES_FILE
touch $BADGES_FILE
echo "const badges = [" > $BADGES_FILE
for file in $FOLDER*; do
  echo "    \"$FOLDER${file##*/}\"," >> $BADGES_FILE
done
echo "]" >> $BADGES_FILE
