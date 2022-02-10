const fs = require('fs').promises;
const readLine = require('readline-sync');

const ex7Function = async () => {
  const fileToRead = readLine.question('Qual o arquivo que deseja ler? ');

  const fileContent = await fs.readFile(fileToRead, 'utf-8')
  .then(content => content)
  .catch(() => { throw new Error('Arquivo inexistente') }); 

  const oldWord = readLine.question('Qual a palavra que deseja substituir? ');
  const newWord = readLine.question('Por qual palavra devo substituir? ');

  const newContent = fileContent.replace(new RegExp(oldWord, 'g'), newWord);
  console.log('');
  console.log(newContent);

  const fileToWrite = readLine.question('Onde devemos salvar esse arquivo? ');
  fs.writeFile(fileToWrite, newContent)
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch(() => console.error('Erro ao escrever o arquivo!'));
}

ex7Function();