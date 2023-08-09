const express = require('express');
const CompanyProfileController = require("../controller/CompanyProfileController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', CompanyProfileController.create);
 router.get('/get', CompanyProfileController.get);
 router.get('/get/:Id', CompanyProfileController.find);
router.put('/update/:Id', CompanyProfileController.update);
router.delete('/delete/:id', CompanyProfileController.CompanyProfileDelete);


module.exports = router;
