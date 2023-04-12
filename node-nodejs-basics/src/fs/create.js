import fs from "fs";

const create = async () => {
  const filePath = "./files/fresh.txt";
  const fileContent = "I am fresh and young";

  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed: file already exists");
  }

  fs.writeFileSync(filePath, fileContent);

  console.log("File created successfully!");
};

await create();
