const express = require('express');
const CommunityController = require("../controller/CommunityController")
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');


const router = express.Router();

router.post('/create', authentications, CommunityController.create);
router.get('/get', authentications, paginationMiddleware, CommunityController.get);
router.get('/get/:Id', authentications, CommunityController.find);
router.put('/update/:Id', authentications, CommunityController.update);
router.delete('/delete/:id', authentications, CommunityController.communityDelete);


module.exports = router;
