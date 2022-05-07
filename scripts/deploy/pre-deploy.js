const fs = require("fs");
// const path = require("path");
// const { projectPath } = require("./values");

// fs.copyFileSync("package.json", path.join(projectPath, "package.json"));

if (fs.existsSync(".vercel")) {
  fs.rmSync(".vercel", { recursive: true });
}
