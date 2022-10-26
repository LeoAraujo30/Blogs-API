const services = require('../services/categoryServices');

const addCategory = async (req, res) => {
  try {
    const result = await services.addCategory(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const result = await services.getAllUser();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
module.exports = {
  addCategory,
  getAllUser,
};