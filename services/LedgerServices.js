const { where } = require("sequelize");
const LedgerModel = require("../model/Ledgers");
const UserModel = require("../model/User");

exports.create = async (body) => {
  try {
    const data = await LedgerModel.create({ ...body });

    if (body.type === "cash receive") {
      data.balance += parseInt(body.amount, 10);
    } else if (body.type === "cash payment") {
      data.balance -= parseInt(body.amount, 10);
    }

    await data.save();

    return data;
  } catch (error) {
    return error.message;
  }
};

exports.get = async (userId) => {
  const data = await LedgerModel.findAll({
    where: {
      ledger_user_id:userId,
    },
    include: [
      {
        model: UserModel,
        attributes: ['name', 'phone'], // Add other attributes you want to include
        as: 'user',
      },
    ],
  });
  return data;
};

exports.find = async (Id) => {
  try {
    const data = await LedgerModel.findByPk(Id);
    if (!data) {
      throw new Error("Ledger not found");
    }
    return data;
  } catch (error) {
    return error.message;
  }
};

exports.update = async (Id, updates) => {
  try {
    const data = await LedgerModel.findByPk(Id);
    if (!data) {
      throw new Error("Ledger not found");
    }
    Object.assign(data, updates);
    await data.save();
    return data;
  } catch (error) {
    return error.message;
  }
};

exports.Delete = async (id) => {
  const result = await LedgerModel.destroy({
    where: {
      id,
    },
  });
  return result;
};

exports.getByUserId = async (userId,ledgerUserId) => {
  const data = await LedgerModel.findAll({
    where: {
      userId: userId,
      ledger_user_id: ledgerUserId,
    },  
  });
  return data;
};
