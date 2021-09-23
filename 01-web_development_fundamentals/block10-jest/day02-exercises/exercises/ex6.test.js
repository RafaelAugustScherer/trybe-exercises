const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => Animals.find((animal) => animal.name === name);

const findAnimalByAge = (age) => Animals.find((animal) => animal.age === age);

const getAnimal = (name = null, age = null) =>
  new Promise((resolve, reject) => {
    const animalObj = name ? findAnimalByName(name) : age ? findAnimalByAge(age) : null;

    animalObj ? resolve(animalObj) : reject('No animal found with the provided informations!');
  });

// ---------------------
describe('Exercise 6.1.', () => {
  describe('getAnimal - Test Return Value By Name', () => {
    test('Return the animal object', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });

    describe('getAnimal - Test Error Message', () => {
      test('Return the error', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch((error) =>
          expect(error).toEqual('No animal found with the provided informations!')
        );
      });
    });
  });
});

describe('Exercise 6.2.', () => {
  describe('getAnimal - Test Return Value By Age', () => {
    test('Return the animal object', () => {
      expect.assertions(1);
      return getAnimal(null, 2).then((animal) => {
        expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
      });
    });
  });

  describe('getAnimal - Test Error Message', () => {
    test('Return the error', () => {
      expect.assertions(1);
      return getAnimal(null, 4).catch((error) =>
        expect(error).toEqual('No animal found with the provided informations!')
      );
    });
  });
});
