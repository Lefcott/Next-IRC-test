const { spawn } = require("child_process");
const { projectPath } = require("./values");
const { postBuild } = require("./post-build");

const next = spawn("next", ["build", projectPath], { stdio: "inherit" });

next.on("exit", (code) => {
  postBuild(code === 0);
});
