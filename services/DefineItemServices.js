const { where } = require("sequelize");
const DefineItem = require("../model/DefineItem");

exports.create = async (body) => {
  try {
    const maxItem = await DefineItem.max('item_no');    
    let newItemNo = '001';    
    if (maxItem) {
      const maxNumber = parseInt(maxItem, 10);
      newItemNo = (maxNumber + 1).toString().padStart(3, '0'); // Pad with zeros to make it 3 digits
    }    
    const data = await DefineItem.create({ ...body, item_no: newItemNo });
    return data;
  } catch (error) {
    return error.message;
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

 