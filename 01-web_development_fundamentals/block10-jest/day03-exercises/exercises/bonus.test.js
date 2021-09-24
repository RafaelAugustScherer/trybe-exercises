const bonus = require('./bonus');

describe('Bonus Exercise', () => {
  const fetchJoke = jest.spyOn(bonus, 'fetchJoke');

  const expectedResult = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  test('Test fetchJoke', async () => {
    fetchJoke.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(expectedResult),
      })
    );

    fetchJoke()
      .then((result) => result.json())
      .then((response) => expect(response).toEqual(expectedResult));
  });
});
