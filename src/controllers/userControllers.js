const services = require('../services/userServices');

const addUser = async (req, res) => {
  try {
    await services.addUser(req.body);
    const { token } = req;
    res.status(201).json({ token });
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
  addUser,
  getAllUser,
};