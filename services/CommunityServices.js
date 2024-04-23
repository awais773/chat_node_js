const { where } = require("sequelize");
const Community = require("../model/Community");
const Comment = require("../model/Comment");
const { Sequelize } = require('sequelize');


const User = require("../model/User");
const ReportPosts = require("../model/ReportPosts");
const Like = require("../model/Like");

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


exports.get = async (page, limit, userId) => {
  const offset = (page - 1) * limit;

  const data = await Community.findAll({
    offset,
    limit,
    order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
    attributes: {
      include: [
        [
          Sequelize.literal('(SELECT COUNT(*) FROM "comments" WHERE "comments"."communityId" = "communities"."id")'),
          'commentCount'
        ],
        [
          Sequelize.literal('(SELECT COUNT(*) FROM "likes" WHERE "likes"."communityId" = "communities"."id")'),
          'LikeCount'
        ]
      ]
    },
    include: [
      {
        model: User,
        attributes: ["name", "image"]

      },
      {
        model: Like,
        attributes: ["likes"],
        where: {
          userId: userId
        },
        required: false // Use `required: false` to perform LEFT JOIN instead of INNER JOIN
      }
    ],
  });
  return data;
};


exports.myCommunity = async (userId ) => {

  const data = await Community.findAll({
    include: [
      {
        model: User,
        attributes: ["name", "image"]

      }
    ],
    where:{
      user_id:userId
    }
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

exports.reportedAllPosts = async () => {
  try {
    const reportedAllPosts = await ReportPosts.findAll({
      include: [
        {
          model: User,
          attributes: ["name", "phone"],
          as: "reportUser",
        },
        {
          model: Community,
          attributes: ["title","name", "details","contact_number", "status", "image"],
          as: "Commmunity",
        },
      ],
    });
    return reportedAllPosts;
  } catch (error) {
    throw new Error("Error fetching reportUser: " + error.message);
  }
};

exports.filtersCommunity = async (body) => {
  const whereClause = {};

  if (body.category) {
    whereClause.category = body.category;
  }

  if (body.subCategory) {
    whereClause.subCategory = body.subCategory;
  }

  if (body.country) {
    whereClause.country = body.country;
  }
  if (body.title) {
    whereClause.title = body.title;
  }
  if (body.tags) {
    whereClause.tags = body.tags;
  }

  const data = await Community.findAll({
    where: whereClause,
  });

  return data;
};

exports.CommentCreate = async (body) => {
  try {
    const data = await Comment.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.getByPostIdComment = async (communityId) => {
  const data = await Comment.findAll({
    order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
    include: [
      {
        model: User,
        attributes: ["name", "image"]

      }
    ],
    where: {
      communityId: communityId,
    },  
  });
  return data;
};