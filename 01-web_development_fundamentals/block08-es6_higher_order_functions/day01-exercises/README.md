# 8.1. Intro to Higher Order Functions

## First-Class Functions

Functions that are **re-used** in many other **functions or variables.**

```jsx
const sum = (a, b) => a + b;

const mySum = sum(4, 1);

/* sum() is a first-class function */
```

## Higher Order Functions

Functions that use as a **parameter or return** other **functions**.

```jsx
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('User registered successfully!');
};

button.addEventListener('click', registerUser);

/* addEventListener() is a HOF */
```