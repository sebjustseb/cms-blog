const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const post of postData) {
      const { user_id } = post;
      const currentUser = users.find(({ id }) => id === user_id);
      if (currentUser) {
        post.user_id = currentUser.id;
      }
    }

    const posts = await Post.bulkCreate(postData);

    for (const comment of commentData) {
      const { user_id, post_id } = comment;
      const currentUser = users.find(({ id }) => id === user_id);
      const currentPost = posts.find(({ id }) => id === post_id);
      if (currentUser && currentPost) {
        comment.user_id = currentUser.id;
        comment.post_id = currentPost.id;
      }
    }

    await Comment.bulkCreate(commentData);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();