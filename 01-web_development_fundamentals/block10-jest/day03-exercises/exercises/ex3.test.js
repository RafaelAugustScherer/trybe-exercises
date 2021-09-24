const mathy = require('./mathy');
jest.mock('./mathy');

describe('Exercise 3', () => {
  afterEach(() => mathy.getRandomNumber.mockReset());
  
  test('Test getRandomNumber - mockImplementation 1', () => {
    mathy.getRandomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(mathy.getRandomNumber(4, 2, 1)).toBe(8);
    expect(mathy.getRandomNumber).toHaveBeenCalled();
    expect(mathy.getRandomNumber).toHaveBeenCalledTimes(1);
  });

  test('Test getRandomNumber - mockImplementation 1', () => {
    mathy.getRandomNumber.mockImplementation((a) => a * 2);

    expect(mathy.getRandomNumber(4)).toBe(8);
    expect(mathy.getRandomNumber).toHaveBeenCalled();
    expect(mathy.getRandomNumber).toHaveBeenCalledTimes(1);
  });
});
