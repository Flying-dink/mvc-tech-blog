//

const { User } = require('../models');

const userData = [
    {
        username: "kelly_Reese",
        twitter: "kellyR",
        github: "kellyR",
        email: "kelly_R@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "carl_b",
        twitter: "carlb",
        github: "carlb",
        email: "carl_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "carol_c",
        twitter: "carol",
        github: "carol",
        email: "carol_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Gary_n",
        twitter: "GaryP",
        github: "GaryP",
        email: "Gary_P@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Suzanner",
        twitter: "Suzanneri23",
        github: "Suzanneri23",
        email: "suzanne_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Sydney",
        twitter: "Sydney_w",
        github: "Sydney",
        email: "Sydney@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;