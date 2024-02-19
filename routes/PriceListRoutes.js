const express = require('express');
const priceListController = require("../controller/PriceListController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications, priceListController.create);
router.get('/get', authentications, priceListController.get);
router.get('/get/:Id', authentications, priceListController.find);
router.put('/update/:Id', authentications, priceListController.update);
router.delete('/delete/:id', authentications, priceListController.Delete);


module.exports = router;
