const express = require('express');
const loginRouter = require('./loginRouter');

const router = (express.Router());

router.use('/login', loginRouter);
// router.use('/user');
// router.use('/categories');
// router.use('/post');

module.exports = router;