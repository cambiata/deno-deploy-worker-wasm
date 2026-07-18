self.onmessage = ({ data }) => {
  console.log("Test WASM-WORKER", data);
  self.postMessage("this WASM-WORKER is working");
};
