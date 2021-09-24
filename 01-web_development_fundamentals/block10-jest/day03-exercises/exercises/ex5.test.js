const mathy = require('./mathy');
jest.mock('./mathy');

describe('Exercise 5', () => {
    const upperCaseIt = mathy.upperCaseIt;

    afterEach(() => upperCaseIt.mockReset());

    test('Artificial Test upperCaseIt', () => {
        upperCaseIt.mockImplementation((str) => str.toLowerCase());
        
        expect(upperCaseIt('Foo Bar')).toBe('foo bar');
        expect(upperCaseIt).toHaveBeenCalled();
        expect(upperCaseIt).toHaveBeenCalledTimes(1);
    });
    
    

    test('Original Test upperCaseIt', () => {
        upperCaseIt.mockImplementation((str) => str.toUpperCase());
        expect(upperCaseIt('Foo Bar')).toBe('FOO BAR');
        expect(upperCaseIt).toHaveBeenCalled();
        expect(upperCaseIt).toHaveBeenCalledTimes(1);
    })
});