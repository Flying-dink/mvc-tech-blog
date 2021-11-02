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
const user = require('./user');
// Post model
const post = require('./post');
// Comment model
const comment = require('./comment');

// Create associations between the models
// User-Post relationship
user.hasMany(Post, {
    foreignKey: 'user_id'
});
//Post-User relationship
post.belongsTo(user, {
    foreignKey: 'user_id'
});

// Comment-User relationship
comment.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Comment-Post relationship
comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// User-Comment relationsihp
user.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Post-Comment relationship
post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
})

// Export the modules
module.exports = { user, Post, Comment };
