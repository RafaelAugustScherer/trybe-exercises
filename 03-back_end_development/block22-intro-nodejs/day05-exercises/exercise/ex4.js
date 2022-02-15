const Express = require('express');
const Rescue = require('express-rescue');
const fs = require('fs').promises;

const router = Express.Router();

const validateFields = (req, _res, next) => {
  const { name, initials, country, league } = req.body;
  const err = { message: 'invalid data' };

  if (name.length <= 5
      || initials.length > 3
      || initials !== initials.toUpperCase()
      || country.length <= 3) return next(err);
  
  next();
}

const getTeams = async () => {
  const err = 'unexpected error. Try again later.';
  let curData = await fs.readFile('teams.json', 'utf-8')
    .catch(({ errno }) => {
      if (errno === -4058) return [];
      return next(err);
    });
  if (curData.length) curData = JSON.parse(curData);
  return curData;
};

const getData = Rescue(async (req, res) => {
  const curTeams = await getTeams();
  return res.status(200).json({ teams: curTeams });
});

const saveData = Rescue(async (req, res) => {
  const curTeams = await getTeams();

  fs.writeFile(
    'teams.json',
    JSON.stringify([...curTeams, req.body], null, 4)
  );

  return res.status(200).json(req.body);
});

const treatError = (err, _req, res, _next) =>
  res.status(400).json({ message: err.message });

router
  .route('/')
  .post(validateFields, saveData, treatError)
  .get(getData, treatError);

module.exports = router;