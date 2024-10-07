const CommunityServices = require("../services/CommunityServices");
const Community = require("../model/Community");
const Like = require("../model/Like");



async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const community = await CommunityServices.create({ ...body, user_id: userId });
    
    res.status(200).json({
      success: true,
      data: community
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}



async function update(req, res) {
  const Id = req.params.Id; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const community = await CommunityServices.update(Id, updates);
    res.json({ success: true, data: community });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find(req, res) {
  const Id = req.params.Id; // Get the user ID from the route parameter
  const { userId } = req;
  try {
    const community = await CommunityServices.find(Id, userId);
    res.json({ success: true, data: community });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}



async function get(req, res, next) {
  try {
    const { userId } = req;
    const { page, limit } = req.pagination; // Get pagination parameters from req.pagination

    const community = await CommunityServices.get(page,limit,userId);
    res.status(200).json({
      success: true,
      data: community
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function myCommunity(req, res, next) {
  try {
    // const { page, limit } = req.pagination; // Get pagination parameters from req.pagination

    const community = await CommunityServices.myCommunity(req.userId);
    res.status(200).json({
      success: true,
      data: community
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}



async function communityDelete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await CommunityServices.communityDelete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "portfolio not found",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function filtersCommunity(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const CommmunityResponse = await CommunityServices.filtersCommunity(body,userId);
    res.status(200).json({
      success: true,
      data: CommmunityResponse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}



async function CommentCreate(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const comments = await CommunityServices.CommentCreate({ ...body, userId: userId });
    
    res.status(200).json({
      success: true,
      data: comments
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}


async function getByPostIdComment(req, res, next) {
  try {
    const { communityId } = req.body;
    if (!communityId) {
      return res.status(400).json({
        success: false,
        error: 'communityId is required in the request body.',
      });
    }

    const Response = await CommunityServices.getByPostIdComment(communityId);
    res.status(200).json({
      success: true,
      data: Response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}


async function likeCommunityPost(req, res) {
  const { communityId } = req.body;
  const { userId } = req;

  try {
    // Check if the user already liked the post
    const existingLike = await Like.findOne({
      where: {
        communityId,
        userId,
      },
    });

    if (existingLike) {
      // If the like already exists, remove it
      await existingLike.destroy();
      return res.status(200).json({
        success: true,
        message: 'Post like removed successfully',
      });
    } else {
      // If the like doesn't exist, add it
      await Like.create({
        communityId,
        userId,
        likes: true,
      });

      // Increment the likes count in the Community model
      // await Community.increment('likes', { where: { id: communityId } });

      return res.status(200).json({
        success: true,
        message: 'Post liked successfully',
      });
    }
  } catch (error) {
    console.error('Error liking post:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function CommmunitySearch(req, res, next) {
  try {
    const {search} = req.body; // The updates will be sent in the request body as JSON
    const result = await CommunityServices.CommmunitySearch(search);
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}



module.exports = {
  create,
  get,
  update,
  find,
  communityDelete,
  filtersCommunity,
  myCommunity,
  CommentCreate,
  getByPostIdComment,
  likeCommunityPost,
  CommmunitySearch,
}