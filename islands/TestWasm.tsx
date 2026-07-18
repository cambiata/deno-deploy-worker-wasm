import { add } from "../wasm/lib/rs_lib.js";

console.log("add(1, 2) =", add(1, 2));

export function TestWasm() {
  return (
    <>
      <h1>Hello from TestWasm</h1>
    </>
  );
}
