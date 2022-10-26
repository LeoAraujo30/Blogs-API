require('dotenv/config');
const joi = require('joi');
const { getPostById } = require('../services/postServices');
const { getAllCategory } = require('../services/categoryServices');

const ids = joi.number().min(1).required();

const post = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().items(ids).required(),
});

const update = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
});

const validatePost = async (req, res, next) => {
  const { error } = post.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const categories = await getAllCategory();
  const bools = req.body.categoryIds
    .map((id) => categories.some((categ) => categ.id === id));
  if (bools.some((bool) => bool === false)) {
    res.status(400).json({ message: 'one or more "categoryIds" not found' });
  } else {
    next();
  }
};

const validateUpdate = async (req, res, next) => {
  const { error } = update.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const result = await getPostById(Number(req.params.id));
  if (result.user.email !== req.decoded.data.email) {
    res.status(401).json({ message: 'Unauthorized user' });
  } else {
    next();
  }
};

module.exports = {
  validatePost,
  validateUpdate,
};