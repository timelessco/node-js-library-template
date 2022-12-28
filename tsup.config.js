import { defineConfig } from "tsup";

export default defineConfig(options => {
  return {
    entry: ["src/index.js"],
    outDir: "lib",
    target: "node14",
    format: ["esm", "cjs"],
    shims: true,
    treeshake: true,
    sourcemap: !options.watch,
    minify: !options.watch,
    clean: true,
  };
});
