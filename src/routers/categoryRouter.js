const express = require('express');
const controllers = require('../controllers/categoryControllers');
const middlewares = require('../middlewares/categoryMiddleware');
const { validateToken } = require('../middlewares/validateToken');

const router = (express.Router());

router.use(validateToken);

router.post('/', middlewares.validateCategory, controllers.addCategory);

// router.get('/', controllers.getAllUser);

module.exports = router;