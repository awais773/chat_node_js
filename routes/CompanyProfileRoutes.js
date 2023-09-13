const express = require('express');
const CompanyProfileController = require("../controller/CompanyProfileController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications, CompanyProfileController.create);
router.get('/get', authentications, CompanyProfileController.get);
router.get('/get/:Id', authentications, CompanyProfileController.find);
router.put('/update/:Id', authentications, CompanyProfileController.update);
router.delete('/delete/:id', authentications, CompanyProfileController.CompanyProfileDelete);


module.exports = router;
