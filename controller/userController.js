const userService = require("../services/userServices");
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require("../utils/helper");

async function signup(req, res, next) {
  try {
    const { body } = req;
    // Hash the password before creating the user
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await userService.createUser({ ...body, password: hashedPassword });
    const tokken = generateToken(user.id)
    // const check = verifyToken(tokken)
    res.status(200).json({
      success: true,
      data: user,
      jwt: tokken
    });

  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}


async function login(req, res, next) {
  try {
    const { body } = req;
    const user = await userService.login(body);
    const tokken = generateToken(user.id)

    res.json({
      success: true,
      user,
      jwt: tokken
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
      error: "Invalid request body",
    });
  }
}


async function update(req, res) {
  const userId = req.params.userId; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const updatedUser = await userService.update(userId, updates);
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function userFind(req, res) {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const user = await userService.userFind(Id);
    res.json({ success: true, data: user });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}



async function userlists(req, res, next) {
  try {
    const user = await userService.userlists();
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}


async function Delete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await userService.Delete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "user not found",
      });
    }
  } catch (error) {
    next(error);
  }
}


module.exports = {
  signup,
  userlists,
  login,
  update,
  userFind,
  Delete,
}