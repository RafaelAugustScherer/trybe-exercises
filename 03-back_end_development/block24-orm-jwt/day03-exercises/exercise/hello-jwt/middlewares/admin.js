const verifyAdmin = (req, _res, next) => {
  const user = req.user;

  if (!user.admin) {
    const error = { statusCode: 403, message: 'Restricted access' };
    return next(error);
  }


  next();
}

module.exports = {
  verifyAdmin,
}