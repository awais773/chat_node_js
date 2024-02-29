const { use } = require("chai");
const PortfolioServices = require("../services/PortfolioServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const Portfolio = await PortfolioServices.create({ ...body, user_id: userId });

    if (!Portfolio) {
      // If the portfolio creation was not successful, return a 400 Bad Request status.
      return res.status(400).json({
        success: false,
        message: "Portfolio creation failed",
      });
    }

    // If the portfolio was created successfully, return a 201 Created status.
    return res.status(201).json({
      success: true,
      data: Portfolio,
    });
  } catch (error) {
    // Handle other errors with a 500 Internal Server Error status.
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}



async function update(req, res) {
  const Id = req.params.Id; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const portfolio = await PortfolioServices.update(Id, updates);

    if (!portfolio) {
      // If the update operation didn't find a matching portfolio, return a 404 Not Found status.
      return res.status(404).json({ success: false, message: 'Portfolio not found' });
    }

    // If the portfolio was updated successfully, return a 200 OK status.
    return res.json({ success: true, data: portfolio });
  } catch (error) {
    // Handle other errors with a 500 Internal Server Error status.
    return res.status(500).json({ success: false, error: error.message });
  }
}


async function find(req, res) {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const portfolio = await PortfolioServices.find(Id);

    if (!portfolio) {
      // If no portfolio is found with the given ID, return a 404 Not Found status.
      return res.status(404).json({ success: false, message: 'Portfolio not found' });
    }

    // If the portfolio is found, return a 200 OK status with the portfolio data.
    return res.json({ success: true, data: portfolio });
  } catch (error) {
    // Handle other errors with a 500 Internal Server Error status.
    return res.status(500).json({ success: false, error: error.message });
  }
}

async function get(req, res, next) {
  try {
    const { userId } = req; // Extract the user ID from the request object
    const portfolio = await PortfolioServices.get(userId); // Call PortfolioServices to get the portfolio for the user

    if (!portfolio) {
      // If no portfolio is found for the user, return a 404 Not Found status.
      return res.status(404).json({
        success: false,
        message: 'Portfolio not found for this user',
      });
    }

    // If a portfolio is found, respond with a 200 OK status and the portfolio data.
    return res.status(200).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    // Handle other errors with a 500 Internal Server Error status.
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function portfolioDelete(req, res, next) {
  const { id } = req.params; // Get the portfolio ID from the route parameter
  try {
    const result = await PortfolioServices.portfolioDelete(id); // Call PortfolioServices to delete the portfolio

    if (result === null) {
      // If no portfolio was found to delete, respond with a 404 Not Found status.
      return res.status(404).json({
        success: false,
        message: 'Portfolio not found',
      });
    }

    // If the portfolio was deleted successfully, respond with a 200 OK status.
    return res.status(200).json({
      success: true,
      message: 'Portfolio deleted successfully',
    });
  } catch (error) {
    // Handle other errors with a 500 Internal Server Error status.
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}


async function GetByUserId(req, res, next) {
  try {
    const { userId } = req.body; // Extract the user ID from the request object
    const portfolio = await PortfolioServices.GetByUserId(userId); // Call PortfolioServices to get the portfolio for the user

    if (!portfolio) {
      // If no portfolio is found for the user, return a 404 Not Found status.
      return res.status(404).json({
        success: false,
        message: 'Portfolio not found for this user',
      });
    }

    // If a portfolio is found, respond with a 200 OK status and the portfolio data.
    return res.status(200).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    // Handle other errors with a 500 Internal Server Error status.
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = {
  create,
  get,
  update,
  find,
  portfolioDelete,
  GetByUserId,
}