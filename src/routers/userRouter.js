const express = require('express');
const controllers = require('../controllers/userControllers');
const middlewares = require('../middlewares/userMiddleware');
const { validateToken } = require('../middlewares/validateToken');

const router = (express.Router());

router.post('/', middlewares.validateUser, middlewares.createToken, controllers.addUser);

router.use(validateToken);

router.get('/', controllers.getAllUser);

router.get('/:id', controllers.getUserById);

module.exports = router;