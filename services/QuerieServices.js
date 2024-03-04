const { where } = require("sequelize");
const Querie = require("../model/Querie");

exports.create = async (body) => {
  try {
    const data = await Querie.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await Querie.findAll({
    where: {
      userId: userId, 
    },
  });
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await Querie.findByPk(Id);
    if (!data) {
      throw new Error('Querie not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await Querie.findByPk(Id);
    if (!data) {
      throw new Error('Querie not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.QuerieDelete = async (id,) => {
  const result = await Querie.destroy({
    where: {
      id,
    },
  });
  return result;
}


exports.filtersQuerie = async (body) => {
  const whereClause = {};

  if (body.itemSubCatgory) {
    whereClause.itemSubCatgory = body.itemSubCatgory;
  }

  if (body.itemCatgory) {
    whereClause.itemCatgory = body.itemCatgory;
  }
  if (body.country) {
    whereClause.country = body.country;
  }
  if (body.quanity) {
    whereClause.quanity = body.quanity;
  }
  const data = await Querie.findAll({
    where: whereClause,
  });

  return data;
};

 