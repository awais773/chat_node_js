const userService = require("../services/userService");
const document = require("../modal/document");
const invoiceServices = require("../services/invoices")

async function signup(req, res, next) {
  const { name, email, password } = req.body;

  try {
    const user = await userService.signup(name, email, password);
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;

  try {
    const { user, token } = await userService.login(email, password);
    res.json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
      error: "Invalid request body",
    });
  }
}
function ResFail(errorMessage) {
  return {
    success: false,
    error: errorMessage,
  };
}

const uploadImage = async (req, res) => {
  try {
    const urls = req.files.map((file) => file.path);
    res.status(200).json({
      success: true,
      urls,
    });
  } catch (e) {
    res.send(ResFail("Invalid request body"));
    req.body;
  }
};
const uploadMultipleImages = async (req, res) => {
  const {
    checkInTime,
    checkOutTime,
    type,
    therapistid,
    userid,
    address,
    addressType,
    bookingId,
    feedback,
    date
  } = req.body;
  try {
    const urls = req.files.map((file) => file.path);
    const response = await document.create({
      url: urls,
      checkInTime,
      checkOutTime,
      type,
      therapistid,
      userid,
      address,
      addressType,
      bookingId,
      feedback,
      date
    });
    debugger
    const invoice = await invoiceServices.createInvoice(
      {
        bookingId: bookingId,
        status: "pending",
      }
    )
    res.status(200).json({
      success: true,
      message: "Upload successfuly",
      response,
    });
  } catch (e) {
    res.send(ResFail("Invalid request body"));
  }
};
const updateAppRes = async (req, res) => {
  const {
    checkInTime,
    checkOutTime,
    type,
    therapistid,
    userid,
    address,
    addressType,
    bookingId,
    feedback,
    id,
    url,
    date
  } = req.body;
  try {
    const doc = await document.findOne({ where: { id: id } });

    if (!doc) {
      throw new Error("Not found");
    }
    doc.checkInTime = checkInTime,
      doc.checkOutTime = checkOutTime,
      doc.type = type,
      doc.therapistid = therapistid,
      doc.userid = userid,
      doc.address = address,
      doc.addressType = addressType
    doc.bookingId = bookingId
    doc.feedback = feedback
    doc.date = date
    doc.url = url
    doc.save()

    // const invoice = await invoiceServices.getInvoice(bookingId)
    // if (url && invoice.length == 0) {
    //   console.log(doc.bookingId);
    //   debugger
    //   const invoice = await invoiceServices.createInvoice(
    //     {
    //       bookingId: parent(doc.bookingId),
    //       status: "pending",
    //     }
    //   )

    // }



    res.status(200).json({
      success: true,
      message: "Upload successfuly",
      doc,
    });
  } catch (e) {
    res.send(ResFail("Invalid request body"));
  }
};
async function deleteImage(req, res, next) {
  const { id } = req.params;
  try {
    const result = await userService.deleteImage(id);
    if (result) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.json({
        message: "Image not found",
      });
    }
  } catch (error) {
    next(error);
  }
}
async function getImage(req, res, next) {
  try {
    const document = await userService.getImage();
    res.status(200).json({
      success: true,
      document,
    });
  } catch (error) {
    res.send(error);
  }
}
async function findBookingById(req, res, next) {
  try {
    const findDocument = await userService.findBookingById(req.body);
    res.status(200).json({
      success: true,
      findDocument,
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
  login,
  uploadImage,
  uploadMultipleImages,
  deleteImage,
  getImage,
  findBookingById,
  updateAppRes
};
