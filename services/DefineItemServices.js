const { where } = require("sequelize");
const DefineItem = require("../model/DefineItem");

exports.create = async (body) => {
  try {
    const data = await DefineItem.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await DefineItem.findAll({
    where: {
      user_id: userId,
    }
  });
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await DefineItem.findByPk(Id);
    if (!data) {
      throw new Error('DefineItem not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await DefineItem.findByPk(Id);
    if (!data) {
      throw new Error('DefineItem not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.DefineItemDelete = async (id,) => {
  const result = await DefineItem.destroy({
    where: {
      id,
    },
  });
  return result;
}

 