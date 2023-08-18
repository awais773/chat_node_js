const NotificationServices = require("../services/NotificationServices");

async function sendNotification(req, res, next) {
  try {
    const { body } = req;
    const data = await NotificationServices.sendNotification({ ...body });
    res.status(200).json({
      success: true,
      message: 'Notification send Succesfull',
      data: data
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}






module.exports = {
  sendNotification,
}