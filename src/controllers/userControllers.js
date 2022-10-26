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
  
module.exports = {
  addUser,
};