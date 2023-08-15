const express = require('express');
const InvoiceController = require("../controller/InvoiceController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications ,InvoiceController.create);
 router.get('/get', InvoiceController.get);
 router.get('/get/:Id', InvoiceController.find);
router.put('/update/:Id', InvoiceController.update);
router.delete('/delete/:id', InvoiceController.PackingListDelete);


module.exports = router;
