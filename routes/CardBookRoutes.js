const express = require('express');
const cardBookController = require("../controller/CardBookController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications, cardBookController.create);
router.get('/get', authentications, cardBookController.get);
router.get('/get/:Id', authentications, cardBookController.find);
router.put('/update/:Id', authentications, cardBookController.update);
router.delete('/delete/:id', authentications, cardBookController.Delete);


module.exports = router;
