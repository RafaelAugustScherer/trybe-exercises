const fs = require('fs').promises;

const getSimpsons = async () => {
  try {
    let simpsons = await fs.readFile('simpsons.json', 'utf-8');
    simpsons = JSON.parse(simpsons);
    return simpsons;
  }
  catch (err) {
    throw new Error (err);
  }
}

const writeJson = (filename, content) => {
  fs.writeFile(filename, JSON.stringify(content))
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch(err => console.log(err));
}

const ex4ShowSimpsons = async () => {
  const simpsons = await getSimpsons();
  simpsons.forEach(({id, name}) => console.log(`${id} - ${name}`));
}

const ex4SearchById = async (id) => {
  const simpsons = await getSimpsons();

  const filtered = simpsons.find(({ id: simpsonId }) => simpsonId === id);
  if (!filtered) throw new Error('id não encontrado');

  return filtered;
}

const removeIdsFromSimpsons = async () => {
  const simpsons = await getSimpsons();
  const simpsonsFilter = simpsons.filter(({id}) => id !== '6' && id !=='10');
  writeJson('simpsons.json', simpsonsFilter);
}

const createSimpsonFamilyFile = async () => {
  const simpsons = await getSimpsons();
  const family = simpsons.slice(0, 4);
  writeJson('simpsonFamily.json', family);
}

const addNelsonMuntz = async () => {
  const simpsons = await getSimpsons();
  simpsons.push({ id: simpsons.length + 1, name: 'Nelson Muntz' });
  writeJson('simpsons.json', simpsons);
}

const replaceMaggie = async () => {
  const simpsons = await getSimpsons();
  const newSimpsons = simpsons.map((simpson) => 
    simpson.name === 'Maggie Simpson'
    ? { id: simpson.id, name: 'Nelson Muntz' }
    : simpson
  )
  writeJson('simpsons.json', newSimpsons);
}

// ex4ShowSimpsons();
// ex4SearchById();
// removeIdsFromSimpsons();
// createSimpsonFamilyFile();
// addNelsonMuntz();
// replaceMaggie();