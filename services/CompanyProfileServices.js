const { where } = require("sequelize");
const CompanyProfile = require("../model/CompanyProfile");

exports.create = async (body) => {
  try {
    const data = await CompanyProfile.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await CompanyProfile.findAll({
    where: {
      user_id: userId,
    }
  });
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await CompanyProfile.findByPk(Id);
    if (!data) {
      throw new Error('CompanyProfile not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await CompanyProfile.findByPk(Id);
    if (!data) {
      throw new Error('CompanyProfile not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.CompanyProfileDelete = async (id,) => {
  const result = await CompanyProfile.destroy({
    where: {
      id,
    },
  });
  return result;
}

 