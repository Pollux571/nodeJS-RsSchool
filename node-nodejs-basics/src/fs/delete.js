import fs from "fs";

const remove = async () => {
  const deletedFile = "./files/files_copy.txt";
  if (!fs.existsSync(deletedFile)) {
    throw new Error("Fs operation failed");
  }
  fs.unlinkSync(deletedFile);
  console.log("File deleted successfully!");
};

await remove();
