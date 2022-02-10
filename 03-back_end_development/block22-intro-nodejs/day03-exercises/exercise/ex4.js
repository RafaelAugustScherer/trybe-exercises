const fs = require('fs').promises;

const writeFile = async (fileName, content) => {
  const res = await fs.writeFile(fileName, content)
    .then(() => 'ok')
    .catch((err) => console.error(err));

  return res;
}

module.exports = writeFile;