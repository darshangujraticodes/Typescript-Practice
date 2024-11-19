# What is TypeScript ?

1. Typescript is built on top of Javascript therefore it is also called Superset of JS
2. Core purpose to create typescript as to maintain type safety in enterprise application.
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

### TypeScript TSConfig File

1. It is consist bunch of rules which typescript compiler follower while executing tsc code.
2. TsConfig file has multiple protocols
   a. compiler options - which define use of which js version, targeting js version, access lib
   b. Bundler mode - which defines protocols and rules eg noEmitOnError it will not generate js code if tsc file has error tsc will not generate js code.
   c. Linting - it is use to debug error in code most usefule option is ` "strict" : true` to bind code to follow defined methods of coding.
3.
