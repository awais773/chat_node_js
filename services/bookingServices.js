const Patient = require("../modal/Patient");
const Booking = require("../modal/booking");

exports.createBooking = async (
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
) => {
  const booking = await Booking.create({
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
  });

  return booking;
};

exports.getBookings = async () => {
  const bookings = await Booking.findAll({
    include: [Patient],
    order: [["id", "ASC"]],
    
  });
  return bookings;
};

exports.getBookingById = async (id) => {
  const booking = await Booking.findByPk(id);
  return booking;
};
exports.findBookingById = async (body) => {
  const booking = await Booking.findAll({
    where: {
      therapistId: body.therapistId,
    },
    include: [Patient], // Include the Patient model in the query

  });
  return booking;
};

exports.updateBooking = async (

  id,
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
) => {
  const booking = await Booking.findByPk(id);
  if (!booking) throw new Error("Booking not found");
  booking.patient = patient
  booking.therapist = therapist,
  booking.address = address;
  booking.addressType = addressType;
  booking.serviceType = serviceType;
  booking.latitude = latitude;
  booking.expiryTime = expiryTime;
  booking.scheduleTime = scheduleTime;
  booking.uploadStatus = uploadStatus;
  booking.longitude = longitude;
  booking.therapistId = therapistId;
  booking.patientId = patientId;
  booking.startTime = startTime;
  booking.endTime = endTime;
  booking.date = date;
  await booking.save();

  return booking;
};

exports.deleteBooking = async (id) => {
  const booking = await Booking.findByPk(id);
  if (!booking) throw new Error("Booking not found");

  await booking.destroy();

  return booking;
};
