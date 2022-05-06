const { spawn } = require("child_process");

const [, , projectName] = process.argv;

spawn("next", ["dev", `src/projects/${projectName}`], { stdio: "inherit" });
