const { where, Op } = require("sequelize");
const Invoice = require("../model/invoices");
const UserModel = require("../model/User");
const CompanyProfile = require("../model/CompanyProfile");

exports.create = async (body) => {
  try {
    const data = await Invoice.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await Invoice.findAll({
    where: {
      invoice_user_id:userId,
    },
    include: [
      // {
      //   model: UserModel,
      //   attributes: ['name', 'phone'],
      //   as: 'user',
      // },
      {
        model: CompanyProfile,
        attributes: ['user_id', 'name', 'description'],
        as: 'company_profile', // Change alias to match the association
      },
    ],
  });
  return data;
};

exports.find = async (Id,) => {
  try {
    const data = await Invoice.findByPk(Id);
    if (!data) {
      throw new Error('Invoice not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await Invoice.findByPk(Id);
    if (!data) {
      throw new Error('Invoice not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.Delete = async (id,) => {
  const result = await Invoice.destroy({
    where: {
      id,
    },
  });
  return result;
}

exports.getByUserId = async (userId,ledgerUserId) => {
  const data = await Invoice.findAll({
    where: {
      userId,
      invoice_user_id: ledgerUserId,
    },  
  });
  return data;
};


exports.invoicesSearch = async (userId, search) => {
  try {
    const data = await Invoice.findAll({
      where: {
        invoice_user_id: userId,
        [Op.or]: [
          {
            company_name: {
              [Op.like]: `%${search}%`
            },
          },
          // {
          //   item_no: {
          //     [Op.like]: `%${search}%`
          //   },
          // },
        ],
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};


 