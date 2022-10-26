const express = require('express');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
// const { validateToken } = require('../middlewares/validateToken');

const router = (express.Router());

router.use('/login', loginRouter);
router.use('/user', userRouter);
// router.use(validateToken);
// router.use('/categories');
// router.use('/post');

module.exports = router;