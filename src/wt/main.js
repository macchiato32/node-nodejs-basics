import { Worker } from "node:worker_threads";
import os from "node:os";

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = [];
  const results = [];
  let finished = 0;

  for (let i = 0; i < numCores; i++) {
    const worker = new Worker("./src/wt/worker.js", {
      workerData: i + 10,
    });

    workers.push(worker);

    worker.on("message", (message) => {
      results.push({ status: "resolved", data: message });
      finished++;
      if (finished === numCores) {
        console.log(results);
      }
    });

    worker.on("error", (error) => {
      results.push({ status: "error", data: null });
      finished++;
      if (finished === numCores) {
        console.log(results);
      }
    });
  }
};

await performCalculations();