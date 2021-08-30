# Var, Let & Const

What changes is the scope in which the variable can be reached, and if it is constant (cannot be reassigned.

- `var name = 'Joe'`

  Can be reached out of an `if` or `for` scope if declared inside;

  Cannot be reached out of a `function`;

  Can be reassigned;

  Can be **hoisted**: Assign value before declaration.

- `let name = 'Joe'`

  Can only be reached inside its declared scope;

  **Can** be reassigned;

  Cannot be hoisted.

- `const name = 'Joe'`

  Can only be reached inside its declared scope;

  **Cannot** be reassigned;

  **Can** have its attributes reassigned though. **Ex:** `obj.key = differentValue`;

  Cannot be hoisted.

## Where to use?

Use only **let** or **const** whenever possible. Initialize it as a `const` and if a reassignment is needed further on, change it to a `let`.

---

# Template Literals

**This:**

```jsx
var name = 'Joe';
const welcome = 'Welcome ' + name + '!'; // Concatenation
```

**Is now This:**

```jsx
const name = 'Joe';
const welcome = `Welcome ${name}!`; // Interpolation
```

## Syntax

```jsx
`` // Any String
${} // Any JS Code to interpolate
; // Break line
const foo = `Any string text; ${1 + 1}; ${2 + 2}`;
```

---

# Arrow Functions

**This:**

```jsx
function welcome(name) {
  var message = 'Welcome ' + name + '!';
  return message;
}
```

**Is now This:**

```jsx
const welcome = (name) => {
  const message = `Welcome ${name}!`;
  return message;
};
```

## Syntax

```jsx
/* Multiple parameters and lines function */
const [funcName] = ([param1], [param2], ...) => {
	// Function code
}

/* Single parameter and multiple lines function */
const [funcName] = [param] => {
	// Function code
}

/* Single parameter and line function */
**co**nst [funcName] = [param] => // Function code  + auto return

/* No parameter function */
**co**nst [funcName] = () => // Function code + auto return
```

---

Doesn't work properly as an **object function.**
function( ) { }: `*this*` = `Object { }`
( ) ⇒ { }: `*this*` = `Window( )`

# Ternary Operator

**This:**

```jsx
var name = 'Joe';

if (name === 'Joe') {
  // Do something
} else {
  // Do something else
}
```

**Is now This:**

```jsx
const name = 'Joe'

name === 'Joe' ? /* Do something */ : /* Do something else */
```

## Syntax

```jsx
[expression] || [question] ? [true] : [false];
```

The ternary operator is very useful for a simple statement. If it takes 2 or more lines for a single operation, it becomes harder to read and therefore it's better to stick with the old, generic (but reliable) `if / else` statement.
