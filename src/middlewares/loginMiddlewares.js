require('dotenv/config');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const services = require('../services/loginServices');

const secret = process.env.JWT_SECRET;

const login = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const validateLogin = async (req, res, next) => {
  const { error } = login.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await services.makeLogin(req.body);
  if (!user || user.password !== req.body.password) {
    res.status(400).json({ message: 'Invalid fields' });
  } else {
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const { email } = req.body;
    const token = jwt.sign({ data: { email } }, secret, jwtConfig);
    req.token = token;
    next();
  }
};

module.exports = {
  validateLogin,
};