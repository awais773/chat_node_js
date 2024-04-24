const Like = require("../model/Like");
const QuerieServices = require("../services/QuerieServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const Querie = await QuerieServices.create({...body, userId: userId});
    res.status(200).json({
      success: true,
      data: Querie
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}



async function update (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const Querie = await QuerieServices.update(Id, updates);
    res.json({ success: true, data: Querie });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const Querie = await QuerieServices.find(Id);
    res.json({ success: true, data: Querie });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const { userId } = req;    
    const Querie = await QuerieServices.get(userId);
    res.status(200).json({
      success: true,
      data: Querie
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}


async function QuerieDelete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await QuerieServices.QuerieDelete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "Querie not found",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function filtersQuerie(req, res, next) {
  try {
    const { userId } = req;
    const { body } = req;
    const Querie = await QuerieServices.filtersQuerie(body, userId);
    res.status(200).json({
      success: true,
      data: Querie,
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
    const Querie = await QuerieServices.CommentCreate({ ...body, userId: userId });
    
    res.status(200).json({
      success: true,
      data: Querie
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
async function getByPostIdComment(req, res, next) {
  try {
    const { querieId } = req.body;
    if (!querieId) {
      return res.status(400).json({
        success: false,
        error: 'querieId is required in the request body.',
      });
    }

    const Response = await QuerieServices.getByPostIdComment(querieId);
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


async function likeQueryPost(req, res) {
  const { querieId } = req.body;
  const { userId } = req;

  try {
    // Check if the user already liked the post
    const existingLike = await Like.findOne({
      where: {
        querieId,
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
        querieId,
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



module.exports = {
   create,
    get,
    update,
    find,
    QuerieDelete,
    filtersQuerie,
    CommentCreate,
    getByPostIdComment,
    likeQueryPost
}