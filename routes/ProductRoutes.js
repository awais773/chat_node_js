const express = require('express');
const ProductController = require("../controller/ProductController")
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');


const router = express.Router();

router.post('/create', authentications, ProductController.create);
router.get('/get', authentications,paginationMiddleware, ProductController.get);
router.get('/get/:Id', authentications, ProductController.find);
router.put('/update/:Id', authentications, ProductController.update);
router.delete('/delete/:id', authentications, ProductController.Delete);
router.post('/updatePrintStatus', authentications, ProductController.updatePrintStatus);
router.get('/getUnPrint', authentications, ProductController.getUnPrint);
router.post('/scan', ProductController.scan);





module.exports = router;
