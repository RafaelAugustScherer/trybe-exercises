const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];


const writeFiles = () => {
  const promises = array
    .map((txt, idx) => fs.writeFile(`file${idx + 1}.txt`, txt));
  
  Promise.all(promises);
}

const readWrittenFiles = async () => {
  const promises = array
    .map((_txt, idx) => fs.readFile(`file${idx + 1}.txt`, 'utf-8'));
  
  const stringArr = await Promise.all(promises);
  const string = stringArr.join(' ');

  fs.writeFile('fileAll.txt', string);
}

// writeFiles();
// readWrittenFiles();