const express = require('express');
const controllers = require('../controllers/postControlers');
const middlewares = require('../middlewares/postMiddleware');
const { validateToken } = require('../middlewares/validateToken');

const router = (express.Router());

router.use(validateToken);

router.post('/', middlewares.validatePost, controllers.addPost);

// router.get('/', controllers.getAllCategory);

module.exports = router;