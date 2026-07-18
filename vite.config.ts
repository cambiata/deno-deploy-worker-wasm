import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import wasm from "npm:vite-plugin-wasm@3.6.0";

export default defineConfig({
  plugins: [fresh(), wasm()],
  worker: {
    format: "es",
  },
});
