const express = require('express');
const LedgerController = require("../controller/LedgerController")
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');


const router = express.Router();

router.post('/create', authentications, LedgerController.create);
router.get('/get', authentications,paginationMiddleware, LedgerController.get);
router.post('/getByUserId', authentications, LedgerController.getByUserId);
router.get('/get/:Id', authentications, LedgerController.find);
router.put('/update/:Id', authentications, LedgerController.update);
router.delete('/delete/:id', authentications, LedgerController.Delete);
router.post('/LedgerSearch', authentications, LedgerController.LedgerSearch);


module.exports = router;
