import { ChildHandshake, LocalHandle, WorkerMessenger } from "post-me";
import { add } from "../wasm/lib/rs_lib.js";

import { WorkerEvents, WorkerMethods } from "./testwasm.types.ts";

const methods: WorkerMethods = {
  standard_sum: (x: number, y: number) => x + y,
  wasm_sum: (x: number, y: number) => add(x, y),
};

const messenger = new WorkerMessenger({ worker: self as any });

ChildHandshake(messenger, methods).then((connection) => {
  const localHandle: LocalHandle<WorkerMethods, WorkerEvents> = connection
    .localHandle();

  // Emit custom events to the worker
  // localHandle.emit("ping", "Oh, hi!");
});
