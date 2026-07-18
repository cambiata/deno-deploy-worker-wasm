import { add } from "../wasm/lib/rs_lib.wasm";
console.log("Test WASM-WORKER running", add(33, 55));

self.onmessage = ({ data }) => {
  console.log("Test WASM-WORKER", data);
  self.postMessage("this WASM-WORKER is working");
};
