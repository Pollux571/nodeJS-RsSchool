import fs from "fs";

const copy = async () => {
  const filePath = "./files/fresh.txt";
  const copiedFile = "./files/files_copy.txt";

  if (fs.existsSync(copiedFile)) {
    throw new Error("FS operation failed");
  }
  fs.copyFileSync(filePath, copiedFile);
  console.log("File copied successfully!");
};

await copy();
