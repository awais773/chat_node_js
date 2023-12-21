const { where } = require("sequelize");
const LedgerModel = require("../model/Ledgers");

exports.create = async (body) => {
  try {
    const data = await LedgerModel.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async () => {
  const data = await LedgerModel.findAll();
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await LedgerModel.findByPk(Id);
    if (!data) {
      throw new Error('Ledger not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await LedgerModel.findByPk(Id);
    if (!data) {
      throw new Error('Ledger not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.Delete = async (id,) => {
  const result = await LedgerModel.destroy({
    where: {
      id,
    },
  });
  return result;
}

exports.getByUserId = async (userId) => {
  const data = await LedgerModel.findAll({
    where: { userId },
  });
  return data;
};