const { where } = require("sequelize");
const priceList = require("../model/PriceList");

exports.create = async (body) => {
  try {
    const data = await priceList.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await priceList.findAll(
    {
      where: {
        userId: userId, // Filter portfolios based on the provided userId
      },
    }
  );
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await priceList.findByPk(Id);
    if (!data) {
      throw new Error('Price list not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await priceList.findByPk(Id);
    if (!data) {
        throw new Error('Price list not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.Delete = async (id,) => {
  const result = await priceList.destroy({
    where: {
      id,
    },
  });
  return result;
}


exports.GetByUserId = async (userId) => {
  const data = await priceList.findAll(
    {
      where: {
        userId: userId, // Filter portfolios based on the provided userId
      },
    }
  );
  return data;
};
 