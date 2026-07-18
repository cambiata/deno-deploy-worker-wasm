import { add } from "../wasm/lib/rs_lib.js";
console.log("22 + 44 =", add(22, 44));

// console.log(add);

self.onmessage = ({ data }) => {
  console.log("Test WASM-WORKER", data);
  const sum = add(33, 55);
  // console.log("sum in WASM-WORKER:", sum);
  self.postMessage("Test WASM-WORKER is working: 33 + 55 = " + sum);
  // self.postMessage("Test WASM-WORKER is working");
};

// const sum = (a: number, b: number) => {
//   return add(a, b);
// };
