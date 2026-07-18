import { useEffect, useRef } from "preact/hooks";

export default function TestWorker() {
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("./workers/test.worker.ts", import.meta.url),
      { type: "module" },
    );

    workerRef.current.onmessage = ({ data }) => {
      console.log("Received message in main thread:", data);
    };

    workerRef.current.postMessage("Message from main thread");

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
      workerRef.current = null;
    };
  }, []);

  return (
    <>
      <div>hello from the island</div>
    </>
  );
}
