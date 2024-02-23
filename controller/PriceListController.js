const priceListServices = require("../services/PriceListServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const priceList = await priceListServices.create({ ...body, userId: userId });
    res.status(200).json({
      success: true,
      data: priceList
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
    const priceList = await priceListServices.update(Id, updates);
    res.json({ success: true, data: priceList });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const priceList = await priceListServices.find(Id);
    res.json({ success: true, data: priceList });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const { userId } = req;    
    const priceList = await priceListServices.get(userId);
    res.status(200).json({
      success: true,
      data: priceList
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
    const result = await priceListServices.Delete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "price not found",
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