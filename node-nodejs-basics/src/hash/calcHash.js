import { createHash } from "crypto";

const calculateHash = async () => {
  const fileToHash = "./files/fileToCalculateHashFor.txt";
  const hashFile = createHash("SHA256").update(fileToHash).digest("hex");
  console.log(hashFile);
};

await calculateHash();
