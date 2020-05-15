

const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({status: 'published'}).sort({createdAt: -1});
  return res.json(blogs);
}

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  return res.json(blog);
}

exports.getBlogBySlug = async (req, res) => {
  const blog = await Blog.findOne({slug: req.params.slug})
  return res.json(blog);
}
