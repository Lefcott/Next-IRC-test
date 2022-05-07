const [, , projectName] = process.argv;

const projectPath = `src/projects/${projectName}`;

module.exports = {
  projectName,
  projectPath,
};
