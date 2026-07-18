self.onmessage = ({ data }) => {
  console.log("Test WORKER", data);
  self.postMessage("Test WORKER is working");
};
