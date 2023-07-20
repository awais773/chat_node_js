const express = require('express');
const userRoutes = require('./userRoutes');
const bookingRoutes = require('./bookingRoutes');
const patientRoutes = require('./patientRoutes');
const therapistRoutes = require('./therapistRoutes');
const uploadDocumentRoutes = require("./uploadDocumentRoutes")
const invoices = require("./invoices")


const router = express.Router();

router.use(`/user`, userRoutes);
router.use(`/patient`, patientRoutes);
router.use(`/booking`, bookingRoutes);
router.use(`/therapist`, therapistRoutes);
router.use(`/file`, uploadDocumentRoutes);
router.use(`/invoices`, invoices);




module.exports = router;
