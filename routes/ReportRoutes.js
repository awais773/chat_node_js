const express = require('express');
const AllReportController = require("../controller/AllReportController");
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');


const router = express.Router();

router.post('/create', authentications,AllReportController.create);
router.get('/getReportedPosts', authentications, paginationMiddleware, AllReportController.getReportedPosts);
router.get('/getReporUser', authentications, paginationMiddleware, AllReportController.getReporUser);
router.put('/updateCommunity/:Id', authentications, AllReportController.updateCommunity);

module.exports = router;
