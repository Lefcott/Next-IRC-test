const fs = require('fs');
const path = require('path');

const [, , projectName] = process.argv;

const projectPath = `src/projects/${projectName}`;

const answers = [
  {
    question: 'Set up and deploy',
    answer: () => 'y',
    attemped: false,
  },
  {
    question: 'Link to existing project',
    answer: () =>
      fs.existsSync(path.join(projectPath, '.vercel')) ? 'y' : 'n',
    attemped: false,
  },
  {
    question: 'Link to it',
    answer: () => 'n',
    attemped: false,
  },
  {
    question: 'Link to different existing project',
    answer: () => 'n',
    attemped: false,
  },
  {
    question: 'Want to override the settings',
    answer: () => 'n',
    attemped: false,
  },
  {
    question: 'Which scope do you want to deploy to',
    answer: () => '',
    attemped: false,
  },
  {
    question: 'What’s your project’s name',
    answer: () => projectName,
    attemped: false,
  },
  {
    question: 'What’s the name of your existing project?',
    answer: () => projectName,
    attemped: false,
  },
  {
    question: 'In which directory is your code located',
    answer: () => projectPath,
    attemped: false,
  },
  {
    question: 'created .vercel and added it to .gitignore',
    answer: () => null,
    callback: () => {
      // Vercel CLI adds .vercel folder to the .gitignore file, but we don't want to do that
      fs.writeFileSync('.gitignore', previousGitIgnore);
      console.log('Removed .vercel from .gitignore'.cyan);
    },
    attemped: false,
  },
  {
    question: 'Inspect:',
    answer: () => null,
    callback: () => {
      // Move .vercel folder in order to avoid deploying this project when trying to deploy other projects
      if (fs.existsSync(path.join(projectPath, '.vercel'))) {
        fs.rmSync(path.join(projectPath, '.vercel'), { recursive: true });
      }
      if (fs.existsSync('.vercel/README.txt')) {
        fs.rmSync('.vercel/README.txt');
      }
      fs.renameSync('.vercel', path.join(projectPath, '.vercel'));
      console.log('Moved .vercel to the project directory'.cyan);
    },
    attemped: false,
  },
];

const previousGitIgnore = fs.readFileSync('.gitignore', 'utf8');

module.exports = {
  projectName,
  projectPath,
  answers,
  previousGitIgnore,
};
