const ReportServices = require("../services/ReportServices");
const Community = require("../model/Community");
const Like = require("../model/Like");



async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const community = await ReportServices.create({ ...body, reportedBy: userId });
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
async function getReportedPosts(req, res) {
  try {
    const { page, limit } = req.pagination; // Get pagination parameters from req.pagination
    const {data, totalCommunity} = await ReportServices.getReportedPosts(page, limit);
    const totalPages = Math.ceil(totalCommunity / limit);
    res.json({ 
      success: true, 
      data: data,
      pagination: {
        currentPage: page,
        totalPages,
      },
     });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function updateCommunity(req, res) {
  const Id = req.params.Id; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const community = await ReportServices.updateCommunity(Id, updates);
    res.json({ success: true, data: community });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function getReporUser(req, res) {
  try {
    const { page, limit } = req.pagination; // Get pagination parameters from req.pagination
    const {data, totalUser} = await ReportServices.getReporUser(page, limit);
    const totalPages = Math.ceil(totalUser / limit);
    res.json({ 
      success: true, 
      data: data ,
      pagination: {
        currentPage: page,
        totalPages,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}




module.exports = {
  create,
  getReportedPosts,
  getReporUser,
  updateCommunity,

}