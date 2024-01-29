import fs from "fs/promises"; // Import the fs/promises module

const create = async () => {
  try {
    await fs.access("./src/fs/files/fresh.txt");
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile("./src/fs/files/fresh.txt", "I am fresh and young");
      console.log("File created successfully");
    } else {
      console.error(err.message);
    }
  }
};

await create();
