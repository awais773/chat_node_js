const { where } = require("sequelize");
const PackingList = require("../model/PackingList");

exports.create = async (body) => {
  try {
    const data = await PackingList.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await PackingList.findAll({
    where: {
      user_id: userId, 
    },
  });
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await PackingList.findByPk(Id);
    if (!data) {
      throw new Error('PackingList not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await PackingList.findByPk(Id);
    if (!data) {
      throw new Error('PackingList not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.PackingListDelete = async (id,) => {
  const result = await PackingList.destroy({
    where: {
      id,
    },
  });
  return result;
}

 