import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import wasm from "npm:vite-plugin-wasm";

export default defineConfig({
  plugins: [fresh(), wasm()],
});
