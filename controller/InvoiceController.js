const InvoiceListServices = require("../services/InvoiceListServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const Portfolio = await InvoiceListServices.create({ ...body });
    res.status(200).json({
      success: true,
      data: Portfolio
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
    const packing = await InvoiceListServices.update(Id, updates);
    res.json({ success: true, data: packing });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const packing = await InvoiceListServices.find(Id);
    res.json({ success: true, data: packing });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const packing = await InvoiceListServices.get();
    res.status(200).json({
      success: true,
      data: packing
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}


async function PackingListDelete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await InvoiceListServices.PackingListDelete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "PackingList not found",
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
    PackingListDelete,
}