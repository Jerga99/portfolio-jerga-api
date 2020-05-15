

const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

exports.getBlogs = (req, res) => {
  return res.json({message: 'Its working!'});
}
