//gather all models and export them for use

//const User = require('./User');
//const Post = require('./Post');
//const Comment = require('./Comment');

//create associations
//User.hasMany(Post, {
  //  foreignKey: 'user_id'
//});

//Post.belongsTo(User, {
  //  foreignKey: 'user_id',
//});

//Comment.belongsTo(User, {
  //  foreignKey: 'user_id'
  //});
  
//Comment.belongsTo(Post, {
  //  foreignKey: 'post_id'
//});
  
//User.hasMany(Comment, {
  //  foreignKey: 'user_id'
//});
  
//Post.hasMany(Comment, {
  //  foreignKey: 'post_id'
//});

//module.exports = {User, Post, Comment};

// An index file to gather the models and export them for use

// User model
const User = require('./user');
// Post model
const Post = require('./post');
// Comment model
const Comment = require('./comment');

// Create associations between the models
// User-Post relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
});
//Post-User relationship
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Comment-User relationship
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Comment-Post relationship
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// User-Comment relationsihp
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Post-Comment relationship
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
})

// Export the modules
module.exports = { User, Post, Comment };
