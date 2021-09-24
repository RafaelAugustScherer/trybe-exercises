const mathy = require('./mathy');

describe('Exercise 6', () => {
    const fetchDogPictures = jest.spyOn(mathy, 'fetchDogPictures');

    test('Test fetchDogPictures Success', () => {
        fetchDogPictures.mockResolvedValue('request success');

        expect(fetchDogPictures()).resolves.toBe('request success')
    });

    test('Test fetchDogPictures Success', () => {
        fetchDogPictures.mockRejectedValue('request failed');

        expect(fetchDogPictures()).rejects.toBe('request failed')
    });
});