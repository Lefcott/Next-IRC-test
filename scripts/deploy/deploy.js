const { spawn } = require('child_process');
const dotenv = require('dotenv');
const { postDeploy } = require('./post-deploy');
const { answers } = require('./values');

dotenv.config({ path: '.env.local' });

const vercel = spawn('vercel', [
  'deploy',
  '.',
  '--prod',
  '--no-clipboard',
  '--token',
  process.env.VERCEL_TOKEN,
]);

vercel.stdout.on('data', (data) => {
  const strData = data.toString('utf8');
  console.log(strData);

  answers.forEach((answer) => {
    if (!answer.attemped && strData.includes(answer.question)) {
      answer.attemped = true;
      if (answer.answer !== null) {
        vercel.stdin.write(`${answer.answer()}\n`);
      }
    }
  });
});

vercel.stderr.on('data', (data) => {
  const strData = data.toString('utf8');
  console.log(strData);

  answers.forEach((answer) => {
    if (!answer.attemped && strData.includes(answer.question)) {
      // answer.attemped = true;
      if (answer.callback) {
        answer.callback();
      }
    }
  });
});

vercel.on('exit', (code) => {
  if (code !== 0) {
    return;
  }
  postDeploy();
});
