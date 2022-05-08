const fs = require("fs");

const validateValues = (type, projectName, projectPath) => {
  if (type && !["project", "template"].includes(type)) {
    console.log(`Invalid type: '${type}'`.red);
    process.exit(0);
  }

  if (!projectPath || !fs.existsSync(projectPath)) {
    console.log(`${type} not found: '${projectName}'`.red);
    process.exit(0);
  }
};

module.exports = {
  validateValues,
};
