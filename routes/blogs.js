

const express = require('express');
const router = express.Router();

const { checkJwt, checkRole } = require('../controllers/auth');
const {
  getBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog } = require('../controllers/blogs');

router.get('', getBlogs);
router.get('/:id', getBlogById);
router.get('/s/:slug', getBlogBySlug);

router.post('', checkJwt, checkRole('admin'), createBlog);

module.exports = router;
