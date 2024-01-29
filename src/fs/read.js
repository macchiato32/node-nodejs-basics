import fs from "fs";
const { promises: fsPromises } = fs;

import path from "path";

const read = async () => {
  const basePath = "./src/fs/files";
  const file = "fileToRead.txt";
  const filePath = path.join(basePath, file);

  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  const data = await fsPromises.readFile(filePath, "utf8");

  console.log(data);
};
await read();
