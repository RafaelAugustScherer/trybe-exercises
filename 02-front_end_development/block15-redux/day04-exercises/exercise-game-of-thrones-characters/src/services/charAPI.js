const APIURL = 'https://anapioficeandfire.com/api/characters?name='

const charAPI = (char) => (
  fetch(`${APIURL}${char.replace(' ', '%20')}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default charAPI;
