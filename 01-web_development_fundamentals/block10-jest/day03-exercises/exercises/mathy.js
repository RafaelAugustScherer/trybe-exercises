const fetch = require('node-fetch');

const getRandomNumber = () => Math.floor(Math.random() * 101);

const upperCaseIt = (str) => str.toUpperCase();

const firstCharOf = (str) => str[0];

const concatIt = (a, b) => a + b;

const fetchDogPictures = () =>
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((result) => result);

module.exports = { getRandomNumber, upperCaseIt, firstCharOf, concatIt, fetchDogPictures };
