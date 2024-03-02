import summary from "rollup-plugin-summary";
import { terser } from "rollup-plugin-terser";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./dist/index.js",
  output: {
    file: "umd/ordbit-wallet-connect.js",
    format: "umd",
    name: "ordbit-wallet-connect",
  },

  onwarn(warning) {
    if (warning.code !== "THIS_IS_UNDEFINED") {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({ "Reflect.decorate": "undefined" }),
    resolve(),
    nodeResolve({ exportConditions: "production" }),
    commonjs(),
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};
