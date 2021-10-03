//server for MVC Tech Blog

const path =require('path');
require('dotenv').config();
const express = require('express');
const routes = require('./controllers');
// const sequelize = require('./controllers/');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
//initialize sessions
const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: {maxAge: 7200000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
//Initialize the server

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname,'public')));

app. engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session(sess));
app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT,() => console.log('Now Listening'));

});