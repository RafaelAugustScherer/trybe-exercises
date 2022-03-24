# Block 26 - TypeScript

<details>
<summary>Introduction - Project & Primitive Types</summary>

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
</details>

<details>
<summary>Static Typing & Generics</summary>
# Objects / Collections

- **arrays**
    
    Values: `[0, 1, 2]` or `["str", "rts", "rst"]`;
    
    Ex: `let names: string[] = ["Alice", "Bob"]`;
    
- **tuples**
    
    Values: `[0, "one", 2]` or `["str", 123, "rst"]`;
    
    Ex: `let names: [string, number, string] = ["Alice", 1.23, "Bob"]`;
    
- **types**
    
    Example:
    
    ```tsx
    type Axis {
    	x: number;
    	y: number;
    }
    const coordinates: Axis = { x: 75, y: 100 };
    
    type
    ```
    

## Type Unions

Define two or more types that a parameter can possibly receive:

```tsx
function echo(value: **number | string**){
  console.log(value);
}
```

## Class

Classes in TypeScript work similarly to JS or other languages classes:

```tsx
enum Proficiency {
	Charismatic,
	Proactive,
	Energic,
}

class Person {
	name: string;
	age: number;
	proficiency: Proficiency

	constructor(name: string, age: number, proficiency?: Proficiency) { // ? = can be undefined (optional)
		this.name = name;
		this.age = age;
		this.proficiency = proficiency;
	}

	happyBirthday(): void {
		this.age += 1;
    console.log(`Happy birthday ${this.name}! You are now ${this.age} years old.`)
	}
}

const me = new Person('Rafael', 18, Proficiency.Proactive);
me.happyBirthday(); // Happy birthday Rafael! You are now 19 years old.
```

## Interface

An `interface` works just like a contract. It is a specification for an object, how the object should be used.

Different from classes, interfaces do not have constructors, they need to be manually built. Their methods are also not pre-defined.

```tsx
interface Employee {
	firstName: string;
	lastName: string;
	func(): string;
}

let robert: Employee = {
	firstName: 'Robert',
	lastName: 'James',
	func(): string { return this.firstName + " " + this.lastName }
}
```

### Extends

One `interface` can extend from another, “import” fields from another interface

```tsx
interface Person {
	firstName: string,
	lastName: string,
}

interface Employee extends Person {
	// firstName: string
	// lastName; string
	yearsInCompany: number
}
```

# Generics

If you just want to make sure that the types are similar. Doesn’t matter if it’s a string, number, etc. Then you can use Generics!

```tsx
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
const numbers = getArray<number>([5, 10, 15]); // String would be invalid

// T is a generic. Can be any letter though, T is just conventional
```

In this case:

- items → Need to be array of type T
- return → Need to be array of type T

## Class + Generics

```tsx
class ProcessIdentity<T, U> {
    value: T;
    message: U;
    constructor(value: T, message: U) {
        this.value = value;
        this.message = message;
    }
    getIdentity() : T {
        console.log(this.message);
        return this.value;
    }
}

let processor = new ProcessIdentity<number, string>(100, "Hello");
processor.getIdentity();  // Logs: "Hello" & returns 100;
```
</details>

<details>
<summary>MySQL Operations</summary>
## connection.ts - Same as JS

```tsx
import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});
```

## Connection.execute - Examples

### Read Data (Same as JS)

```tsx
import connection  from './models/connection';

const main = async () => {
  const result = await connection.execute('SELECT * FROM books');
  const [rows] = result;
  console.log(rows);
}
main();
```

### Insert Data

If we don’t use `<ResultSetHeader>`, TypeScript will not know that the property insertId exists in dataInserted, and therefore will throw an error.

```tsx
// npm i readline-sync @types/readline-sync
import readline from 'readline-sync';
import { ResultSetHeader } from "mysql2";
import connection from './models/connection';

const main = async ({ title, author }) => {
  const result = await connection.execute**<ResultSetHeader>**(
    'INSERT INTO books (title, author) VALUES (?, ?)',
    [title, author]
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  console.log(insertId);
}
main();
```

## DB Model as a TypeScript Class

```tsx
// models/Book.ts
import { Pool, ResultSetHeader } from "mysql2/promise";

export interface Book {
	id?: number,
	title: string,
	author: string,
}

export default class BookModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];
  }

	public async create(book: Book): Promise<Book> {
    const { title, author } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, author) VALUES (?, ?)',
      [title, author]
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}

//controllers/Book.ts
import BookModel from "./models/Book";
import connection  from "./models/connection";

const getAll = async (req, res) => {
  const bookModel = new BookModel(connection);

  const books = await bookModel.getAll();
  return res.status(200).json(books);
}

const create = async (req, res) => {
	const newBook: Book = { ...req.book };
	const createBook = await BookModel.create(newBook);
	
	return res.status(201).end();
}

export {
	getAll,
	create,
}
```
</details>