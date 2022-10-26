require('dotenv/config');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const { makeLogin } = require('../services/loginServices');

const secret = process.env.JWT_SECRET;

const name = joi.string().min(8).required();
const mail = joi.string().required();
const password = joi.string().min(6).required();

const validateUser = async (req, res, next) => {
  const { error: err1 } = name.validate(req.body.displayName);
  const { error: err2 } = mail.validate(req.body.email);
  const { error: err3 } = password.validate(req.body.password);
  if (err1) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  if (err2 || !req.body.email.includes('@')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (err3) {
    res.status(400).json(
      { message: '"password" length must be at least 6 characters long' },
    );
  } else {
    next();
  }
};

const createToken = async (req, res, next) => {
  const user = await makeLogin(req.body);
  if (user) {
    res.status(409).json({ message: 'User already registered' });
  } else {
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const { displayName, email, image = null } = req.body;
    const token = jwt.sign({ data: { displayName, email, image } }, secret, jwtConfig);
    req.token = token;
    next();
  }
};

module.exports = {
  validateUser,
  createToken,
};