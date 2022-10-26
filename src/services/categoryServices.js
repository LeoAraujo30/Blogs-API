const { Category } = require('../models');

const addCategory = async ({ name }) => {
  const result = await Category.create({ name });
  return result;
};

const getAllCategory = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = { 
  addCategory,
  getAllCategory,
};