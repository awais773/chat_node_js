const defineAccountServices = require("../services/DefineAccountServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const defineAccount = await defineAccountServices.create({ ...body, userId: userId });
    res.status(200).json({
      success: true,
      data: defineAccount
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
    const defineAccount = await defineAccountServices.update(Id, updates);
    res.json({ success: true, data: defineAccount });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const defineAccount = await defineAccountServices.find(Id);
    res.json({ success: true, data: defineAccount });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const { userId } = req;
    const defineAccount = await defineAccountServices.get(userId);
    res.status(200).json({
      success: true,
      data: defineAccount
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}


async function Delete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await defineAccountServices.Delete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "Invoice not found",
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
    Delete,
}