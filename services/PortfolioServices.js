const { where } = require("sequelize");
const Portfolio = require("../model/Portfolio");

exports.create = async (body) => {
  try {
    const data = await Portfolio.create({ ...body });
    return data;
  } catch (error) {
    // Check if the error is a Sequelize validation error
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map((item) => ({ message: item.message }));
      return { error: 'Validation Error', details: validationErrors };
    } else {
      // For other errors, return a generic error message
      return { error: 'Database Error', message: error.message };
    }
  }
};



exports.get = async (userId) => {
  // Use Sequelize's findAll method to query the database for portfolios
  const portfolio = await Portfolio.findAll({
    where: {
      user_id: userId, // Filter portfolios based on the provided userId
    },
  });
  return portfolio; // Return the array of portfolio objects
};


exports.find = async (Id) => {
  try {
    const portfolio = await Portfolio.findByPk(Id);
    if (!portfolio) {
      // If no portfolio is found with the given ID, return null to indicate that the resource doesn't exist.
      return null;
    }
    return portfolio;
  } catch (error) {
    // Handle any errors that occur during the find operation.
    return error.message;
  }
};



exports.update = async (Id, updates) => {
  try {
    const portfolio = await Portfolio.findByPk(Id);
    if (!portfolio) {
      // If no portfolio is found with the given ID, return null to indicate that the resource doesn't exist.
      return null;
    }
    Object.assign(portfolio, updates);
    await portfolio.save();
    return portfolio;
  } catch (error) {
    // Handle any errors that occur during the update process.
    return error.message;
  }
};





exports.portfolioDelete = async (id,) => {
  const result = await Portfolio.destroy({
    where: {
      id,
    },
  });
  return result;
}

 