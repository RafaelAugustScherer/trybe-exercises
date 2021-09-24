const mathy = require('./mathy');
jest.mock('./mathy');

describe('Exercise 4', () => {

    test('Artificial Test upperCaseIt', () => {
        mathy.upperCaseIt.mockImplementation((str) => str.toLowerCase());
        
        expect(mathy.upperCaseIt('Foo Bar')).toBe('foo bar');
        expect(mathy.upperCaseIt).toHaveBeenCalled();
        expect(mathy.upperCaseIt).toHaveBeenCalledTimes(1);
    });

    test('Artificial Test firstCharOf', () => {
        mathy.firstCharOf.mockImplementation((str) => str[str.length - 1]);

        expect(mathy.firstCharOf('Foo Bar')).toBe('r');
        expect(mathy.firstCharOf).toHaveBeenCalled();
        expect(mathy.firstCharOf).toHaveBeenCalledTimes(1);
    });

    test('Artificial Test concatIt', () => {
        mathy.concatIt.mockImplementation((a, b, c) => a + b + c);

        expect(mathy.concatIt('Foo', 'Bar', 'Ipsum')).toBe('FooBarIpsum');
        expect(mathy.concatIt).toHaveBeenCalled();
        expect(mathy.concatIt).toHaveBeenCalledTimes(1);
    });
});