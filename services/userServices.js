const { where } = require("sequelize");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const Friends = require("../model/Friends");

exports.createUser = async (body) => {
  try {
    const data = await User.create({ ...body });
    return data;
  } catch (error) {
    const errors = error.errors[0].message;
    throw new Error(errors);
  }
};

exports.login = async (body) => {
  try {
    const { phone, fireBaseId, deviceToken } = body;
    const user = await User.findOne({
      where: { phone: phone, fireBaseId: fireBaseId },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (deviceToken) {
      //update my deviceToken in database
      user.deviceToken = deviceToken;
      await user.save();

    }


    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //   throw new Error("Invalid password");
    // }
    //  const userWithoutPassword = { ...user.toJSON() };
    //  delete userWithoutPassword.password;

    return user;
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
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
    throw new Error('Error updating user: ' + error.message);
  }
};

exports.userFind = async (Id) => {
  try {
    const user = await User.findByPk(Id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error finding user: ' + error.message);
  }
};

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

exports.Delete = async (id) => {
  try {
    const result = await User.destroy({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    throw new Error('Error deleting user: ' + error.message);
  }
};

exports.activeUserCount = async () => {
  try {
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

    const Users = await User.findAll();

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

  } catch (error) {
    throw new Error('Error counting active users: ' + error.message);
  }
};
exports.addFriend = async (body) => {
  try {
    
    const data = await Friends.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message
  }
};