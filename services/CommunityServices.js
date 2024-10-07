const { where } = require("sequelize");
const Community = require("../model/Community");
const Comment = require("../model/Comment");
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');
const User = require("../model/User");
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



exports.get = async (page, limit, userId) => {
  const offset = (page - 1) * limit;

  const data = await Community.findAll({
    offset,
    limit,
    order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
    where: {
      status: {
        [Op.or]: ['publish', 'private'] // Retrieve communities with status "publish" or "private"
      }
    },
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
        attributes: ["name", "image","about"]

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
        attributes: ["name", "image","about"]

      }
    ],
    where:{
      user_id:userId
    }
  });
  return data;
};

exports.find = async (Id,userId) => {
  try {
    const data = await Community.findByPk(Id,{
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
          attributes: ["name", "image","about"]
  
        },
        {
          model: Like,
          attributes: ["likes"],
          where: {
            userId: userId
          },
          required: false // Use `required: false` to perform LEFT JOIN instead of INNER JOIN
        },
      ],
      
    });
    
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

exports.filtersCommunity = async (body,userId) => {
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
        attributes: ["name", "image","about"]

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


exports.getByPostIdComment = async (communityId) => {
  const data = await Comment.findAll({
    order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
    include: [
      {
        model: User,
        attributes: ["name", "image","about"]

      }
    ],
    where: {
      communityId: communityId,
    },  
  });
  return data;
};


exports.CommmunitySearch = async (search) => {
  try {
    const data = await Community.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${search}%`  // Use iLike for case-insensitive search
            },
          },
          {
            title: {
              [Op.iLike]: `%${search}%`
            }, 
          },
          {
            tags: {
              [Op.iLike]: `%${search}%`
            },
          },
        ],
      },
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
          attributes: ["name", "image", "about"]
        }
      ],
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
