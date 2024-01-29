import fs from "fs";
import stream from "stream/promises";
import path, { basename } from "path";

const FILE_NAME = "fileToRead.txt";
const BASE_PATH = "./src/streams/files";

const read = async () => {
  try {
    const filePath = path.join(BASE_PATH, FILE_NAME);
    const fileStream = fs.createReadStream(filePath);

    await stream.pipeline(fileStream, process.stdout);
  } catch (error) {
    console.error(error);
  }
};

await read();
