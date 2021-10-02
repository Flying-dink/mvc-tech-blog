const {Post} = require('../models');
const postData = [
    {

        title: 'Sequelize Data types',
        post_text: 'sequelize is very useful',
        user_id: 1.
    },
    {
        title: 'Handlebars Template Engine',
        post_text: 'Handlebars is very useful',
        user_id: 2,
    },
    {
        title: 'Handlebars is amazing',
        post_text: 'Partials are very versatile',
        user_id: 2,

        title: 'Sessions',
        post_text: 'sessions can be used with cookies',
        user_id: 3,
        
    },
    {
         title: 'Hashing',
         post_text: 'passwords can be hashed',
         user_id: 4,
    },
    {
        title: 'express.js',
        post_text: 'express is an easy wasy to set up a server',
        user_id: 5,
    },
]
 const seedPosts = () => Post.bulkCreate(postData);
 module.exports = seedPosts;