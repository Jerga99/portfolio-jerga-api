

const express = require('express');
const router = express.Router();

const { checkJwt, checkRole } = require('../controllers/auth');
const { getBlogs } = require('../controllers/blogs');

router.get('', getBlogs);

module.exports = router;
