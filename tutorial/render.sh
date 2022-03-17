#!/usr/bin/env bash

docker run -it -v "$(pwd)":/documents/ asciidoctor/docker-asciidoctor asciidoctor -a stylesheet=custom.css index.adoc
