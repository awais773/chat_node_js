const BankDetailServices = require("../services/BankDetailServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const BankDetail = await BankDetailServices.create({ ...body , userId: userId });
    res.status(200).json({
      success: true,
      data: BankDetail
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
    const BankDetail = await BankDetailServices.update(Id, updates);
    res.json({ success: true, data: BankDetail });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const BankDetail = await BankDetailServices.find(Id);
    res.json({ success: true, data: BankDetail });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const { userId } = req;
    const BankDetail = await BankDetailServices.get(userId);
    res.status(200).json({
      success: true,
      data: BankDetail
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
    const result = await BankDetailServices.Delete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "card book not found",
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