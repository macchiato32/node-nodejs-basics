import fs from "fs";
const { promises: fsPromises } = fs;

import path from "path";

const list = async () => {
  const basePath = "./src/fs";
  const folder = "files";

  const folderPath = path.join(basePath, folder);

  if (!fs.existsSync(folderPath)) {
    throw new Error("FS operation failed");
  }

  const files = await fsPromises.readdir(folderPath);

  console.log(files);
};

await list();
