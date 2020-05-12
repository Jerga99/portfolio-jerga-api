

const express = require('express');
const router = express.Router();
const { getPortfolios } = require('../controllers/portfolios');

router.get('', getPortfolios)

module.exports = router;
