const express = require('express');
const BankDetailController = require("../controller/BankDetailController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications, BankDetailController.create);
router.get('/get', authentications, BankDetailController.get);
router.get('/get/:Id', authentications, BankDetailController.find);
router.put('/update/:Id', authentications, BankDetailController.update);
router.delete('/delete/:id', authentications, BankDetailController.Delete);


module.exports = router;
