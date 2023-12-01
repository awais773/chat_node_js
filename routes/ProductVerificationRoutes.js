const express = require('express');
const productVerificationController = require("../controller/ProductVerificationController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications, productVerificationController.create);
router.get('/get', authentications, productVerificationController.get);
router.get('/get/:Id', authentications, productVerificationController.find);
router.put('/update/:Id', authentications, productVerificationController.update);
router.delete('/delete/:id', authentications, productVerificationController.Delete);


module.exports = router;
