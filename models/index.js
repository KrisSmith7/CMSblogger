const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Comments belongs to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

// Comments belong to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });

// User has many post
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// Post belong to user
Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

// User has many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
  });

// post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });


module.exports = { User, Post, Comment };