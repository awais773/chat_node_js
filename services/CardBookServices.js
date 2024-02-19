const { where } = require("sequelize");
const cardBook = require("../model/Cardbooks");

exports.create = async (body) => {
  try {
    const data = await cardBook.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async () => {
  const data = await cardBook.findAll();
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await cardBook.findByPk(Id);
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
    const data = await cardBook.findByPk(Id);
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
  const result = await cardBook.destroy({
    where: {
      id,
    },
  });
  return result;
}

 