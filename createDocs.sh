#!/usr/bin/env bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
(
    cd "$parent_path"
    for filename in *.js; do
        if [[ "$filename" != "index.js" ]]; then
            continue
        fi
    
        # echo "generating ./doc/${filename%%.*}.md"
         echo "generating ./doc/${filename}.md"
        npx jsdoc2md -f "./${filename}" > "./doc/netmera.md"
    done
)