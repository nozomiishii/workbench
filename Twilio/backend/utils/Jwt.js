const jwt = require('jsonwebtoken');

const SECRET_KEY = 'SECRET_KEY';

function createJwt(username) {
  const token = jwt.sign({ username }, SECRET_KEY);
  return token;
}

function verifyToken(token) {
  const data = jwt.verify(token, SECRET_KEY);
  return data;
}

module.exports = {
  createJwt,
  verifyToken,
};
