const { where } = require("sequelize");
const Invoice = require("../model/invoices");

exports.create = async (body) => {
  try {
    const data = await Invoice.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async () => {
  const data = await Invoice.findAll();
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await Invoice.findByPk(Id);
    if (!data) {
      throw new Error('Invoice not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await Invoice.findByPk(Id);
    if (!data) {
      throw new Error('Invoice not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.Delete = async (id,) => {
  const result = await Invoice.destroy({
    where: {
      id,
    },
  });
  return result;
}

 