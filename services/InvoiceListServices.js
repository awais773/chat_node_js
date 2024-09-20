const { where, Op } = require("sequelize");
const Invoice = require("../model/invoices");
const UserModel = require("../model/User");
const CompanyProfile = require("../model/CompanyProfile");

exports.create = async (body) => {
  try {
    const maxItem = await Invoice.max('invoice_no');    
    let invoiceNo = '001';    
    if (maxItem) {
      const maxNumber = parseInt(maxItem, 10);
      invoiceNo = (maxNumber + 1).toString().padStart(3, '0'); // Pad with zeros to make it 3 digits
    }    
    const data = await Invoice.create({ ...body, invoice_no: invoiceNo});
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId,active,invoice_type, page, limit) => {
  const offset = (page - 1) * limit;
  const data = await Invoice.findAll({
    offset,
    limit,
    order: [['createdAt', 'DESC']], 
    where: {
      invoice_user_id:userId,
      invoice_type:invoice_type,
      active:active
    },
    include: [
      // {
      //   model: UserModel,
      //   attributes: ['name', 'phone'],
      //   as: 'user',
      // },
      {
        model: CompanyProfile,
        attributes: ['user_id', 'name', 'description','contact_number','image','email'],
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

exports.  getByUserId = async (userId,ledgerUserId) => {
  const data = await Invoice.findAll({
    where: {
      userId:userId,
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
          {
            invoice_no: {
              [Op.like]: `%${search}%`
            },
          },
        ],
      },
      include: [
        {
          model: CompanyProfile,
          attributes: ['user_id', 'name', 'description','contact_number','image','email'],
          as: 'company_profile', // Change alias to match the association
        },
      ],
    });
    return data;
  } catch (error) {
    return error.message;
  }
};


 
