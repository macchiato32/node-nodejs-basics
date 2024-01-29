import fs from "fs";
const { promises: fsPromises } = fs;

import path from "path";

const remove = async () => {
  const basePath = "./src/fs/files";
  const file = "fileToRemove.txt";

  const filePath = path.join(basePath, file);

  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  await fsPromises.unlink(filePath);
};

await remove();
