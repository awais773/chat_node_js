const express = require('express');
const InvoiceController = require("../controller/InvoiceController")
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');



const router = express.Router();

router.post('/create', authentications, InvoiceController.create);
router.get('/get', authentications,paginationMiddleware, InvoiceController.get);
router.get('/get/:Id', authentications, InvoiceController.find);
router.put('/update/:Id', authentications, InvoiceController.update);
router.delete('/delete/:id', authentications, InvoiceController.Delete);
router.post('/getByUserId', authentications, InvoiceController.getByUserId);
router.post('/invoicesSearch', authentications, InvoiceController.invoicesSearch);




module.exports = router;
