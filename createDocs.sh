parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
(
    for filename in *.js; do
        if [[ "$filename" == "index.js" ]]; then
            continue
        fi
    
        echo "generating ./doc/${filename%%.*}.md"
        npx jsdoc2md -f "./$filename" > "../doc/${filename%%.*}.md"
    done

    done
)