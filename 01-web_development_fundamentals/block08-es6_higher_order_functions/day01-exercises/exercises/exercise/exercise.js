/* 1 */
console.log('\n--- 1 ---\n')

const createEmployee = (name) => {
    const prepEmail = name.replace(' ', '_').toLowerCase();
    const email = `${prepEmail}@trybe.com`;

    return {name, email};
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
};

console.log(newEmployees(createEmployee));

/* 2 */
console.log('\n--- 2 ---\n')

const checkEqual = (a, b) => a === b;

const makeABet = (bet, callback) => {
    let number = Math.ceil(Math.random() * 5);
    return callback(bet, number) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(makeABet(4, checkEqual));

/* 3 */
console.log('\n--- 3 ---\n')

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkNCount = (rightArr, compareArr) => {
    let count = 0;
    for (let idx = 0; idx < rightArr.length; idx += 1) {
        // https://www.w3schools.com/jsref/jsref_continue.asp
        if (compareArr[idx] === 'N.A') continue;

        if (rightArr[idx] === compareArr[idx]) {
            count += 1;
        } else {
            count -= 0.5;
        }
    }
    return count;
}

const checkAnswers = (rAnswers, sAnswers, callback) => {
    return callback(rAnswers, sAnswers);
}

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkNCount));