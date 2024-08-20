const ProductServices = require("../services/ProductServices");
const Products = require("../model/Product");
const { randomInt } = require('crypto');

async function create(req, res, next) {
  try {
      const { name, quantity, } = req.body;
      const {userId } = req;
      // Array to hold the new products
      const newProducts = [];

      for (let i = 0; i < quantity; i++) {
          const barcode_value = randomInt(1000000, 9999999); // Generate a random barcode
          newProducts.push({
              name: name,
              barcode: barcode_value,
              companyId: userId,
          });
      }

      // Bulk insert new products
      await Products.bulkCreate(newProducts);

      return res.status(200).json({
          success: true,
          message: 'Product creation successful',
          data: newProducts,
      });
  } catch (error) {
      return res.status(500).json({
          success: false,
          message: error.message,
      });
  }
}


async function update (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const Product = await ProductServices.update(Id, updates);
    res.json({ success: true, data: Product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const Product = await ProductServices.find(Id);
    res.json({ success: true, data: Product });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const { userId } = req;
    const { page, limit } = req.pagination; // Get pagination parameters from req.pagination
    const Product = await ProductServices.get(page,limit,userId);
    res.status(200).json({
      success: true,
      data: Product
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
    const result = await ProductServices.Delete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "Product not found",
      });
    }
  } catch (error) {
    next(error);
  }
}

// Function to update product
async function updatePrintStatus (req, res)  {
  const { userId } = req;
  try {
    const Product = await ProductServices.updatePrintStatus(userId);
    res.json({ success: true, data: Product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function getUnPrint(req, res, next) {
  try {
    const { userId } = req;
    const Product = await ProductServices.getUnPrint(userId);
    res.status(200).json({
      success: true,
      data: Product
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
    updatePrintStatus,
    getUnPrint
}