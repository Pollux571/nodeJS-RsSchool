// https://www.google.com/search?q=process+stdin+writable+stream&rlz=1C1GGRV_enUZ929UZ929&ei=Glk2ZL6bCeqxrgTN3rDQCA&ved=0ahUKEwi-kN3I5KP-AhXqmIsKHU0vDIoQ4dUDCA8&uact=5&oq=process+stdin+writable+stream&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAE6CggAEEcQ1gQQsAM6BwgAEIAEEBM6CAgAEBYQHhATOgYIABAWEB46CAgAEBYQHhAPOgYIABAeEA06CAgAEAUQHhANOggIIRAWEB4QHToKCCEQFhAeEA8QHToECCEQFToHCCEQoAEQCkoECEEYAFDPCFjDPWCeP2gDcAF4AIABoQGIAZERkgEEMC4xOJgBAKABAcgBCMABAQ&sclient=gws-wiz-serp
import fs from "fs";
import { Writable } from "stream";

const write = async () => {
  const fileToWrite = "./files/fileToWrite.txt";
  const writableStream = new Writable({
    write(chunk, encoding, callback) {
      fs.appendFile(fileToWrite, chunk, (err) => {
        if (err) {
          console.error(err);
        }
        callback();
      });
    },
  });

  process.stdin.pipe(writableStream);

  // ! 2nd  way
  // const fileStream = fs.createWriteStream('./files/fileToWrite.txt');
  // process.stdout.write("Enter some text to write to file: ")
  // process.stdin.pipe(fileStream);
};

await write();
