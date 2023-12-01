const { where } = require("sequelize");
const productVerification = require("../model/ProductVerfication");

exports.create = async (body) => {
  try {
    const data = await productVerification.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async () => {
  const data = await productVerification.findAll();
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await productVerification.findByPk(Id);
    if (!data) {
      throw new Error('Product not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await productVerification.findByPk(Id);
    if (!data) {
      throw new Error('Product not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.Delete = async (id,) => {
  const result = await productVerification.destroy({
    where: {
      id,
    },
  });
  return result;
}

 