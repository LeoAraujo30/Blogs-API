const express = require('express');
const controllers = require('../controllers/userControllers');
const middlewares = require('../middlewares/userMiddleware');

const router = (express.Router());

router.post('/', middlewares.validateUser, middlewares.createToken, controllers.addUser);

module.exports = router;