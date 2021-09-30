
//server connection
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
//path for the server
router.use('./api', apiRoutes);
router.use('./dashboard',dashboardRoutes);
router.use((req,res)=> {
    res.status(404).end();
});
module.exports = router;
