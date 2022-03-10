const login = (req, res) => {
  const token = req.token;
  return res.status(200).json({ token });
};

const echo = (req, res) => {
  const user = req.user;
  return res.status(200).json(user);
}

const topSecret = (req, res) => {
  const topSecret = 'Peter Parker é o Homem-Aranha';
  return res.status(200).json({ secretInfo: topSecret });
}

module.exports = {
  login,
  echo,
  topSecret
}