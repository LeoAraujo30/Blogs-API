const express = require('express');
const controllers = require('../controllers/loginControllers');
const middlewares = require('../middlewares/loginMiddlewares');

const router = (express.Router());

router.post('/', middlewares.validateLogin, controllers.makeLogin);

module.exports = router;