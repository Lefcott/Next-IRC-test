const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { projectPath } = require("./values");

fs.copyFileSync(".env.local", path.join(projectPath, ".env.local"));

spawn("next", ["dev", projectPath], { stdio: "inherit" });
