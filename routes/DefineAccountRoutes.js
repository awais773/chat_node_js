const express = require('express');
const defineAccountController = require("../controller/DefineAccountController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications, defineAccountController.create);
router.get('/get', authentications, defineAccountController.get);
router.get('/get/:Id', authentications, defineAccountController.find);
router.put('/update/:Id', authentications, defineAccountController.update);
router.delete('/delete/:id', authentications, defineAccountController.Delete);


module.exports = router;
