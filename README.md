# Advanced Dynamic Filter TypeScript Client

This is a client library to build dynamic filter at client side and send it to server side to be executed and get results back.

[![npm package](https://img.shields.io/badge/npm%20i-example--typescript--package-brightgreen)](https://www.npmjs.com/package/dynamic-filter) [![version number](https://img.shields.io/npm/v/dynamic-filter?color=green&label=version)](https://github.com/Henka-Programmer/dynamic-filter/releases) [![Actions Status](https://github.com/tomchen/advanced-dynamic-filter/workflows/Test/badge.svg)](https://github.com/Henka-Programmer/advanced-dynamic-filter/actions) [![License](https://img.shields.io/github/license/Henka-Programmer/advanced-dynamic-filter)](https://github.com/Henka-Programmer/advanced-dynamic-filter/blob/main/LICENSE)

It uses npm, TypeScript compiler, Jest, webpack, husky, pinst, commitlint. The production files include CommonJS, ES Modules, UMD version and TypeScript declaration files.

## Development

This will create a symbolic link from globally-installed example-typescript-package to **node_modules/** of the current folder.

You can then create a, for example, **testdomain.ts** file with the content:

```ts
import { Domain } from 'dynamic-filter'
const domain: Domain = ['&', ['firstName', '=', 'ahmed'], ['Age', '>', 30]];
const json: string = toJson(domain);
console.log(json);
```

If you don't see any linting errors in VS Code, if you put your mouse cursor over `Domain` and see its type, then it's all good.

```bash
npm uninstall example-typescript-package -g
```
