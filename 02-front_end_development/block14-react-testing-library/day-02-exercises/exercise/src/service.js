const generateRandomNumber = () => 
  Math.floor(Math.random() * 100);

const upperCaseIt = (string) => string.toUpperCase();

const firstLetterIt = (string) => string[0];

const concatenateIt = (stringA, stringB) => stringA.concat(stringB);

const requestDogPicture = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then(({ json }) => json()).then((dogObj) => dogObj);

const service = { generateRandomNumber, upperCaseIt, firstLetterIt, concatenateIt, requestDogPicture }
export default service;