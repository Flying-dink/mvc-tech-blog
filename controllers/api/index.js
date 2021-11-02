//an index file to gather the ApI routes and export them for use

//server connection
const router = require('express').Router();
//User Routes
const userRoutes = require('./user-routes');
//post routes
const postRoutes =require('./post-routes');
//Comment Routes
const commentRoutes =require('./comment-routes');

//define route path for the api to use

router.use('/users',userRoutes);
router.use('/posts', postRoutes);
router.use('/comments',commentRoutes);

//Export the router

module.exports = router;



