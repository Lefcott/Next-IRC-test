const fs = require("fs");
const path = require("path");

const [, , projectName] = process.argv;

const projectPath = `src/projects/${projectName}`;

let isDeployed = true;

const answers = [
  {
    question: "Set up and deploy",
    answer: () => "y",
    attemped: false,
  },
  {
    question: "Link to existing project",
    answer: () => (isDeployed ? "y" : "n"),
    attemped: false,
  },
  {
    question: "Link to it",
    answer: () => "n",
    attemped: false,
  },
  {
    question: "Link to different existing project",
    answer: () => "n",
    attemped: false,
  },
  {
    question: "Want to override the settings",
    answer: () => "y",
    attemped: false,
  },
  {
    question: "Which settings would you like to overwrite",
    answer: () => " \\033[A ",
    attemped: false,
  },
  {
    question: "What's your Build Command",
    answer: () => `yarn build ${projectName}`,
    attemped: false,
  },
  {
    question: "What's your Output Directory?",
    answer: () => path.join(projectPath, ".next"),
    attemped: false,
  },
  {
    question: "Which scope do you want to deploy to",
    answer: () => "",
    attemped: false,
  },
  {
    question: "What’s your project’s name",
    answer: () => projectName,
    attemped: false,
  },
  {
    question: "What’s the name of your existing project?",
    answer: () => projectName,
    attemped: false,
  },
  {
    question: "Error! Project not found",
    answer: null,
    callback: (retry) => {
      isDeployed = false;
      console.log("Project not found on Vercel, creating a new one...".cyan);
      retry();
    },
    attemped: false,
  },
  {
    question: "In which directory is your code located",
    answer: () => ".",
    attemped: false,
  },
  {
    question: "Inspect:",
    answer: () => null,
    callback: () => {
      if (fs.existsSync(".vercel")) {
        fs.rmSync(".vercel", { recursive: true });
      }
      console.log("Removed .vercel folder".cyan);
    },
    attemped: false,
  },
];

module.exports = {
  projectName,
  projectPath,
  answers,
};
