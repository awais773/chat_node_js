const express = require('express');
const PackingListController = require("../controller/PackingListController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications ,PackingListController.create);
 router.get('/get', PackingListController.get);
 router.get('/get/:Id', PackingListController.find);
router.put('/update/:Id', PackingListController.update);
router.delete('/delete/:id', PackingListController.PackingListDelete);


module.exports = router;
