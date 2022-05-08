const { validateValues } = require("../common/validateValues");

const [, , projectName] = process.argv;

const projectPath = `src/projects/${projectName}`;

validateValues(null, projectName, projectPath);

module.exports = {
  projectName,
  projectPath,
};
