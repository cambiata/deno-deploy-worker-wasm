import TestWorker from "@/islands/TestWorker.tsx";
import { define } from "../utils.ts";
import { TestWasm } from "@/islands/TestWasm.tsx";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <h1 class="text-4xl font-bold text-center my-6">
        deno-deploy-worker-wasm
      </h1>
      <TestWorker />
      <TestWasm />
    </div>
  );
});
