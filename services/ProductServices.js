const { where, Op } = require("sequelize");
const Product = require("../model/Product");

exports.create = async (body) => {
  try {
    const data = await Product.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message;
  }
};

exports.get = async (page,limit,userId) => {
  const offset = (page - 1) * limit;
  const data = await Product.findAll({
    offset,
    limit,
    order: [['createdAt', 'DESC']], 
    where: {
      companyId: userId,
    },
  });
  return data;
};

exports.find = async (Id) => {
  try {
    const data = await Product.findByPk(Id);
    if (!data) {
      throw new Error("product not found");
    }
    return data;
  } catch (error) {
    return error.message;
  }
};

exports.update = async (Id, updates) => {
  try {
    const data = await Product.findByPk(Id);
    if (!data) {
      throw new Error("product not found");
    }

    Object.assign(data, updates);
    await data.save();
    return data;
  } catch (error) {
    return error.message;
  }
};

exports.Delete = async (id) => {
  const result = await Product.destroy({
    where: {
      id,
    },
  });
  return result;
};
exports.updatePrintStatus = async (userId) => {
  try {
    const result = await Product.update(
      { print: 'print' }, // Set the new print status
      {
        where: {
          companyId: userId,
          print: 'unprint',
        },
        returning: true, // Return the affected rows
      }
    );

    // result[1] will contain the array of affected rows
    if (result[1].length === 0) {
      throw new Error("No products found with the specified condition");
    }
    return result[1]; // Return the updated rows
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getUnPrint = async (userId) => {
  const data = await Product.findAll({
    where: {
      companyId: userId,
      print: 'unprint',
    },
  });
  return data;
};

exports.ProductSearch = async (userId, search) => {
  try {
    const data = await Product.findAll({
      where: {
        companyId: userId,
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${search}%`
            },
          },
          {
            barcode: {
              [Op.like]: `%${search}%`
            },
          },

          {
            print: {
              [Op.like]: `%${search}%`
            },
          },
        ],
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
