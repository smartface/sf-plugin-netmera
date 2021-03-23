const fs = require("fs");
const path = require("path");
const projectJSONPath = path.join(__dirname,"../../../../config/project.json");

let project = require(projectJSONPath);
if (!project.build.input.android.plugins.modules || !project.build.input.android.plugins.modules.netmera) {
    project.build.input.android.plugins.modules = project.build.input.android.plugins.modules ? project.build.input.android.plugins.modules : {};
    project.build.input.android.plugins.modules.netmera = {
        path: "plugins/Android/netmera",
        active: true
    };
}

var output = JSON.stringify(project, null, "\t");
fs.writeFileSync(projectJSONPath, output, "utf8");