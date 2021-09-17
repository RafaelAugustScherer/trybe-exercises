// apiScript.js   
const API_URL = 'https://icanhazdadjoke.com/';
const HTMLJokeElement = document.getElementById('jokeContainer');

const insertJoke = (element, joke) => {
  const p = document.createElement('p');
  p.innerText = joke;
  element.appendChild(p);
} 

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => insertJoke(HTMLJokeElement, data.joke));
};

window.onload = () => fetchJoke();