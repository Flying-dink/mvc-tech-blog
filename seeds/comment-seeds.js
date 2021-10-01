const {Comment} = require('../modedels');

const commentData = [
    {
        comment_text: "This is exciting!",
        post_id: 3,
        user_id: 1
        

    },
    {
        comment_text: " Texting is very useful",
        post_id: 1,
        user_id: 4
    },
    {
        comment_text: "Pizza is good",
        post_id: 4,
        user_id: 2
    },
    {
        comment_text: " Functions can be fun",
        post_id: 4,
        user_id: 3
    },
    {
        comment_text: "How Fun is this?",
        post_id: 5,
        user_id: 5
    },
    {
        comment_text: " Weekends are busy",
        post_id: 5,
        user_id: 4
    },
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;