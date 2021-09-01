# 7.3. Unitary Tests

# Summary

Unitary tests are made to make sure that a software or script is working properly. A sequence of tests that the program must pass before going to production.

There are 3 dimensions in which the code needs to be evaluated:

- **Trustability**

    The system is resistant to failures during execution.

- **Functionality**

    The code works as it is supposed to. Results match.

- **Performance**

    Adequate response time, even in high load.

# Node.js Assert

Assert is a Node.js module that works as an unitary test tool to check results and point possible errors.

```jsx
const assert = require('assert');

assert.strictEqual('foo', 'foo') // True | No return
assert.strictEqual('foo', 'bar') // False | AssertionError

/* Syntax */
assert.strictEqual([expression]*, [expectedResult]*, [errMessage]) // Compare content & typeof
assert.equal(...) // Compare only content
```

# Test Driven Development

TDD is a development methodology that can favor **productivity** in certain cases. **It is not a consensus in the dev community.**

 ****

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a8d0595-87ee-4c84-a94a-9ca3f61fde39/Untitled.png)

Divide the tests in **small** pieces of code, functions for example. Create the tests separately for  **each functionality**.

1. Create a test case that **will fail.**
2. Make the test case **work**.
3. Refactor code to become **readable**.

# Throw

Errors can be **thrown** as a solution to any **input errors** to the code.

```jsx
const assert = require('assert');

const sum = (num1, num2) => {
	if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
		**throw new Error('Sum: Do not use strings as parameters.')**
	}
	return num1 + num2
}

assert.throws(() => {
	[functionName]([params])
})
```
