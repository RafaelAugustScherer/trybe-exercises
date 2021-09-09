# 8.4. reduce

## Summary

Reduce is a HoF (Higher Order Function). It receives a `function` as parameter. Its inner function receive 4 parameters: **accumulator, element, elementIndex, array.** 

It can also receive an  optional **second parameter**, which is going to be assigned as the **result** value in the first iteration. Example:

```jsx
const arr = ['foo', 'bar'];

arr.reduce((accumulator, element) => /* Do something */ )
arr.reduce((accumulator, element) => { /* Do something */ }, secondParam) 
```

## reduce

### Iterate over every element in array, and return an operation made over every iteration.

```jsx
const arr = [1, 3, 4, 6]

/* Old */
let sum = 0
for (let idx = 0; idx < arr.length; idx += 1) {
	sum += arr[idx];
}
console.log(sum) // 14

/* New */
sum = arr.reduce((result, number) => result + number);
console.log(sum) // 14

// result = Value returned over each iteration | Starts as arr[0];
// number = Each number in array arr | Starts as arr[1]
```

### Transform an **array with objects** into a **single object**

```jsx
const values = [
{ firstName: 'foo', surName: 'bar' },
{ firstName: 'Ada', surName: 'Lovelace' },
]

values.reduce((result, curr) => {
	result[curr.firstName] = curr.surName;
	return result;
}, {})
// {'foo': 'bar'} | { 'Ada' : 'Lovelace' }
```