const express = require('express');
const patientController = require('../controller/patientController');

const router = express.Router();

router.post('/add', patientController.createPatient);
router.get('/view', patientController.listPatients);
router.delete('/del/:id', patientController.deletePatient);
router.put('/update/:id', patientController.editPatient);
router.get('/:id', patientController.getPatient);


module.exports = router;
