import fs from "fs";
import url from "url";
import path from "path";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { createEs2015LinkerPlugin } from "@angular/compiler-cli/linker/babel";
import {
  ConsoleLogger,
  NodeJSFileSystem,
  LogLevel,
} from "@angular/compiler-cli";

const __dirname = new url.URL(".", import.meta.url).pathname;
const packageJson = JSON.parse(
  fs
    .readFileSync(
      path.resolve(__dirname, "node_modules/@ngxs/store/package.json")
    )
    .toString()
);

/** File system used by the Angular linker plugin. */
const fileSystem = new NodeJSFileSystem();
/** Logger used by the Angular linker plugin. */
const logger = new ConsoleLogger(LogLevel.info);
/**
 * The linker plugin is used to make output files AOT compatible, so they don't
 * require the `@angular/compiler` at runtime.
 */
const linkerPlugin = createEs2015LinkerPlugin({
  fileSystem,
  logger,
  linkerJitMode: false,
});

const packages = ["5", "2015"]
  .map((ecma) => [
    {
      ecma,
      angularPackage: "@ngxs/store",
      filename: "ngxs-store-internals",
    },
    {
      ecma,
      angularPackage: "@ngxs/store",
      filename: "ngxs-store",
    },
    {
      ecma,
      angularPackage: "@ngxs/store",
      filename: "ngxs-store-operators",
    },
    {
      ecma,
      angularPackage: "@ngxs/router-plugin",
      filename: "ngxs-router-plugin",
    },
    {
      ecma,
      angularPackage: "@ngxs/storage-plugin",
      filename: "ngxs-storage-plugin",
    },
    {
      ecma,
      angularPackage: "@ngxs/form-plugin",
      filename: "ngxs-form-plugin",
    },
    {
      ecma,
      angularPackage: "@ngxs/devtools-plugin",
      filename: "ngxs-devtools-plugin",
    },
    {
      ecma,
      angularPackage: "@ngxs/logger-plugin",
      filename: "ngxs-logger-plugin",
    },
  ])
  .flat();

export default packages
  .map(({ ecma, angularPackage, filename }) => [
    createConfig({
      ecma,
      prod: false,
      format: "system",
      angularPackage,
      filename,
    }),
    createConfig({
      ecma,
      prod: true,
      format: "system",
      angularPackage,
      filename,
    }),
    createConfig({ ecma, prod: false, format: "es", angularPackage, filename }),
    createConfig({ ecma, prod: true, format: "es", angularPackage, filename }),
  ])
  .flat();

function createConfig({ ecma, prod, format, angularPackage, filename }) {
  const dir = (format === "es" ? "." : format) + `/es${ecma}/ivy`;

  return {
    input: path.join(
      __dirname,
      `node_modules/${angularPackage}/fesm${ecma}/${filename}.js`
    ),
    output: {
      file: `${dir}/${filename}.${prod ? "min." : ""}js`,
      format,
      sourcemap: true,
      banner: `/* esm-bundle - ${angularPackage}@${packageJson.version} - Ivy - ${format} format - es${ecma} - Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://github.com/ngxs/store/blob/master/LICENSE */`,
    },
    plugins: [
      nodeResolve({ browser: true }),
      babel({ plugins: [linkerPlugin] }),
      prod &&
        terser({
          format: {
            ecma,
            comments: /esm-bundle/,
          },
          compress: {
            global_defs: {
              ngJitMode: false,
              ngDevMode: false,
              ngI18nClosureMode: false,
            },
          },
        }),
    ],
    external: [
      "rxjs",
      "rxjs/operators",
      "rxjs/webSocket",
      "@angular/core",
      "@angular/common",
      "@angular/router",
      "@angular/forms",
      "@ngxs/store",
      "@ngxs/store/internals",
    ],
  };
}
