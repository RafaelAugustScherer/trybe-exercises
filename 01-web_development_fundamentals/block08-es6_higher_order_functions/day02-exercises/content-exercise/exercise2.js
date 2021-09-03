// 1. Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
console.log('\n--- 1 ---\n');
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  return array.find((number) => number % 3 === 0 && number % 5 === 0);
};

console.log(findDivisibleBy3And5(numbers));

// 2. Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
console.log('\n--- 2 ---\n');
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  const name = array.find((name) => name.length === 5);

  if (name === undefined) return 'Nome não encontrado :(';
  return name;
};

console.log(findNameWithFiveLetters(names));

// 3. Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
console.log('\n--- 3 ---\n');
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(array, id) {
  const musica = array.find((musica) => musica.id === id);

  return musica.title;
}

console.log(findMusic(musicas, '31031685'));
