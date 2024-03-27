const express = require('express');
const DefineItemController = require("../controller/DefineItemController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications, DefineItemController.create);
router.get('/get', authentications, DefineItemController.get);
router.get('/get/:Id', authentications, DefineItemController.find);
router.put('/update/:Id', authentications, DefineItemController.update);
router.delete('/delete/:id', authentications, DefineItemController.DefineItemDelete);
router.post('/DefineItemSearch', authentications, DefineItemController.DefineItemSearch);



module.exports = router;
