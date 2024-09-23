const companyService = require("../services/CompanyServices");
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require("../utils/helper");

async function signup(req, res, next) {
  try {
    const { body } = req;
    // Hash the password before creating the user
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await companyService.createUser({ ...body, password: hashedPassword });
    const tokken = generateToken(user.id)
    // const check = verifyToken(tokken)
    res.status(201).json({
      success: true,
      data: user,
      // jwt: user.id && tokken
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
    const user = await companyService.login(body);
    const tokken = user.id && generateToken(user.id)

    res.json({
      success: true,
      user,
      jwt: user.id && tokken
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
    const updatedUser = await companyService.update(userId, updates);
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function Approved(req, res) {
  const userId = req.params.userId; // Get the user ID from the route parameter
  try {
    const updatedUser = await companyService.Approved(userId);
    res.json({ success: true, 
      'message': "User Approved successfully" 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function userFind(req, res) {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const user = await companyService.userFind(Id);
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
    const { status } = req.query
    const { page, limit } = req.pagination; // Get pagination parameters from req.pagination
    const user = await companyService.userlists(status, page, limit);
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
    const result = await companyService.Delete(id);
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



async function activeUserCount(req, res, next) {
  try {
    const data = await companyService.activeUserCount();
    res.status(200).json({
      success: true,
      data,
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
  Approved
}