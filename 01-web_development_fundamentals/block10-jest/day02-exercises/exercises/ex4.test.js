const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Exercise 4', () => {
  test('Check if project sd-01-week4-5-project-todo-list existe em tryber/repos', async () => {
    expect(await getRepos('https://api.github.com/orgs/tryber/repos')).toContain(
      'sd-01-week4-5-project-todo-list'
    );
  });

  test('Check if project sd-01-week4-5-project-meme-generator existe em tryber/repos', async () => {
    expect(await getRepos('https://api.github.com/orgs/tryber/repos')).toContain(
      'sd-01-week4-5-project-meme-generator'
    );
  });
});
