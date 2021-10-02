const {User} = require('../models');

const userData = [
    {
        username: "John",
        email: "John@gmail.com",
        password: "password1234"
    },
    {
        username: "Steve",
        email: "Steve@gmail.com",
        password: "password1234"
    },
    {
        username: "Bob",
        email: "Bob@gmail.com",
        password: "password1234"
    },
    {
        username: "Kelly",
        email: "Kelly@gmail.com",
        password: "password1234"
    },
    {
        username: "Sydney",
        email: "sydney@gmail.com",
        password: "Password1234"
    }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;