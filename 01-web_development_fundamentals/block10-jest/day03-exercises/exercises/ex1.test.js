let getRandomNumber = require('./mathy').getRandomNumber;

describe('Exercise 1', () => {
  test('Test getRandomNumber', () => {
    getRandomNumber = jest.fn().mockReturnValue(10);

    expect(getRandomNumber()).toBe(10);
    expect(getRandomNumber).toHaveBeenCalled();
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });
});
