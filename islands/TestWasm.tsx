import { useState } from "preact/hooks";
import { add } from "./wasm/lib/rs_lib.js";

export function TestWasm() {
  const [sum, setSum] = useState<number | null>(add(111, 222));

  return (
    <>
      <h1>Hello from TestWasm</h1>
      <div>sum: {sum}</div>
    </>
  );
}
