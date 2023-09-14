const { where } = require("sequelize");
const Community = require("../model/Community");
const User = require("../model/User");

exports.create = async (body) => {
  try {
    const data = await Community.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async () => {
  const data = await Community.findAll({
    include: [
      {
        model: User,
        attributes: ["name", "image"]

      }
    ]
  });
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await Community.findByPk(Id);
    if (!data) {
      throw new Error('portfolio not found');
    }
    return data;
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await Community.findByPk(Id);
    if (!data) {
      throw new Error('Community not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;
  } catch (error) {
    return error.message
  }
};




exports.communityDelete = async (id,) => {
  const result = await Community.destroy({
    where: {
      id,
    },
  });
  return result;
}

