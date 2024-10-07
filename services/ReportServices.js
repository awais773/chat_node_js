const { where } = require("sequelize");
const AllReport = require("../model/AllReport");
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');
const User = require("../model/User");
const Community = require("../model/Community");
 
exports.create = async (body) => {
  try {
    const data = await AllReport.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.getReportedPosts = async (page, limit, ) => {
  const offset = (page - 1) * limit;
  try {
    const data = await AllReport.findAll({
      offset,
      limit,
      order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
      where: {
        type:"community"
      },
      include: [
        {
          model: User,
          attributes: ["name", "image"],
          as: "reportedByUser",

        },

        {
          model: User,
          attributes: ["name", "image"],
          as: "reportedToUser",

        },

        {
          model: Community,
          attributes: ["title","name"],
          as: 'Community',
        }
      ]
    })
    const totalCommunity = await Community.count();
    return { data, totalCommunity };  
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }

}


exports.updateCommunity = async (Id, updates) => {
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


exports.getReporUser = async (page, limit, ) => {
  const offset = (page - 1) * limit;
  try {
    const data = await AllReport.findAll({
      offset,
      limit,
      order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
      where: {
        type:"user"
      },
      include: [
        {
          model: User,
          attributes: ["name", "image"],
          as: "reportedByUser",

        },

        {
          model: User,
          attributes: ["name", "image"],
          as: "reportedToUser",

        },
      ]
    })
    const totalUser = await User.count();
    return { data, totalUser };  
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }

}




