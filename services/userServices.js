const { where, Op, Sequelize } = require("sequelize");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const Friends = require("../model/Friends");
const reportUser = require("../model/reportUser");
const blockUsers = require("../model/blockUsers");

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
    throw new Error("Login failed: " + error.message);
  }
};

exports.update = async (userId, updates) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    Object.assign(user, updates);
    const userWithoutPassword = { ...user.toJSON() };
    delete userWithoutPassword.password;
    await user.save();
    return userWithoutPassword;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

exports.userFind = async (Id) => {
  try {
    const user = await User.findByPk(Id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

exports.userlists = async (page, limit) => {
  try {
    const offset = (page - 1) * limit;
    const users = await User.findAll({
      offset,
      limit,
      order: [['createdAt', 'DESC']], 
    });
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
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
    throw new Error("Error deleting user: " + error.message);
  }
};

exports.activeUserCount = async () => {
  try {
    const activeUsers = await User.findAll({
      where: {
        status: "active",
      },
    });

    const deactiveUsers = await User.findAll({
      where: {
        status: "deactive",
      },
    });

    const reportUsers = await User.findAll({
      where: {
        status: "report",
      },
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
      totalUsers,
    };
  } catch (error) {
    throw new Error("Error counting active users: " + error.message);
  }
};
exports.addFriend = async (body) => {
  try {
    const data = await Friends.create({ ...body });
    return data;
  } catch (error) {
    // const errors = error.errors.map((item) => ({ message: item.message }));
    return error.message;
  }
};

exports.checkIfFriends = async (body) => {
  try {
    const friendship = await Friends.findOne({
      where: {
        userId: body.userId,
        reciver: body.receiverId,
      },
      include: [
        {
          model: User,
          attributes: ["id", "name", "image"],
          as: "UserSender",
        },
        {
          model: User,
          attributes: ["id", "name", "image"],
          as: "UserReceiver",
        },
      ],
    });

    return friendship
      ? {
          userData: friendship.UserSender,
          receiverData: friendship.UserReceiver,
        }
      : false;
  } catch (error) {
    throw new Error("Error checking friendship: " + error.message);
  }
};
exports.addReportedUser = async (body) => {
  try {
    const data = await reportUser.create({ ...body });
    return data;
  } catch (error) {
    return error.message;
  }
};
exports.isReportedUser = async (body) => {
  try {
    const reportedUser = await reportUser.findOne({
      where: {
        userId: body.userId,
        reciver: body.receiverId,
      },
      include: [
        {
          model: User,
          attributes: ["id", "name", "phone"],
          as: "UserSender",
        },
        {
          model: User,
          attributes: ["id", "name", "phone"],
          as: "UserReceiver",
        },
      ],
    });

    return reportedUser
      ? {
          reportedBy: reportedUser.UserSender,
          reportUser: reportedUser.UserReceiver,
        }
      : false;
  } catch (error) {
    throw new Error("Error checking reportedUser: " + error.message);
  }
};
exports.addBlockedUser = async (body) => {
  try {
    const data = await blockUsers.create({ ...body });
    return data;
  } catch (error) {
    return error.message;
  }
};
exports.isBlockedUser = async (body) => {
  try {
    const blockUser = await blockUsers.findOne({
      where: {
        userId: body.userId,
        reciver: body.receiverId,
      },
      include: [
        {
          model: User,
          attributes: ["id", "name", "phone"],
          as: "UserSender",
        },
        {
          model: User,
          attributes: ["id", "name", "phone"],
          as: "UserReceiver",
        },
      ],
    });

    return blockUser
      ? {
          BlockedBy: blockUser.UserSender,
          BlockedUser: blockUser.UserReceiver,
        }
      : false;
  } catch (error) {
    throw new Error("Error checking blockUsers: " + error.message);
  }
};
exports.reportedAllUsers = async () => {
  try {
    const reportedAllUsers = await reportUser.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "phone", "status", "blockedStatus"],
          as: "UserSender",
        },
        {
          model: User,
          attributes: ["id", "name", "phone", "status", "blockedStatus"],
          as: "UserReceiver",
        },
      ],
    });
    return reportedAllUsers;
  } catch (error) {
    throw new Error("Error fetching reportUser: " + error.message);
  }
};
exports.getAllFriends = async (userId) => {
  try {
    const getAllFriends = await Friends.findAll({
      where: {
        userId: userId,
      },
      include: [
        {
          model: User,
          attributes: ["id", "name", "phone", "status", "blockedStatus"],
          as: "UserReceiver",
        },
      ],
    });
    return getAllFriends;
  } catch (error) {
    throw new Error("Error fetching getAllFriends: " + error.message);
  }
};

exports.unfriend = async (body) => {
  try {
    const result = await Friends.destroy({
      where: {
        userId: body.userId,
        reciver: body.receiverId,
      },
    });

    if (result === 1) {
      return 'Unfriended successfully';
    } else {
      throw new Error('Unfriend operation failed. User may not be a friend.');
    }
  } catch (error) {
    return error.message;
  }
};


exports.UserSearch = async (search) => {
  try {
    const lowerCaseSearch = search.toLowerCase(); // Convert the search term to lowercase
    const data = await User.findAll({
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
            phone: Sequelize.where(
              Sequelize.fn('LOWER', Sequelize.col('phone')),
              { [Op.like]: `%${lowerCaseSearch}%` }
            ),
          },

          {
            designation: Sequelize.where(
              Sequelize.fn('LOWER', Sequelize.col('designation')),
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


