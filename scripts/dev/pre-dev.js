const fs = require("fs");
const path = require("path");
const { projectName, projectPath } = require("./values");
const { createTsConfig } = require("../common/createTsConfig");

fs.copyFileSync(".env.local", path.join(projectPath, ".env.local"));

createTsConfig(projectName);
