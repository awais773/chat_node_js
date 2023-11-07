const { where } = require("sequelize");
const Community = require("../model/Community");
const User = require("../model/User");
const ReportPosts = require("../model/ReportPosts");

exports.create = async (body) => {
  try {
    const data = await Community.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};

exports.report = async (body) => {
  try {
    const data = await ReportPosts.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};
exports.reported = async () => {
  try {
    // const data = await ReportPosts.create({ ...body });
     // get repoted post data with users and posts
    const data = await ReportPosts.findAll({
    
      include: [
        {
          model: User,
          attributes: ["name", "image"]
        },

        {
          model: Community,
          attributes: ["title"],
          include: [
            {
              model: User,
              attributes: ["name", "image"]
            }
          ]
        }
      ]
    })
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }

}


exports.get = async (page, limit) => {
  const offset = (page - 1) * limit;

  const data = await Community.findAll({
    offset,
    limit,
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


