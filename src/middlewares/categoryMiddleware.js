require('dotenv/config');
const joi = require('joi');

const category = joi.object({
  name: joi.string().required(),
});

const validateCategory = async (req, res, next) => {
  const { error } = category.validate(req.body);
  if (error) {
    res.status(400).json({ message: '"name" is required' });
  } else {
    next();
  }
};

module.exports = {
  validateCategory,
};