import { defineConfig } from "tsup";
import { sass } from "@zhltc/esbuild-plugin-inline-sass";
import { main } from "./package.json";

export default defineConfig({
  entry: [main],
  format: ["cjs", "esm"],
  sourcemap: true,
  clean: true,
  platform: "browser",
  target: "esnext",
  esbuildPlugins: [sass()],
  dts: true,
  treeshake: true,
});
