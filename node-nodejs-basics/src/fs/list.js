import fs from "fs";

const list = async () => {
  const folderName = "./files";

  if (!fs.existsSync(folderName)) {
    throw new Error("FS operation failed");
  }

  const filenames = fs.readdirSync(folderName);

  console.log(filenames);
};

await list();
