const fs = require("fs");

if (fs.existsSync(".vercel")) {
  fs.rmSync(".vercel", { recursive: true });
}
