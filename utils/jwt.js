const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { JWT_SECRET } = require('../config/config.js');

const secretKey = JWT_SECRET || generateSecureKey(32);

function generateSecureKey(length) {
  return crypto.randomBytes(length).toString('hex');
}

function generateToken(payload, expiresIn = '2d') {
  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
}
function verifyToken(token) {
  try {
    const verify = jwt.verify(token, secretKey);
    return verify;
  } catch (error) {
    throw new Error('Token no válido');
  }
}
const payload = { usuario: 'ejemplo' };
const token = generateToken(payload);
try {
  const verifiedToken = verifyToken(token);
  console.log('Token verificado:', verifiedToken);
} catch (error) {
  console.error(error.message);
}
