# 8.5. Spread Op, Rest Params, Destructuring and More

## Spread Operator

Spread **array and object** values.

Take this example. Works the same way  as `.push`, but it **does not override** the original array:

```jsx
const arr = [1, 2, 4];

/* Old */
arr.push(3) // [1, 2, 4, 3];

/* New */
const anotherArr = [...arr, 3]; // [1, 2, 4, 3]

/* Combine Arrays */
const combination = [...arr, ...anotherArr]; // [1, 2, 4, 3, 1, 2, 4, 3]
```

## Rest Parameters

Store multiple **function parameters** in one array!

```jsx
const val1 = 2;
const val2 = 3;
const val3 = 5;

/* Old */
// const sum = (num1, num2, num3) => num1 + num2 + num3; // 10
// sum(val1, val2, val3);

/* New */
const sum = (**...nums**) => nums.reduce((acc, cur) => acc + cur); // 10
sum(val1, val2, val3);
```

## Object Destructuring

**Extract object variables** to other **separated** variables

```jsx
const obj = {
name: 'Ada'
surname: 'Lovelace'
}

/* Old */
console.log(obj.name, obj.surname); // Ada Lovelace

/* New */
const {name, surname} = obj;
console.log(name, surname); // Ada Lovelace
```

Also to assign these variables to **custom names**, do the following:

```jsx
const {name: **legen**, surname: **dary**} = obj;

console.log(legen, dary); // Ada Lovelace
```

## Array Destructuring

Works the **same way as Object Destructuring** (in the end, an array is an object as well). **But** there is a key difference, you can use **custom names** right away!

```jsx
const arr = ['Ada', 'Lovelace']

/* Old */
const legen = arr[0];
const dary = arr[1];
console.log(arr[0], arr[1]); // Ada Lovelace

/* New */
const [legen, dary] = arr;
console.log(legen, dary); // Ada Lovelace
```

> Object and Array Destructuring have a special character that is used to **skip elements**. '**,**'

```jsx
const arr = [1, 2, 4, 5]
[,, ...arr] = arr // arr = [4, 5]
```

## Default Destructuring

When there is no value present in the object with that name you can specify its value. Ex:

```jsx
const obj = {
name: 'Ada'
surname: 'Lovelace'
}

[name, hometown] = obj // hometown = undefined
[name, hometown = 'London'] = obj; // hometown = London
```

## Shorthand

**Eliminate** the need to **repeat** variable names in **return** statement.

```jsx
const legen = 'Ada';
const dary = 'Lovelace';

/* Old */
let createPersonObj = (name, surname) => { name: name, surname: surname };

/* New */
createPersonObj = name, surname) => { name, surname };
createPersonObj(legen, dary) // {'Ada', 'Lovelace'}
```

## Default Parameters

Define **default** parameters for functions in case those parameters are **not defined** in the **function call.**

```jsx
/* Old */
const greeting = (user) => {
	if (user === 'undefined') user = 'Ada Lovelace';
	console.log(`Welcome ${user}!`;
});
greeting(); // Welcome Ada Lovelace!

/* New */
const greeting = (user = 'Ada Lovelace') => console.log(`Welcome ${user}!`);

greeting(); // Welcome Ada Lovelace!
```