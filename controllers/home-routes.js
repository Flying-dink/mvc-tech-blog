const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post,User,Comment} = require('../models');

//Render the home page

router.get('/', (req,res) => {
    Post.findAll({
//query configuration , from teh post table
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',

        ],

        //order the posts from most recent to oldessst
        order: [['created_at', 'DESC']],
        //from teh user table, from teh comment table 
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id','comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    //creates an array for the posts using the get method
    .then(dbPostData => {
        const posts = dbPostdata.map(post.get({plain: true}));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        res.status(500).json(err);

    });
});
router.get('/post/:id',(req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',


        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
               attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include:{
                    model: User,
                    attributes: ['username']
                }

            }
        ]
    })
    .then(dbPostData => {
        //if no post with that id exists, return an error
        if (!dbPostData) {
            res.status(404).json({message: 'No post found with this id'});
            return;
        }
        const post = dbPostData.get({plain: true});
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// render the login page
router.get('/login',(req,res)=> {
if (req.session.loggedIn) {
    res.redirect('/');
    return;
}
res.render('login');

});


//render the sign up page
router.get('/signup', (req,res) => {
    if(req.session.loggedIn) {
        res.redirecr('/');
        return;

    }
    res.render('signup');
});
module.exports = router;
