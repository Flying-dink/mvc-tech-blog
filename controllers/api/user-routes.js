//express. js connection
const router= require('express').Router();
const {User, Post, Comment} = require('../../models');
const session = require('express-session');
const withAuth = require('../../utils/auth');
const SequelizeStore = require('connect-session-sequelize') (session.Store);

//Routes

router.get('/',(re,.res)=> {
    User.findAll({
        attributes: {exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

//GET api users by a single user id

router.get('/:id', (req,res)=> {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
           {
               model: Post,
               attributes: ['id', 'title', 'post_text', 'created_at']
    },
    {
        model: Comment,
        attributes: ['id', 'comment_text','post_id', 'user_id', 'created_at'],
        include: {
            model: Post,
            attributes: ['title']
        }
    }
]
})
.then(dbUserData =>{
    if (!dbUserData) {
        res.status(404).json({message: 'No user found with this id'});
        return;

    }
    res.json(dbUserData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

router.post('/', (req,res) => {
    User.create({
        username: req.username,
        email: req.body.email,
        password: req.body.password
    })
    //send user data back to client
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    //If there is a server error, return error
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res)=> {
    User.findOne({
        where: {
            email: req.body.email 
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({message: 'NO user with thtat email address'});
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({message: 'Incorrect password'});
            return;
        }
        req.session.save(() => {
            //session variables
            req.session.user_id = 
        })
    })
})