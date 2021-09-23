const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) =>
  new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);

    if (result) {
      return resolve(result);
    }

    return reject(new Error(`User with ${id} not found.`));
  });

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('Exercise 2', () => {
  test('Check getUserName function return', () => {
    getUserName(1).then((data) => expect(data).toBe('Mark'));
    getUserName(2).then((data) => expect(data).toBe('Paul'));
  });
  test('Check getUserName function error', () => {
    getUserName(3).catch((err) => expect(err.message).toBe('User with 3 not found.'));
    getUserName('Mark').catch((err) => expect(err.message).toBe('User with Mark not found.'));
  });
});

describe('Exercise 3', () => {
  test('Check getUserName function return', async () => {
    expect(await getUserName(1)).toBe('Mark');
    expect(await getUserName(2)).toBe('Paul');
  });
  test('Check getUserName function error', async () => {
    const tests = [3, 'Mark'];
    for (test of tests) {
      try {
        await getUserName(test);
      } catch (err) {
        expect(err.message).toBe(`User with ${test} not found.`);
      }
    }
  });
});
