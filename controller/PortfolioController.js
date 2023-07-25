const PortfolioServices = require("../services/PortfolioServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const Portfolio = await PortfolioServices.create({ ...body });
    res.status(200).json({
      success: true,
      data: Portfolio
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}



async function update (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const portfolio = await PortfolioServices.update(Id, updates);
    res.json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const portfolio = await PortfolioServices.find(Id);
    res.json({ success: true, data: portfolio });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const portfolio = await PortfolioServices.get();
    res.status(200).json({
      success: true,
      data: portfolio
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}


async function portfolioDelete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await PortfolioServices.portfolioDelete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "portfolio not found",
      });
    }
  } catch (error) {
    next(error);
  }
}


module.exports = {
   create,
    get,
    update,
    find,
    portfolioDelete,
}