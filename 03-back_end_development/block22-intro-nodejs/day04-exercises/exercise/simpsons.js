const fs = require('fs').promises;
const express = require('express');

const router = express.Router();

const getSimpsons = async () => {
  const simpsons = await fs.readFile('simpsons.json', 'utf-8');
  
  return JSON.parse(simpsons);
}


router
  .route('/simpsons')
  // 6
  .get(async (_req, res) => {
    try {
      const simpsons = await getSimpsons();
      return res.status(200).send(simpsons);
    }
    catch (err) {
      return res.status(500).send({ message: err });
    }
  })
  // 8
  .post(async (req, res) => {
    try {
    const { id, name } = req.body;
    const simpsons = await getSimpsons();
    console.log(simpsons);

    const simpson = simpsons.filter(simpson => simpson.id === id);
    if (simpson.length) return res.status(409).send({ message: "id already exists" });

    simpsons.push({ id, name });
    await fs.writeFile('simpsons.json', JSON.stringify(simpsons));

    return res.status(204).end();
    }
    catch (err) {
      return res.status(500).send({ message: err });
    }
  });

router
  .route('/simpsons/:id')
  // 7
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const simpsons = await getSimpsons();
      const simpson = simpsons.filter(simpson => simpson.id === id);
  
      if (!simpson) return res.status(404).send({ message: "simpson not found" })
      return res.status(200).send(simpson);
    }
    catch (err) {
      return res.status(500).send({ message: err });
    }
  }) 

module.exports = router;