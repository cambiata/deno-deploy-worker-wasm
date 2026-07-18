self.onmessage = ({ data }) => {
  console.log("Received message in worker", data);
  self.postMessage("this is working");
};
