const userService = require("../services/userServices");
const bcrypt = require("bcrypt");
const { generateToken, revokeToken } = require("../utils/helper");

async function signup(req, res, next) {
  try {
    const { body } = req;
    // Hash the password before creating the user
    // const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await userService.createUser({ ...body });
    const token = generateToken(user.id);
    res.status(201).json({
      success: true,
      data: user,
      jwt: user.id && token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
}

async function login(req, res, next) {
  try {
    const { body } = req;
    const user = await userService.login(body);
    const token = user.id && generateToken(user.id);

    res.status(200).json({
      success: true,
      data: user,
      jwt: user.id && token,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
      message: "Authentication failed",
    });
  }
}

async function update(req, res) {
  const userId = req.params.userId; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const updatedUser = await userService.update(userId, updates);
    if (!updatedUser) {
      res.status(404).json({
        success: false,
        error: "User not found",
      });
    } else {
      res.status(200).json({ success: true, user: updatedUser });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function userFind(req, res) {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const user = await userService.userFind(Id);
    if (!user) {
      res.status(404).json({
        success: false,
        error: "User not found",
      });
    } else {
      res.status(200).json({ success: true, data: user });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function userlists(req, res, next) {
  try {
    const { page, limit } = req.pagination; // Get pagination parameters from req.pagination
    const { users, totalUsers } = await userService.userlists(page, limit);
    const totalPages = Math.ceil(totalUsers / limit);
    res.status(200).json({
      success: true,
      users,
      pagination: {
        currentPage: page,
        totalPages,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function Delete(req, res, next) {
  try {
    const { userId } = req;
    const result = await userService.Delete(userId);
    if (result) {
      revokeToken(req.headers.authorization);
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function activeUserCount(req, res, next) {
  try {
    const count = await userService.activeUserCount();
    res.status(200).json({
      success: true,
      count,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
async function addFreind(req, res, next) {
  try {
    const { body, userId } = req;
    const response = await userService.addFriend({ ...body, userId: userId });

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
async function isFriend(req, res, next) {
  try {
    const { body, userId } = req;

    const response = await userService.checkIfFriends({
      ...body,
      userId: userId,
    });

    if (response) {
      res.status(200).json({
        success: true,
        message: "Users are friends.",
        data: response,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Users are not friends.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function addReportedUser(req, res) {
  try {
    const { body, userId } = req;
    const response = await userService.addReportedUser({
      ...body,
      userId: userId,
    });
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
async function isReportedUser(req, res, next) {
  try {
    const { body, userId } = req;
    const response = await userService.isReportedUser({
      ...body,
      userId: userId,
    });

    if (response) {
      res.status(200).json({
        success: true,
        message: "User are reported",
        data: response,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User are not reported",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
async function addBlockedUser(req, res) {
  try {
    const { body, userId } = req;
    const response = await userService.addBlockedUser({
      ...body,
      userId: userId,
    });
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
async function isBlockedUser(req, res, next) {
  try {
    const { body, userId } = req;

    const response = await userService.isBlockedUser({
      ...body,
      userId: userId,
    });

    if (response) {
      res.status(200).json({
        success: true,
        message: "User are blocked",
        data: response,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User are not blocked",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function reportedAllUsers(req, res, next) {
  try {
    const reportedAllUsers = await userService.reportedAllUsers();
    res.status(200).json({
      success: true,
      reportedAllUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
async function getAllFriends(req, res, next) {
  try {
    const { userId } = req;
    const getAllFriends = await userService.getAllFriends(userId);
    res.status(200).json({
      success: true,
      getAllFriends,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
async function unfriend(req, res, next) {
  try {
    const { body, userId } = req;


    const response = await userService.unfriend({ ...body, userId: userId });

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

async function UserSearch(req, res, next) {
  try {
    const {search} = req.body; // The updates will be sent in the request body as JSON
    const result = await userService.UserSearch(search);
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = {
  signup,
  userlists,
  login,
  update,
  userFind,
  Delete,
  activeUserCount,
  addFreind,
  isFriend,
  addReportedUser,
  isReportedUser,
  isBlockedUser,
  addBlockedUser,
  reportedAllUsers,
  getAllFriends,
  unfriend,
  UserSearch,
};
