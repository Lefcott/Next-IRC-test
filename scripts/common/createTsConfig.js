const fs = require("fs");
const path = require("path");
const tsconfig = require("../../tsconfig.base.json");

const createTsConfig = (projectName) => {
  const projectPath = `src/projects/${projectName}`;

  if (!tsconfig.compilerOptions.paths) {
    tsconfig.compilerOptions.paths = {};
  }

  tsconfig.compilerOptions.paths["@/*"] = [`${projectPath}/*`];

  fs.writeFileSync(
    path.join(projectPath, "tsconfig.json"),
    `${JSON.stringify(tsconfig, null, 2)}\n`
  );
};

module.exports = {
  createTsConfig,
};
