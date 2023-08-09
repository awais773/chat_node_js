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
      where: { phone: phone , fireBaseId : fireBaseId },
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

exports.userlists = async () => {
  const user = await User.findAll();
  return user;
};


exports.Delete = async (id,) => {
  const result = await User.destroy({
    where: {
      id,
    },
  });
  return result;
}

  