const { where, Op, Sequelize } = require("sequelize");
const Company = require("../model/Company");
const bcrypt = require("bcrypt");
const { sendApprovalEmail } = require('../emailService');

exports.createUser = async (body) => {
  try {
    const data = await Company.create({ ...body });
    return data;
  } catch (error) {
    const errors = error.errors.map((item) => ({ message: item.message }));
    return errors;
  }
};

exports.login = async (body) => {
  try {
    const { email, password } = body;
    const user = await Company.findOne({
      where: { 
        email: email ,
        status: "Approved",
      },
    });
    if (!user) {
      throw new Error("Company not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    const userWithoutPassword = { ...user.toJSON() };
    delete userWithoutPassword.password;

    return user;
  } catch (error) {
    return error.message
  }
};


exports.update = async (userId, updates) => {
  try {
    const user = await Company.findByPk(userId);
    if (!user) {
      throw new Error('Company not found');
    }
    Object.assign(user, updates);
    const data = { ...user.toJSON() };
    await user.save();
    return data;
  } catch (error) {
    return error.message
  }
};;

exports.Approved = async (userId,) => {
  try {
    const user = await Company.findByPk(userId);
    if (!user) {
      throw new Error('Company not found');
    }
    user.status = 'Approved';
    await user.save();
    await sendApprovalEmail(user.email, user.name);
    return data;
  } catch (error) {
    return error.message
  }
};;



exports.userFind = async (Id,) => {
  try {
    const user = await Company.findByPk(Id);
    if (!user) {
      throw new Error('Company not found');
    }
    return user;
  } catch (error) {
    return error.message
  }
};;

exports.userlists = async (status,page, limit) => {
  const offset = (page - 1) * limit;
   
  const whereClause = {
    status:status,
  };

  const user = await Company.findAll({
    offset,
    limit,
    where: whereClause,
    order: [['createdAt', 'DESC']],
  });
  return user;
};



exports.Delete = async (id,) => {
  const result = await Company.destroy({
    where: {
      id,
    },
  });
  return result;
};

exports.activeUserCount = async () => {
  const activeUsers = await Company.findAll({
    where: {
      status: 'active'
    }
  });

  const deactiveUsers = await Company.findAll({
    where: {
      status: 'deactive'
    }
  });

  const reportUsers = await Company.findAll({
    where: {
      status: 'report'
    }
  });

  const Users = await Company.findAll({
  });

  const active = activeUsers.length;
  const deactive = deactiveUsers.length;
  const report = reportUsers.length;
  const totalUsers = Users.length;

  return {
    active,
    deactive,
    report,
    totalUsers
  };
};


exports.CompanySearch = async (search) => {
  try {
    const lowerCaseSearch = search.toLowerCase(); // Convert the search term to lowercase
    const data = await Company.findAll({
      where: {
        [Op.or]: [
          {
            name: Sequelize.where(
              Sequelize.fn('LOWER', Sequelize.col('name')),
              { [Op.like]: `%${lowerCaseSearch}%` }
            ),
          },
          {
            email: Sequelize.where(
              Sequelize.fn('LOWER', Sequelize.col('email')),
              { [Op.like]: `%${lowerCaseSearch}%` }
            ),
          },
          {
            status: Sequelize.where(
              Sequelize.fn('LOWER', Sequelize.col('status')),
              { [Op.like]: `%${lowerCaseSearch}%` }
            ),
          },
          {
            phone_number: Sequelize.where(
              Sequelize.fn('LOWER', Sequelize.col('phone_number')),
              { [Op.like]: `%${lowerCaseSearch}%` }
            ),
          },
        ],
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};


