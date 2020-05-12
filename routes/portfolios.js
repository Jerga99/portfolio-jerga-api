

const express = require('express');
const router = express.Router();
const { getPortfolios, getPortfolioById } = require('../controllers/portfolios');

router.get('', getPortfolios);
router.get('/:id', getPortfolioById);

module.exports = router;
