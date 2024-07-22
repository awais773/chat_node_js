const { where } = require("sequelize");
const BankDetail = require("../model/BankDetail");

exports.create = async (body) => {
  try {
    const data = await BankDetail.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await BankDetail.findAll({
    where: {
      userId: userId,
    }
  });
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await BankDetail.findByPk(Id);
    if (!data) {
      throw new Error('card book not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await BankDetail.findByPk(Id);
    if (!data) {
      throw new Error('card book not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.Delete = async (id,) => {
  const result = await BankDetail.destroy({
    where: {
      id,
    },
  });
  return result;
}

 