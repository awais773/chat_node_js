const { where, Op } = require("sequelize");
const PackingList = require("../model/PackingList");
const CompanyProfile = require("../model/CompanyProfile");

exports.create = async (body) => {
  try {
    const maxItem = await PackingList.max('packing_no');    
    let packingNo = '001';    
    if (maxItem) {
      const maxNumber = parseInt(maxItem, 10);
      packingNo = (maxNumber + 1).toString().padStart(3, '0'); // Pad with zeros to make it 3 digits
    }  
    const data = await PackingList.create({ ...body, packing_no: packingNo });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};


exports.get = async (userId) => {
  const data = await PackingList.findAll({
    where: {
      user_id: userId, 
    },
    include: [
      {
        model: CompanyProfile,
        attributes: ['user_id', 'name', 'description','contact_number','image','email'],
        as: 'company_profile', 
      },
    ],
  });
  return data;
};


exports.find = async (Id,) => {
  try {
    const data = await PackingList.findByPk(Id);
    if (!data) {
      throw new Error('PackingList not found');
    }
    return data;    
  } catch (error) {
    return error.message
  }
};


exports.update = async (Id, updates) => {
  try {
    const data = await PackingList.findByPk(Id);
    if (!data) {
      throw new Error('PackingList not found');
    }
    Object.assign(data, updates);
    await data.save();
    return data;    
  } catch (error) {
    return error.message
  }
};




exports.PackingListDelete = async (id,) => {
  const result = await PackingList.destroy({
    where: {
      id,
    },
  });
  return result;
}

exports.PackingListSearch = async (userId, search) => {
  try {
    const data = await PackingList.findAll({
      where: {
         user_id: userId,
        [Op.or]: [
          {
            company_name: {
              [Op.like]: `%${search}%`
            },
          },
          {
            packing_no: {
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

 