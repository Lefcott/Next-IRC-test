const fs = require("fs");

const [, , projectName] = process.argv;

const projectPath = `src/projects/${projectName}`;

if (fs.existsSync(projectPath)) {
  console.log(`Project ${projectName} already exists.`.red);
  process.exit(0);
}

module.exports = {
  projectName,
  projectPath,
};
