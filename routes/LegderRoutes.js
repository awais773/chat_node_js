const express = require('express');
const LedgerController = require("../controller/LedgerController")
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications, LedgerController.create);
router.get('/get', authentications, LedgerController.get);
router.get('/get/:Id', authentications, LedgerController.find);
router.put('/update/:Id', authentications, LedgerController.update);
router.delete('/delete/:id', authentications, LedgerController.Delete);


module.exports = router;
