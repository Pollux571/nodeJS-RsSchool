import fs from "fs";

const rename = async () => {
  const wrongFile = "./files/wrongFilename.txt";
  const newFileName = "./files/properFilename.md";

  if (fs.existsSync(wrongFile && newFileName)) {
    throw new Error("FS operation failed");
  }
  fs.renameSync(wrongFile, newFileName);
  console.log("File renamed successfully!");
};

await rename();
