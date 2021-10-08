
//Dependencies

const router = require('express').Router();
const sequelize = require('../config/connection');

//the models
const { Post,User,Comment} = require('../models');

//authorizes middleware to redirect unauthenticated users to the login page
const withAuth = require('../utils/auth')

//A route to render the dashboard page, for logged in user
router.get('/', withAuth, (req,res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']

                }

            },
            {
                model: User,
                attributes: ['username']
            }
        ]

        
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post =>post.get({ plain: true}));
        res.render('dashboard',{posts,loggedin:true});

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);


    });
});
//edit post route
router.get('/edit/:id', withAuth,(req, res)=> {
    //user posts data from the db
    Post.findOne({
        where: {
            id: req,params,id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',

        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id','created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }

            },
            {
                model: User,
                attributes: ['username']
            }

        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        const post = dbPostData.get({plain: true});
        res.render('edit-post',{post,loggedin: true});

    })
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});

});

router.get('/edituser',withAuth, (req,res)=> {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.session.user_id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        const user = dbUserData.get({plain: true});
        res.render('edit-user',{user,loggedin: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});
module.exports = router;