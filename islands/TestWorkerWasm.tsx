import { useEffect, useRef, useState } from "preact/hooks";
import { init_worker } from "./workers/testwasm.utils.ts";
import { RemoteHandle } from "post-me";
import { WorkerEvents, WorkerMethods } from "./workers/testwasm.types.ts";

export function TestWorkerWasm() {
  const handleRef = useRef<RemoteHandle<WorkerMethods, WorkerEvents> | null>(
    null,
  );
  useEffect(() => {
    const init = async () => {
      const handle = await init_worker();
      handleRef.current = handle;
      console.log("standard_sum", await handle.call("standard_sum", 3, 4));
      console.log("wasm_sum", await handle.call("wasm_sum", 5, 4));
    };
    init();
  }, []);

  return (
    <>
      <h1>Hello from TestWorkerWasm</h1>
      <button
        type="button"
        onClick={async () => {
          console.log(
            "standard_sum",
            await handleRef.current?.call("standard_sum", 3, 4),
          );
          console.log(
            "wasm_sum",
            await handleRef.current?.call("wasm_sum", 5, 4),
          );
        }}
      >
        Test Worker Wasm
      </button>
    </>
  );
}
