# 9.2. Promises

## Summary

Promises are generally used as responses given from API (Application Programming Interface) requests. They are always **asynchronous,** and they also contain 3 Stages: **Pending, Fulfilled & Rejected**.

```jsx
const promise = new Promise((resolve, reject) => {
	// Do something
	// Resolve is used when the request was successful
	// Reject is used when the request was unsucessful
});
```

## Early Return

Early returns avoid the Promise to continue its function execution. Just using **reject | resolve** will not stop it. Ex:

```jsx
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number < 5) {
    **return** reject(console.log(`Error! ${number}`)); // Will **stop** right here if fail
  }
  resolve(console.log(`Success ${number}`)); // No need for **else**
});
```

## Chaining

Chaining the code using `.then( )` | `.catch( )` will do an appropriate treatment of the data.

```jsx
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number < 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Success! ${number}`) // Whenever resolve is activated
.then(msg => console.log(msg))
.catch(number => console.log(`Error! ${number}`)); // Whenever reject is activated
```

## Async / Await

Say what if you want to require something to an API and you want to return that as a console.log( ). You cannot do that immediatly because the Promise status is **Pending.**

To resolve this problem there are 2 methods greatly used just for that purpose:

```jsx
const fetch = require('node-fetch'); // npm -i node-fetch

// Will return a Joke on success or Throw an error on fail
**async** function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint does not exist');
}

**async** function sendJokeToFriend(name) {
  const message = **await** verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Whatup ${name}, here's a funny story: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");
```

> **await**: Used whenever we want to wait for the actual Promise value to be returned
> **async**: Used in every function that contains **asynchronous** code inside