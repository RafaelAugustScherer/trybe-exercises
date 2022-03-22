# Block 26 - TypeScript

# Definition

TypeScript is a programming language created by Microsoft based in ECMAScript 2015, also known as JavaScript ES6.

The main reason behind the creation of this language is Typing, as in defining variable, module, expression types.

- **TypeScript uses Static Typing:** The variable type cannot be changed during execution.
Ex: you cannot reassign a variable to a different type
- **TypeScript uses Strong Typing:** The language will not convert types conventionally
Ex: 0 ≠ false & 1 ≠ true

# TypeScript Compiler - TSC

```bash
npm install -g typescript # Global installation
npm install -D typescript # Project dependency (Recommended)
```

**TSC** is a Compiler that works with TypeScript files and configs. ****

## Convert .ts to .js (Run in node)

```bash
npx tsc fileName.ts # Will create fileName.js
```

## Initialize a Project

```bash
npm init -y
npm install -D typescript
npm install -D @tsconfig/node14 # Node compatibilty
npm install -D @types/node # JavaScript cmds compatibility (console.log(), etc)

npx tsc --init # Will create a tsconfig.json
```

```json
// ./tsconfig.json
{
  "extends": "@tsconfig/node14/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### When the project is ready

```bash
npx tsc # Convert every .ts file in .js and send it to /dist
node ./dist/index.js # Execute with node Transpiler
```

# Types

Every type in TypeScript is a Sub-type of `any`.

## Primitive Types

- **boolean**
    
    Values: `true` or `false`;
    
    Ex: `let yes: boolean = true;`
    
- **number**
    
    Values: `0, 1, 2, ...` or `1.23, 50.652`;
    
    Ex: `let x: number = 50;`
    
- **string**
    
    Values: `“foo”` or `‘bar’`;
    
    Ex: `let x: string = "Johnny";`
    
- **void**
    
    When to use: functions that **do not** **return;**
    
    Ex: `function logSomething(): void { console.log('Something') };`
    

> If we don’t specify “`: [type]`”, the Compiler will automatically assign a type based on the initial value.
> 

## Parameter Types

- **null & undefined**
    
    Subtypes of every other value**;**
    
    Ex: `let nullValue = null;`
    

## Enum

This primitive type is not present in JavaScript, so there is going to be a brief explanation here!

Code example:

```tsx
enum Numbers {
	zero, // Default: 0
	one, // Default: 1
	two, // Default: 2
}
console.log(Numbers[zero]) // 0
console.log(Numbers[0]) // zero

enum StatusCodes {
	OK = 200,
	BAD_REQUEST = 400,
	UNAUTHORIZED,
}
console.log(StatusCodes.OK) // 200

const newStatusCode: StatusCodes = StatusCodes.UNAUTHORIZED;
console.log(newStatusCode) // 401

function calcRequest(
	firstCode: keyof typeof StatusCodes,
	secondCode: keyof typeof StatusCodes
) {
	return StatusCodes[firstCode] + StatusCodes[secondCode]
}
```

Enum is basically a list of values. By default they start at zero (0) and the next number is always `previous + 1`.

You can assign custom values for these numbers or even change the values to string.

## Playground

To test all these methods and play with TypeScript code, you can access [Microsoft’s TypeScript Playground](https://www.typescriptlang.org/play)