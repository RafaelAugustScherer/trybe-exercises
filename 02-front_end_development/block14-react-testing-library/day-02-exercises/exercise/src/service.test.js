import service from './service';

describe('Testing the function generateRandomNumber', () => {
  const mockedRandomNumber = jest.spyOn(service, 'generateRandomNumber');

  // 1
  test('Testing function call', () => {
    mockedRandomNumber();
    expect(mockedRandomNumber).toHaveBeenCalled();
  });

  test('Testing function result',  () => {
    mockedRandomNumber.mockReturnValueOnce(10);

    expect(mockedRandomNumber()).toBe(10);
  });

  test('Testing function number of calls', () => {
    mockedRandomNumber();
    mockedRandomNumber();
    expect(mockedRandomNumber).toHaveBeenCalledTimes(2);
  });

  // 2
  test('Division mock implementation', () => {
    mockedRandomNumber.mockImplementationOnce((a, b) => a / b);
    
    expect(mockedRandomNumber(4, 2)).toBe(2);
    expect(mockedRandomNumber).toHaveBeenCalled();
    expect(mockedRandomNumber()).toBe(undefined);
  });

  // 3
  test('Multiplication mock implementation', () => {
    mockedRandomNumber.mockImplementation((a, b, c) => a * b * c);
    expect(mockedRandomNumber(4, 2, 1)).toBe(8);
    expect(mockedRandomNumber).toHaveBeenCalled();
    expect(typeof mockedRandomNumber(4, 2, 1)).toBe('number');

    mockedRandomNumber.mockImplementation((a) => a * 2);
    expect(mockedRandomNumber(4)).toBe(8);
    expect(mockedRandomNumber).toHaveBeenCalled();
    expect(typeof mockedRandomNumber(4)).toBe('number');
  });

  // 4
  describe('Testing the function upperCaseIt', () => {
    const mockedUpperCase = jest.spyOn(service, 'upperCaseIt');

    afterEach(() => {
      mockedUpperCase.mockRestore();
    })

    test('Testing lowerCaseIt', () => {
      mockedUpperCase.mockImplementation((string) => string.toLowerCase());
      expect(mockedUpperCase('FOO BAR')).toBe('foo bar');
      expect(mockedUpperCase).toHaveBeenCalled();
    });

    test('Testing upperCaseIt', () => {
      mockedUpperCase.mockImplementation((string) => string.toLowerCase());
      expect(mockedUpperCase('FOO BAR')).toBe('foo bar');
      expect(mockedUpperCase).toHaveBeenCalled();
    });
  });

  describe('Testing the function firstLetterIt', () => {
    const mockedfirstLetter = jest.spyOn(service, 'firstLetterIt');

    afterEach(() => {
      mockedfirstLetter.mockRestore();
    })

    test('Testing lastLetterIt', () => {
      mockedfirstLetter.mockImplementation((string) => string[string.length - 1]);
      expect(mockedfirstLetter('foo bar')).toBe('r');
      expect(mockedfirstLetter).toHaveBeenCalled();
    })

    test('Testing firstLetterIt', () => {
      mockedfirstLetter.mockImplementation((string) => string[0]);

      expect(mockedfirstLetter('foo bar')).toBe('f');
      expect(mockedfirstLetter).toHaveBeenCalled();
    });
  });

  describe('Testing the function concatenateIt', () => {
    const mockedConcatenate = jest.spyOn(service, 'concatenateIt');

    afterEach(() => {
      mockedConcatenate.mockRestore();
    })

    test('Testing concatenateItPlus', () => {
      mockedConcatenate.mockImplementation((stringA, stringB, stringC) => (stringA + stringB + stringC));
      expect(mockedConcatenate('ab', 'cd', 'ef')).toBe('abcdef');
      expect(mockedConcatenate).toHaveBeenCalled();
    });

    test('Testing concatenateIt', () => {
      mockedConcatenate.mockImplementation((stringA, stringB) => (stringA + stringB));
      expect(mockedConcatenate('ab', 'cd')).toBe('abcd');
      expect(mockedConcatenate).toHaveBeenCalled();
    });
  });
})