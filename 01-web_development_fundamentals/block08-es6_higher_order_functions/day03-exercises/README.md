# 8.3. map & filter

## Summary

All of these functions are HoFs (Higher Order Functions). They receive `functions` as parameters. Their inner functions receive 3 parameters: **element, index, array.** Example:

```jsx
const arr = ['foo', 'bar'];

arr.HoFName((element, index, array) => // Do something)
```

## filter

Return **ALL** elements in an **array** that are within a **condition**, determined by an **inner function.**

```jsx
const arr = [1, 3, 4, 6]
const divisibleByTwo = undefined;

// Return FIRST Element with condition
divisibleByTwo = arr.find((el) => el % 2 === 0); // 4

// Return ALL Elements with condition
divisibleByTwo = arr.filter((el) => el % 2 === 0); // [4, 6]
```

> Can be used to **remove** unwanted elements from array as well. Use condition: **Every element that does not satisfy condition**, and use the **returned array.**

## map

Return a **new array** made with elements returned by an **inner function**.

```jsx
const arr = [1, 3, 4, 6]
const divisibleByTwo = undefined;

// Return ALL Elements with condition
divisibleByTwo = arr.filter((el) => el % 2 === 0); // [4, 6]

// Return an array with elements + 1
const plusOne = arr.map((el) => el + 1); // [2, 4, 5, 7]
```