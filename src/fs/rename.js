import fs from "fs";
const { promises: fsPromises } = fs;

import path from "path";

const rename = async () => {
  const basePath = "./src/fs/files";
  const src = "wrongFilename.txt";
  const dest = "properFilename.md";
  const srcPath = path.join(basePath, src);
  const destPath = path.join(basePath, dest);

  if (!fs.existsSync(srcPath)) {
    throw new Error("FS operation failed");
  }

  if (fs.existsSync(destPath)) {
    throw new Error("FS operation failed");
  }

  await fsPromises.rename(srcPath, destPath);
};

await rename();
