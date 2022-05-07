const { projectName } = require("./values");

const postDeploy = (success) => {
  if (success) {
    console.log(`Deployed ${projectName} successfully!`.green);
  } else {
    console.log("Deployment failed".red);
  }
};

module.exports = {
  postDeploy,
};
