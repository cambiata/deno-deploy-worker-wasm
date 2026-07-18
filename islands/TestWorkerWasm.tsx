import { useEffect, useRef, useState } from "preact/hooks";

export function TestWorkerWasm() {
  const workerRef = useRef<Worker | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("./workers/testwasm.worker.ts", import.meta.url),
      { type: "module" },
    );

    workerRef.current.onmessage = ({ data }) => {
      console.log("Received message in main thread:", data);
      setMessage(data);
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
      <h1>Hello from TestWorkerWasm</h1>
      <div>message: {message}</div>
    </>
  );
}
