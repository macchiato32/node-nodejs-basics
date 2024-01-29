import fs from "fs";

const { promises: fsPromises } = fs;

const copy = async () => {
  const src = "./src/fs/files";
  const dest = "./src/fs/files_copy";

  if (!fs.existsSync(src)) {
    throw new Error("FS operation failed");
  }

  if (fs.existsSync(dest)) {
    throw new Error("FS operation failed");
  }

  await fsPromises.mkdir(dest);

  const files = await fsPromises.readdir(src);

  for (const file of files) {
    await fsPromises.copyFile(`${src}/${file}`, `${dest}/${file}`);
  }
};

await copy();
