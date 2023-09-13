const { where } = require("sequelize");
const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.createUser = async (body) => {
  try {
    const data = await User.create({ ...body });
    return data;
  } catch (error) {
    const errors = error.errors.map((item) => ({ message: item.message }));
    return errors;
  }
};

exports.login = async (body) => {
  try {
    const { phone, fireBaseId } = body;
    const user = await User.findOne({
      where: { phone: phone, fireBaseId: fireBaseId },
    });
    if (!user) {
      throw new Error("User not found");
    }
    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //   throw new Error("Invalid password");
    // }
    //  const userWithoutPassword = { ...user.toJSON() };
    //  delete userWithoutPassword.password;

    return user;
  } catch (error) {
    return error.message
  }
};


exports.update = async (userId, updates) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
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
    const user = await User.findByPk(Id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    return error.message
  }
};;

exports.userlists = async (page, limit) => {
  try {
    const offset = (page - 1) * limit;
    const users = await User.findAll({
      offset,
      limit,
    });
    return users;
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};


exports.Delete = async (id,) => {
  const result = await User.destroy({
    where: {
      id,
    },
  });
  return result;
};

exports.activeUserCount = async () => {
  const activeUsers = await User.findAll({
    where: {
      status: 'active'
    }
  });

  const deactiveUsers = await User.findAll({
    where: {
      status: 'deactive'
    }
  });

  const reportUsers = await User.findAll({
    where: {
      status: 'report'
    }
  });

  const Users = await User.findAll({
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


