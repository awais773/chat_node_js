const bookingService = require("../services/bookingServices");

exports.createBooking = async (req, res) => {
  const {
    patient,
    therapist,
    address,
    addressType,
    serviceType,
    latitude,
    expiryTime,
    scheduleTime,
    uploadStatus,
    longitude,
    therapistId,
    patientId,
    startTime,
    endTime,
    date
  } = req.body;
  try {
    const booking = await bookingService.createBooking(
      patient,
      therapist,
      address,
      addressType,
      serviceType,
      latitude,
      expiryTime,
      scheduleTime,
      uploadStatus,
      longitude,
      therapistId,
      patientId,
      startTime,
      endTime,
      date
    );
    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const booking = await bookingService.getBookings();
    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.getBookingById = async (req, res) => {
  const booking = await bookingService.getBookingById(req.params.id);
  if (!booking) return res.status(404).send("Booking not found");
  res.send(booking);
};
exports.findBookingById = async (req, res) => {
  const booking = await bookingService.findBookingById(req.body);
  if (!booking) return res.status(404).send("Booking not found");
  res.send(booking);
};
exports.updateBooking = async (req, res) => {
  const {
    patient,
    therapist,
    address,
    addressType,
    serviceType,
    latitude,
    expiryTime,
    scheduleTime,
    uploadStatus,
    longitude,
    therapistId,
    patientId,
    startTime,
    endTime,
    date
  } = req.body;
  try {
    const booking = await bookingService.updateBooking(
      req.params.id,
      patient,
      therapist,
      address,
      addressType,
      serviceType,
      latitude,
      expiryTime,
      scheduleTime,
      uploadStatus,
      longitude,
      therapistId,
      patientId,
      startTime,
      endTime,
      date

    );
    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteBooking = async (req, res) => {
  const booking = await bookingService.deleteBooking(req.params.id);
  res.send(booking);
};
