
#!/usr/bin/env bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

mv $parent_path/../native/android/netmera $parent_path/../../../../plugins/Android/netmera
(
    cd "$parent_path"
    node ./project.js
)
rm -rvf $parent_path/../native/android