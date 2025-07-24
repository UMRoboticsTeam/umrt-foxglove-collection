const { execSync } = require("child_process");
// const fs = require("fs");
const path = require("path");

const projects = [
  "umrt-foxlove-cat-bop",
  "umrt-foxglove-encoder-manager",
  "umrt-foxglove-gps-tracker",
];

const cmd = process.argv.slice(2).join(" ");

for (const proj of projects) {
  const fullPath = path.resolve(__dirname, proj);
  console.log(`\nRunning: ${cmd} in ${proj}`);
  try {
    execSync(cmd, { cwd: fullPath, stdio: "inherit" });
  } catch (e) {
    console.warn(`Failed in ${proj}: ${e.message}`);
  }
}
