import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import path from "path";

const BASE_PATH = "./src/zip/files";
const FILE_NAME = "fileToCompress.txt";
const ARCHIVE_NAME = "archive.gz";

const decompress = async () => {
  try {
    const fileSource = path.join(BASE_PATH, ARCHIVE_NAME);
    const fileDestination = path.join(BASE_PATH, FILE_NAME);
    const sourceStream = createReadStream(fileSource);
    const destinationStream = createWriteStream(fileDestination);

    sourceStream.pipe(createGunzip()).pipe(destinationStream);

    destinationStream.on("finish", () => {
      console.log("File decompressed successfully");
    });
  } catch (error) {
    console.error("Error decompressing file:", error);
  }
};

await decompress();
