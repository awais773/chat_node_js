const express = require("express");
const bookingController = require("../controller/bookingController");

const router = express.Router();

router.post("/add", bookingController.createBooking);
router.post("/find", bookingController.findBookingById);
router.get("/view", bookingController.getBookings);
router.get("/:id", bookingController.getBookingById);
router.put("/update/:id", bookingController.updateBooking);
router.delete("/del/:id", bookingController.deleteBooking);

module.exports = router;
