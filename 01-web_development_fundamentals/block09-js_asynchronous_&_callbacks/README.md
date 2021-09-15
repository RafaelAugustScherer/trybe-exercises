# 9.1 Asynchronicity & Callbacks

## Asynchronous Operations

Asynchronous operations can happen **while other operations are running too**. It basically tells to the Code Runner that **it is ok to proceed with the code,** even if the operations has not finished yet. **Ex:**

```jsx
let numbers = [];

setTimeout(() => numbers.push(1), 3000); // Asynchronous proccess
numbers.push(2);
numbers.push(3);

// numbers = [2, 3, 1]
```

## Callbacks

Callbacks are functions that are used within functions to do something. Ex:

```jsx
const sumProperties = (properties) =>
	Object.values(properties).reduce((acc, value) => acc + value , 0) 

const calculatePatrimony = (money, properties, callback) => {
	const totalProperties = callback(properties);
	const total = money + totalProperties;

	console.log(`Patrimony Calculator:
		Money: ${money}
		Properties: ${totalProperties}
		Total: ${total}`);
};

const money = 5000;
const properties = {
    car: 25000,
    house: 100000,
    smartphone: 500,
};
calculatePatrimony(money, properties, sumProperties);
```

> **Callbacks** can also be used as the **end result** of the HoF that receives it. Returning the **final value** or **Throwing an error.**