const router = require('express').Router();
const userRoute = require('./user-routes');
const thoughtRoute = require('./thought-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoute);
router.use('/thoughts', thoughtRoute);

module.exports = router;