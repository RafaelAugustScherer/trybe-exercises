# 8.2. forEach, find, some, every, sort

## Summary

All of these functions are HoFs (Higher Order Functions). They receive `functions` as parameters. Their inner functions receive 3 parameters: **element, index, array.** Example:

```jsx
const arr = ['foo', 'bar'];

arr.HoFName((element, index, array) => // Do something)
```

## forEach

> The only difference between `for of` and `forEach`, is that `forEach` is executed inside a `function`, so there is a return associated to it. **It cannot return to an outer function if necessary.**

```jsx
const arr = ['foo', 'bar']

/* Old */
for (el of arr) {
	// Do something
}

/* New */
arr.forEach(el => {
	// Do something
})

/* Complete */
arr.forEach((el, idx, array) => {
	// Do something
})
```

## find - First Element with condition

```jsx
const arr = [1, 3, 4]
const divisibleByTwo = undefined;

/* Old */
for (let el of arr) {
	if (el % 2 === 0) {
		divisibleByTwo = el;
		break;
	}
}

/* New */
divisibleByTwo = arr.find((el) => el % 2 === 0) // 4
```

## some & every

```jsx
const arr = [1, 3, 4]
const isDivisibleByTwo = false;

/* Old */
for (let el of arr) {
	if (el % 2 === 0) {
		isDivisibleByTwo = true;
		break;
	}
}

/* New */
isDivisibleByTwo = arr.some((num) => num % 2 === 0); // True

/* Old All */
let count = 0;
for (let el of arr) {
	if (el % 2 === 0) {
		count += 1;
	}
}
if (count === arr.length) isDivisibleByTwo = true

/* New All */
arr.every((num) => num % 2 === 0); // False
```

## sort

```jsx
/* Works only for alphabetical order | Unicode */
const food = ['Fries', 'Burguer', 'Burguer King'];
food.sort();

console.log(food) // Burguer, Burguer King, Fries

/* To order numbers, do this */
const nums = [4, 1, 3];

nums.order((a, b) => a - b); // Asc: [1, 3, 4]
nums.order(a, b) => b - a); // Desc: [4, 3, 1]

```