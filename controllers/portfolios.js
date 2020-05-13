
const mongoose = require('mongoose');
const Portfolio = mongoose.model('Portfolio');

exports.getPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find({});
  return res.json(portfolios);
}

exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio);
  } catch(error) {
    return res.status(422).send(error.message);
  }
}

exports.createPortfolio = async (req, res) => {
  const data = req.body;
  console.log(data);
  return res.json({message: 'Creating Portfolio...'});
}
