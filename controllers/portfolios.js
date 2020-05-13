
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
  const portfolioData = req.body;
  // Todo: Exctract from req!
  const userId = 'google-oauth2|106322693209926200762';
  const portfolio = new Portfolio(portfolioData);
  portfolio.userId = userId;

  try {
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio);
  } catch(error) {
    return res.status(422).send(error.message);
  }
}
