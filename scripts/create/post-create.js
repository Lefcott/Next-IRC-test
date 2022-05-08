const { projectName } = require("./values");

const postCreate = () => {
  console.log(`Project ${projectName} created successfully.`.green);
};

module.exports = {
  postCreate,
};
