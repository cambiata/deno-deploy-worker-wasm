export type WorkerMethods = {
  standard_sum: (x: number, y: number) => number;
  wasm_sum: (x: number, y: number) => number;
};

export type WorkerEvents = {};
