import fs from "fs";

const read = async () => {
  const fileName = "./files/fileToRead.txt";

  if (!fs.existsSync(fileName)) {
    throw new Error("FS operation failed");
  }

  const fileContent = fs.readFileSync(fileName, 'utf-8');
  console.log(fileContent);
};

await read();
