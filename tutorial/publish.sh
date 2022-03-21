#!/usr/bin/env bash

rsync --times --recursive --update --relative --delete --verbose --chmod=F+r \
./media/*.* \
./*.css \
./index.html \
./p5-sketches/*.{js,css,html} \
./p5-sketches/libraries/*.js \
cyon:~/www/programmieren-lernen-mit-javascript.ch