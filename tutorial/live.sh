#!/usr/bin/env bash

find . -name "*.adoc" -or -name "*.css" -or -name "docinfo-*.html" | entr ./render.sh
