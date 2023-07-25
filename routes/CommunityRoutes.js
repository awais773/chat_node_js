const express = require('express');
const CommunityController = require("../controller/CommunityController")


const router = express.Router();

 router.post('/create', CommunityController.create);
 router.get('/get', CommunityController.get);
 router.get('/get/:Id', CommunityController.find);
 router.put('/update/:Id', CommunityController.update);
 router.delete('/delete/:id', CommunityController.communityDelete);


module.exports = router;
