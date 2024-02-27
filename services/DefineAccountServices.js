const { where } = require("sequelize");
const defineAccount = require("../model/DefineAccount");

exports.create = async (body) => {
  try {
    const data = await defineAccount.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await defineAccount.findAll({
    where: {
      userId: userId,
    }
  });
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await defineAccount.findByPk(Id);
    if (!data) {
      throw new Error('Account not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await defineAccount.findByPk(Id);
    if (!data) {
      throw new Error('Account not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.Delete = async (id,) => {
  const result = await defineAccount.destroy({
    where: {
      id,
    },
  });
  return result;
}

 