# Dynamic Filter TypeScript Client

This is a client library to build dynamic filter at client side and send it to server side to be executed and get results back.

[![npm package](https://img.shields.io/badge/npm%20i-example--typescript--package-brightgreen)](https://www.npmjs.com/package/example-typescript-package) [![version number](https://img.shields.io/npm/v/example-typescript-package?color=green&label=version)](https://github.com/Henka-Programmer/dynamic-filter/releases) [![Actions Status](https://github.com/tomchen/example-typescript-package/workflows/Test/badge.svg)](https://github.com/Henka-Programmer/dynamic-filter/actions) [![License](https://img.shields.io/github/license/tomchen/example-typescript-package)](https://github.com/Henka-Programmer/dynamic-filter/blob/main/LICENSE)

It uses npm, TypeScript compiler, Jest, webpack, husky, pinst, commitlint. The production files include CommonJS, ES Modules, UMD version and TypeScript declaration files.

## Development

This will create a symbolic link from globally-installed example-typescript-package to **node_modules/** of the current folder.

You can then create a, for example, **testnum.ts** file with the content:

```ts
import { Num } from 'example-typescript-package'
console.log(new Num(5).add(new Num(6)).val() === 11)
```

If you don't see any linting errors in VS Code, if you put your mouse cursor over `Num` and see its type, then it's all good.

Whenever you want to uninstall the globally-installed example-typescript-package and remove the symlink in the global folder, run:

```bash
npm uninstall example-typescript-package -g
```