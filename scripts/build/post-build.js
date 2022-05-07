const { projectName } = require("./values");

const postBuild = (success) => {
  if (success) {
    console.log(`Built ${projectName} successfully!`.green);
  } else {
    console.log("Build failed".red);
  }
};

module.exports = {
  postBuild,
};
