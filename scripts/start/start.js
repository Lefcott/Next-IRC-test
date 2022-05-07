const { spawn } = require("child_process");
const { projectPath } = require("./values");

spawn("next", ["start", projectPath], { stdio: "inherit" });
