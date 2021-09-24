const mathy = require('./mathy');
jest.mock('./mathy');

describe('Exercise 2', () => {
  test('Test getRandomNumber', () => {
    
    mathy.getRandomNumber.mockImplementation((a, b) => a / b);

    expect(mathy.getRandomNumber(4, 2)).toBe(2);
    expect(mathy.getRandomNumber).toHaveBeenCalled();
    expect(mathy.getRandomNumber).toHaveBeenCalledTimes(1);
  });
});
