import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import path, { basename } from "path";

/**
 * Actually at the moment im not shure in styleguide
 */

const BASE_PATH = "./src/zip/files";
const FILE_NAME = "fileToCompress.txt";
const ARCHIVE_NAME = "archive.gz";

const compress = async () => {
  try {
    const fileSource = path.join(BASE_PATH, FILE_NAME);
    const fileArchive = path.join(BASE_PATH, ARCHIVE_NAME);
    const sourceStream = createReadStream(fileSource);
    const destinationStream = createWriteStream(fileArchive);

    sourceStream.pipe(createGzip()).pipe(destinationStream);

    destinationStream.on("finish", () => {
      console.log("File compressed successfully");
    });
  } catch (error) {
    console.error("Error compressing file:", error);
  }
};

await compress();
