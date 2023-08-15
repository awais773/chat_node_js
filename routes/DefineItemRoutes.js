const express = require('express');
const DefineItemController = require("../controller/DefineItemController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications ,DefineItemController.create);
 router.get('/get', DefineItemController.get);
 router.get('/get/:Id', DefineItemController.find);
router.put('/update/:Id', DefineItemController.update);
router.delete('/delete/:id', DefineItemController.DefineItemDelete);


module.exports = router;
