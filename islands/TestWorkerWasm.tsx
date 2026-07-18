import { useEffect, useRef, useState } from "preact/hooks";
import { init_worker } from "./workers/testwasm.utils.ts";

const handle = await init_worker();
console.log("standard_sum", await handle.call("standard_sum", 3, 4));
console.log("wasm_sum", await handle.call("wasm_sum", 5, 4));

export function TestWorkerWasm() {
  return (
    <>
      <h1>Hello from TestWorkerWasm</h1>
      <button
        type="button"
        onClick={async () => {
          console.log("standard_sum", await handle.call("standard_sum", 3, 4));
          console.log("wasm_sum", await handle.call("wasm_sum", 5, 4));
        }}
      >
        Test Worker Wasm
      </button>
    </>
  );
}
