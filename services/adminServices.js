const { where } = require("sequelize");
const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");

exports.createUser = async (body) => {
  try {
    const data = await Admin.create({ ...body });
    return data;
  } catch (error) {
    const errors = error.errors.map((item) => ({ message: item.message }));
    return errors;
  }
};

exports.login = async (body) => {
  try {
    const { email, password } = body;
    const user = await Admin.findOne({
      where: { email: email },
    });
    if (!user) {
      throw new Error("Admin not found");
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
    const user = await Admin.findByPk(userId);
    if (!user) {
      throw new Error('Admin not found');
    }
    Object.assign(user, updates);
    const userWithoutPassword = { ...user.toJSON() };
    delete userWithoutPassword.password;
    await user.save();
    return userWithoutPassword;
  } catch (error) {
    return error.message
  }
};;



exports.userFind = async (Id,) => {
  try {
    const user = await Admin.findByPk(Id);
    if (!user) {
      throw new Error('Admin not found');
    }
    return user;
  } catch (error) {
    return error.message
  }
};;

exports.userlists = async () => {
  const user = await Admin.findAll();
  return user;
};


exports.Delete = async (id,) => {
  const result = await Admin.destroy({
    where: {
      id,
    },
  });
  return result;
};

exports.activeUserCount = async () => {
  const activeUsers = await Admin.findAll({
    where: {
      status: 'active'
    }
  });

  const deactiveUsers = await Admin.findAll({
    where: {
      status: 'deactive'
    }
  });

  const reportUsers = await Admin.findAll({
    where: {
      status: 'report'
    }
  });

  const Users = await Admin.findAll({
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


