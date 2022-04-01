import { execSync } from "child_process";

[
  "@ngxs/store",
  "@ngxs/router-plugin",
  "@ngxs/storage-plugin",
  "@ngxs/form-plugin",
  "@ngxs/devtools-plugin",
  "@ngxs/logger-plugin",
].forEach((target) => {
  console.log(
    execSync(
      `pnpm run ngcc -- --target ${target} --properties es2015`
    ).toString()
  );
});
