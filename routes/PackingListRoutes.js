const express = require('express');
const PackingListController = require("../controller/PackingListController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications ,PackingListController.create);
 router.get('/get',authentications,  PackingListController.get);
 router.get('/get/:Id',authentications,  PackingListController.find);
router.put('/update/:Id',authentications,  PackingListController.update);
router.delete('/delete/:id',authentications,  PackingListController.PackingListDelete);


module.exports = router;
