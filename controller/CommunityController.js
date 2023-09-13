const CommunityServices = require("../services/CommunityServices");

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
  try {
    const community = await CommunityServices.find(Id);
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
    const community = await CommunityServices.get();
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


module.exports = {
  create,
  get,
  update,
  find,
  communityDelete,
}