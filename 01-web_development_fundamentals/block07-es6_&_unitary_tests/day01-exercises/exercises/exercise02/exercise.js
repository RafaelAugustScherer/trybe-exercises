/* 1 */

// const factorialOf = (num) => {
//     let factorial = 1
//     for (let idx = 1; idx <= num; idx += 1) {
//         factorial *= idx
//     }

//     return factorial
// }

// Mind blowing!!!!!
const factorialOf = (num) => (num < 2 ? num : (num *= factorialOf(num - 1)));
console.log(factorialOf(4));

/* 2 */

const biggestWord = (phrase) => {
  const words = phrase.split(' ');
  words.sort((a, b) => b.length - a.length);

  return words[0]
};

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/* 3 */

// part3.html
// part3.js

/* 4 */

const greetings = partner => `Greetings ${partner}! Long time no see.`;
console.log(greetings('Foo Bar'));

const skills = ['Mocha', 'LiveScript', 'JavaScript', 'JScript', 'ECMAScript'];

const partnerSkills = partnerGreeting => {
    partnerGreeting += `
    My TOP 5 Abilites are (instant autism): `;
    skills.sort().forEach(skill => partnerGreeting += `
    ${skill}`);

    return partnerGreeting
}

console.log(partnerSkills(greetings('Foo Bar')))