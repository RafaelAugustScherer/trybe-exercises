const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

describe('Exercise 1', () => {
  test('Check uppercase function return', (done) => {
    uppercase('Lorem Ipsum', (data) => {
      expect(data).toBe('LOREM IPSUM');
      done();
    });
  })
});