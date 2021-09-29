const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post,User,Comment} = require('../models');

//Render the home page

router.get('/', (req,res) => {
    Post.findAll({

        attributes: [
            'id',
            'post_text',
            
        ]
    })
})