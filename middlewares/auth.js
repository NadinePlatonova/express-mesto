const jwt = require('jsonwebtoken');
const UnauthorisedUserError = require('../errors/unauthorised-user-error');

const auth = (req, res, next) => {
  if (!req.cookies.jwt) throw new UnauthorisedUserError('Необходима авторизация');

  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    throw new UnauthorisedUserError('Необходима авторизация');
  }

  req.user = payload;

  next();
};

module.exports = auth;