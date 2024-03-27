const InvoiceListServices = require("../services/InvoiceListServices");
const jwtUtils = require('../utils/helper'); // Adjust the path accordingly

async function create(req, res, next) {
  try {
    const invoiceUserId = jwtUtils.verifyToken(req.header('authorization'))?.userId;
    const { body } = req;
    const Invoice = await InvoiceListServices.create({ ...body,
      invoice_user_id: invoiceUserId,
    });
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
    const { userId } = req;
    const Invoice = await InvoiceListServices.get(userId);
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

async function getByUserId(req, res, next) {
  try {
    const { userId } = req.body;
    const invoiceUserId = jwtUtils.verifyToken(req.header('authorization'))?.userId;
    if (!userId) {
      return res.status(400).json({
        success: false,
        error: 'userId is required in the request body.',
      });
    }

    const Invoice = await InvoiceListServices.getByUserId(userId,invoiceUserId);
    res.status(200).json({
      success: true,
      data: Invoice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}


async function invoicesSearch(req, res, next) {
  try {
    const { userId } = req;
    const {search} = req.body; // The updates will be sent in the request body as JSON
    const result = await InvoiceListServices.invoicesSearch(userId,search);
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
    Delete,
    getByUserId,
    invoicesSearch,
}