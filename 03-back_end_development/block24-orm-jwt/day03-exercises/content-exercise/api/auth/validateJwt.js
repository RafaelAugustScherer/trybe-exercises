const jwt = require('jsonwebtoken');

const { User } = require('../../models');

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SERVER_SECRET);

    const user = await User.findOne({ where: { username: decoded.data.username } });

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Usuário com token não encontrado!' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};