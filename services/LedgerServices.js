const { where, Op } = require("sequelize");
const LedgerModel = require("../model/Ledgers");
const UserModel = require("../model/User");
const CompanyProfile = require("../model/CompanyProfile");

exports.create = async (body) => {
  
  try {
    const maxLadger = await LedgerModel.max('ledger_no');    
    let LedgerNo = '001';    
    if (maxLadger) {
      const maxNumber = parseInt(maxLadger, 10);
      LedgerNo = (maxNumber + 1).toString().padStart(3, '0'); // Pad with zeros to make it 3 digits
    }  
    
    const ledger  = await LedgerModel.create({ ...body, ledger_no: LedgerNo, });

    // if (body.type === "cash receive") {
    //   data.balance += parseInt(body.amount, 10);
    // } else if (body.type === "cash payment") {
    //   data.balance -= parseInt(body.amount, 10);
    // }
    // await data.save();

    const data = await LedgerModel.findOne({
      where: { id: ledger.id }, // Assuming 'id' is the primary key of LedgerModel
      include: [
        {
          model: UserModel,
          attributes: ['name', 'phone', 'about', 'email'], // Add other attributes you want to include
          as: 'user',
        },
        {
          model: CompanyProfile,
          attributes: ['user_id', 'name', 'description', 'contact_number', 'image', 'email'],
          as: 'company_profile', // Ensure the alias matches your association
        },
      ],
    });

    return data;
  } catch (error) {
    return error.message;
  }
};

exports.get = async (userId,page,limit,customerType) => {
  const offset = (page - 1) * limit;

  const whereClause = {
    ledger_user_id: userId,
  }; 

  // Add 'customerType' condition if provided
  if (customerType) {
    whereClause.customerType = customerType;
  }
  const data = await LedgerModel.findAll({
    offset,
    limit,
    order: [['createdAt', 'DESC']], 
    where: whereClause,
    include: [
      {
        model: UserModel,
        attributes: ['name', 'phone','about','email'], // Add other attributes you want to include
        as: 'user',
      },
      {
        model: CompanyProfile,
        attributes: ['user_id', 'name', 'description','contact_number','image','email'],
        as: 'company_profile', // Change alias to match the association
      },
    ],
  });
  return data;
};

exports.find = async (Id) => {
  try {
    const data = await LedgerModel.findByPk(Id);
    if (!data) {
      throw new Error("Ledger not found");
    }
    return data;
  } catch (error) {
    return error.message;
  }
};

exports.update = async (Id, updates) => {
  try {
    const data = await LedgerModel.findByPk(Id);
    if (!data) {
      throw new Error("Ledger not found");
    }
    Object.assign(data, updates);
    await data.save();
    return data;
  } catch (error) {
    return error.message;
  }
};

exports.Delete = async (id) => {
  const result = await LedgerModel.destroy({
    where: {
      id,
    },
  });
  return result;
};

exports.getByUserId = async (userId,ledgerUserId) => {
  const data = await LedgerModel.findAll({
    where: {
      userId: userId,
      ledger_user_id: ledgerUserId,
    },  
  });
  return data;
};

exports.LedgerSearch = async (userId, search) => {
  try {
    const data = await LedgerModel.findAll({
      where: {
        ledger_user_id: userId,
        [Op.or]: [
          {
            ledger_no: {
              [Op.like]: `%${search}%`
            },
          },
          {
            '$user.name$': {
              [Op.like]: `%${search}%`,
            },
          },
          {
            '$user.email$': {
              [Op.like]: `%${search}%`,
            },
          },
        ],
      },
      include: [
        {
          model: UserModel,
          attributes: ['name', 'phone', 'about', 'email'], // Add other attributes you want to include
          as: 'user',
        },
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
