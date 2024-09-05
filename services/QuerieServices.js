const { where } = require("sequelize");
const Querie = require("../model/Querie");
const User = require("../model/User");
const Comment = require("../model/Comment");
const { Sequelize } = require('sequelize');
const Like = require("../model/Like");

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
    order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
    attributes: {
      include: [
        [
          Sequelize.literal('(SELECT COUNT(*) FROM "comments" WHERE "comments"."querieId" = "queries"."id")'),
          'commentCount'
        ],
        [
          Sequelize.literal('(SELECT COUNT(*) FROM "likes" WHERE "likes"."querieId" = "queries"."id")'),
          'LikeCount'
        ]
      ]
    },
    include: [
      {
        model: User,
        attributes: ["name", "image",'about']

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


exports.filtersQuerie = async (body ,userId) => {
  const whereClause = {};

  if (body.itemSubCatgory) {
    whereClause.itemSubCatgory = body.itemSubCatgory;
  }
  if (body.itemName) {
    whereClause.itemName = body.itemName;
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
    attributes: {
      include: [
        [
          Sequelize.literal('(SELECT COUNT(*) FROM "comments" WHERE "comments"."querieId" = "queries"."id")'),
          'commentCount'
        ],
        [
          Sequelize.literal('(SELECT COUNT(*) FROM "likes" WHERE "likes"."querieId" = "queries"."id")'),
          'LikeCount'
        ]
      ]
    },
    include: [
      {
        model: User,
        attributes: ["name", "image",'about']

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


exports.getByPostIdComment = async (querieId) => {
  const data = await Comment.findAll({
    order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
    include: [
      {
        model: User,
        attributes: ["name", "image","about"]

      }
    ],
    where: {
      querieId: querieId,
    },  
  });
  return data;
};

 