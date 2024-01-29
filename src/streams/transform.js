import { Transform } from "stream";

const transform = async () => {
  const textReverser = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  try {
    process.stdin.pipe(textReverser).pipe(process.stdout);
    await new Promise((resolve) => textReverser.on("finish", resolve));
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

await transform();
