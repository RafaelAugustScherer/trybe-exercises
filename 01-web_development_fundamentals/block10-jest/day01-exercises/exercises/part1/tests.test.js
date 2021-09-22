const sum = require('./ex1');
const myRemove = require('./ex2');
const myRemoveWithoutCopy = require('./ex3');
const myFizzBuzz = require('./ex4');
const [obj1, obj2, obj3] = require('./ex5');

describe('Parte I', () => {
    test('Exercício 1', () => {
        expect(sum(4, 5)).toEqual(9);
        expect(sum(0, 0)).toEqual(0);
        expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
    });

    test('Exercício 2', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

    test('Exercício 3', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

    test('Exercício 4', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
        expect(myFizzBuzz(6)).toEqual('fizz');
        expect(myFizzBuzz(10)).toEqual('buzz');
        expect(myFizzBuzz(11)).toEqual(11);
        expect(myFizzBuzz('15')).toEqual(false);
    })
    
    test('Exercício 5', () => {
        expect(obj1).toEqual(obj2);
        expect(obj1).not.toEqual(obj3);
        expect(obj2).not.toEqual(obj3);
    })
});