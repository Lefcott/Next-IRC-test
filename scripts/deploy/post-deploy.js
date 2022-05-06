const { projectName } = require('./values');

const postDeploy = () => {
  console.log(`Deployed ${projectName} successfully!`.green);
};

module.exports = {
  postDeploy,
};
