const InvoiceListServices = require("../services/InvoiceListServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const Invoice = await InvoiceListServices.create({ ...body });
    res.status(200).json({
      success: true,
      products: Invoice
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
    const Invoice = await InvoiceListServices.update(Id, updates);
    res.json({ success: true, products: Invoice });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const Invoice = await InvoiceListServices.find(Id);
    res.json({ success: true, products: Invoice });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const Invoice = await InvoiceListServices.get();
    res.status(200).json({
      success: true,
      products: Invoice
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
    const result = await InvoiceListServices.Delete(id);
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