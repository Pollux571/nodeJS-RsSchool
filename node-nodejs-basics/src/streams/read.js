// https://stackoverflow.com/questions/4976466/difference-between-process-stdout-write-and-console-log-in-node-js
// https://snyk.io/advisor/npm-package/process/functions/process.stdout
import fs from "fs";

const read = async () => {
  const fileRead = fs.createReadStream("./files/fileToRead.txt");
  fileRead.on("readable", () => {
    process.stdout.write(`readable: ${fileRead.read()}`);
  });
};

await read();
