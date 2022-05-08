const { spawn } = require("child_process");
const { projectPath } = require("./values");

spawn("next", ["dev", projectPath], { stdio: "inherit" });
