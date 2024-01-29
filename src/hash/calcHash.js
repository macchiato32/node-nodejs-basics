import fs from "fs";
import crypto from "crypto";
import stream from "stream/promises";
import path, { basename } from "path";

const BASE_PATH = "./src/hash/files";
const FILE_NAME = "fileToCalculateHashFor.txt";
const HASH_ALGORITHM = "sha256";
const ENCODING = "hex";

const calculateHash = async () => {
  try {
    const filePath = path.join(BASE_PATH, FILE_NAME);
    const fileStream = fs.createReadStream(filePath);
    const hash = crypto.createHash(HASH_ALGORITHM);

    hash.setEncoding(ENCODING);

    await stream.pipeline(fileStream, hash);
    console.log(hash.digest());
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
