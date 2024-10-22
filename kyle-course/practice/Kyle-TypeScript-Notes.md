# What is TypeScript ?

1. Typescript is built on top of Javascript therefore it is also called Superset of JS
2. It is purpose created to maintian type safety in enterprise application.
3. Browser only undestand js so tsc code is transpiled in js and then it gets executed in browser.
4. It is Static type programming language help to prevent type error and follows restrictive and defined approach while creating enterprise application.
5. Angular by default uses typescript due to which it is restrictve with coding format.

## Why to use TypeScript ?

1. It help to detect bugs and help IDE for autocomplete functions guide

### typescript run commands

1. (linux, mac) -> `sudo npm install -g typescript` / (windows) -> `npm install -g typescript` [note -g denote global installation]
2. `tsc -v` (to know version)
3. tsc also create tscConfig file which has option to make your type code more secure in coding application -> (`npx tsc --init`) it will created tscConfig file for code execution with required confirgration.
4. To run typescript file `npx tsc filename.ts` this command will transpile ts code into js code but to restrict only valid get converted in to js code use this command while running file `npx tsc filename.ts --noEmitOnError`
5. You can create tsc file through multiple different types of bundler recommended is vite
