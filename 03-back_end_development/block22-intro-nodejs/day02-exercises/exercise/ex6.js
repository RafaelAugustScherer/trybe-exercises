const fs = require('fs').promises;
const readLine = require('readline-sync');

const readFile = async (file) => {
  fs.readFile(file, 'utf-8')
  .then((content) => console.log(content))
  .catch(() => console.log('Arquivo inexistente')); 
}

const fileToRead = readLine.question('Qual o arquivo que deseja ler? ');
readFile(fileToRead);