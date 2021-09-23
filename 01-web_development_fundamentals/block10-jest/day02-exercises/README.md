# 10.2. Asynchronous Tests & Setup

Testing code asynchronously is **very common** when we consider **large scale** applications that include some kind of **API call** & / or **database requests**. Here we'll learn how to **handle** its tests.

## Callbacks

To test a **callback function**, we need to capture the callback result and `try` to verify if the **received value** is equal to the expected. We will also need to use the `done()` function, so that the code understands that the **async function is done**.

```jsx
// Return the Sum to the callback function in 500ms
const asyncSum = (a, b, callback) =>
  setTimeout(() => callback(a + b), 500);

// Test if the value returned to the callback is OK
test('Testing if asyncSum, sums 10 + 5', (done) => {
  asyncSum(10, 5, (result) => {
    try {
      expect(result).toEqual(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});
```

## Promises

Promises are **resolved** through the `.then()` function. Whenever a Promise is **done**, this function will be **triggered**, and the results can be validated.

```jsx
const Animals = [
  { name: 'Sleeper', age: 1, type: 'Dog' },
  { name: 'Napper', age: 2, type: 'Dog' },
  { name: 'Lazy', age: 5, type: 'Cat' },
];

// Will filter the animals by type and return them in an array in 100ms
const findAnimalsByType = (queryType) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredAnimals = Animals.filter(({ type }) => type === queryType);

      filteredAnimals.length > 0
        ? resolve(filteredAnimals)
        : reject(new Error("We don't have this type of animal."));
    }, 100);
  });

// Will test if the dogs are properly returned by name
describe('When the animal type exists', () => {
  test('Return the animal list', () =>
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Sleeper');
      expect(listDogs[1].name).toEqual('Napper');
    }));
});
```

Same works for the **reject** with the `.catch()` function:

```jsx
describe('When the animal type does not exists', () => {
  test('Return an error', () =>
    findAnimalsByType('Lion').catch((err) =>
      expect(err.message).toEqual("We don't have this type of animal.")
    ));
});
```

## Setup & Teardown

Setups are used to **prepare tests** before they happen (generally **retrieve data** that is used by the **tests**);

```jsx
// Setups & Teardowns will only be executed inside this describe
describe([sectionDescription], () => {
	beforeEach(() => {
		// **Setup:** Retrieve Data 
	});

	afterEach(() => {
		// **Teardown:** Reset Values
	});

	// Tests here
});
```

Teardowns are used to **reset modified data** through the tests (generally reset **values** that might have been changed in the **tests**);