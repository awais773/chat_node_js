const users = require("../modal/User");
const tokenUtils = require("../utils/tokenUtils");
const Image = require("../modal/document");

async function getUserByEmail(email, password) {
  const user = await users.findOne({ where: { email, password } });
  return user;
}

async function signup(name, email, password) {
  debugger
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await users.create({
    name,
    email,
    password,
  });
  return user;
}
async function login(email, password) {
  console.log(email, password);
  const user = await getUserByEmail(email, password);
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const token = tokenUtils.generateToken(user.id);

  return { user, token };
}

const uploadImage = async ({ url, checkInTime, checkOutTime }) => {
  try {
    // Create a new instance of the Image model with the image and check-in/out information
    const image = new Image({
      url,
      checkInTime,
      checkOutTime,
    });

    // Save the image and check-in/out information to the database
    await image.save();

    return { message: "Upload successful" };
  } catch (err) {
    // Handle the error appropriately
    throw new Error(err.message);
  }
};

const uploadMultipleImages = async ({
  urls,
  checkInTime,
  checkOutTime,
  type,
  therapistid,
  userid,
  address,
  addressType,
  feedback,
  date
}) => {
  try {
    // Create an array of new instances of the Image model with the images and check-in/out information
    const images = urls.map(
      (url) =>
        new Image({
          url,
          checkInTime,
          checkOutTime,
          type,
          therapistid,
          userid,
          address,
          addressType,
          feedback,
          date
        })
    );

    // Save the images and check-in/out information to the database
    await Image.insertMany(images);

    return {
      success: true,
      message: "Upload successful",
    };
  } catch (err) {
    // Handle the error appropriately
    throw new Error(err.message);
  }
};

async function deleteImage(id) {
  const result = await Image.destroy({
    where: {
      id,
    },
  });
  return result;
}
async function getImage() {
  const document = await Image.findAll({
    attributes: [
      "url",
      "checkInTime",
      "checkOutTime",
      "type",
      "therapistid",
      "userid",
      "address",
      "addressType",
      "feedback",
      "date",
    ],
  });
  return document;
}
async function findBookingById(body) {
  const findDocument = await Image.findOne({
    where: {
      bookingId: body.bookingId,
    },
  });
  return findDocument;
}
module.exports = {
  signup,
  login,
  uploadImage,
  uploadMultipleImages,
  deleteImage,
  getImage,
  findBookingById,
};
