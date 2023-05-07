import childProcess from "node:child_process";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const child = childProcess.fork(`${__dirname}/sub.js`);

child.on("message", (m) => {
  console.log("PARENT got message:", m);
});

child.send({ hello: "world" }); // <- Throws missing methods
