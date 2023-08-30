const { where } = require("sequelize");
const Portfolio = require("../model/Portfolio");

exports.create = async (body) => {
  try {
    debugger
    const data = await Portfolio.create({ ...body });
    return data;
  } catch (error) {
    debugger
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const portfolio = await Portfolio.findAll({
    where: {
      user_id: userId,
    },
  });
  return portfolio;
};


exports.find = async (Id,) => {
  try {
    const portfolio = await Portfolio.findByPk(Id);
    if (!portfolio) {
      throw new Error('portfolio not found');
    }
    return portfolio;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const portfolio = await Portfolio.findByPk(Id);
    if (!portfolio) {
      throw new Error('User not found');
    }
    Object.assign(portfolio, updates);
    await portfolio.save();
    return portfolio;    
  } catch (error) {
    return error.message
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

 