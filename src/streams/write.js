import fs from "fs";
import stream from "stream/promises";
import path, { basename } from "path";

const FILE_NAME = "fileToWrite.txt";
const BASE_PATH = "./src/streams/files";

/**
 * Kinda function documentation :)
 * Writes process.stdin data into a file using Writable Stream
 * @returns {Promise<void>} - A promise that resolves when the data is written
 */
const write = async () => {
  try {
    const filePath = path.join(BASE_PATH, FILE_NAME);
    const fileStream = fs.createWriteStream(filePath);

    await stream.pipeline(process.stdin, fileStream);
  } catch (error) {
    console.error(error);
  }
};

await write();
