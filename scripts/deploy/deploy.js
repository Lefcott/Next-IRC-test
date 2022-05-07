const { spawn } = require("child_process");
const dotenv = require("dotenv");
const { postDeploy } = require("./post-deploy");
const { answers } = require("./values");

let retrying = false;

dotenv.config({ path: ".env.local" });

const deploy = () => {
  const vercel = spawn("vercel", [
    "deploy",
    ".",
    "--prod",
    "--no-clipboard",
    "--token",
    process.env.VERCEL_TOKEN,
  ]);

  const retry = () => {
    retrying = true;
    vercel.stdout.off("data", onData);
    vercel.stderr.off("data", onStdErr);
    vercel.stdin.end();
    let killed = false;
    while (!killed) {
      killed = vercel.kill("SIGKILL");
      if (killed) {
        console.log("Terminated the previous vercel process".cyan);
      }
    }

    answers.forEach((answer) => {
      answer.attemped = false;
    });
    deploy();
  };

  vercel.stdout.pipe(process.stdout);
  vercel.stderr.pipe(process.stderr);

  const onData = (data) => {
    const strData = data.toString("utf8");

    answers.forEach((answer) => {
      if (!answer.attemped && strData.includes(answer.question)) {
        answer.attemped = true;
        if (answer.answer !== null) {
          const answerData = answer.answer();
          vercel.stdin.write(`${answerData}\n`);
        }
      }
    });
  };

  const onStdErr = (data) => {
    const strData = data.toString("utf8");

    answers.forEach((answer) => {
      if (!answer.attemped && strData.includes(answer.question)) {
        answer.attemped = true;
        if (answer.callback) {
          answer.callback(retry);
        }
      }
    });
  };

  vercel.stdout.on("data", onData);
  vercel.stderr.on("data", onStdErr);

  vercel.on("exit", (code) => {
    if (retrying) {
      retrying = false;
      return;
    }
    postDeploy(code === 0);
  });
};

deploy();
