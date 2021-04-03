#!/usr/bin/env bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
(
    cd $parent_path
    npx jsdoc2md -f "./analysis.js" > "./doc/netmera.md"

    cd ./notification
    npx jsdoc2md -f "./analysis.js" > "../doc/notification.md"
)