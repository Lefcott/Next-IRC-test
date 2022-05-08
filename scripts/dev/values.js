const { validateValues } = require("../common/validateValues");

const [, , type, projectName] = process.argv;

const projectPath = `src/${
  type === "project" ? "projects" : "templates"
}/${projectName}`;

validateValues(type, projectName, projectPath);

module.exports = {
  projectName,
  projectPath,
  type,
};
