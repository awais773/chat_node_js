const express = require('express');
const CommunityController = require("../controller/CommunityController")
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');


const router = express.Router();

router.post('/create', authentications, CommunityController.create);


// i need to create route for get reported posts
router.get('/get', authentications, paginationMiddleware, CommunityController.get);
router.get('/get/:Id', authentications, CommunityController.find);
router.put('/update/:Id', authentications, CommunityController.update);
router.delete('/delete/:id', authentications, CommunityController.communityDelete);

router.post('/filters', authentications, CommunityController.filtersCommunity);
router.get('/myCommunity', authentications, CommunityController.myCommunity);
router.post('/CommentCreate', authentications, CommunityController.CommentCreate);
router.post('/getByPostIdComment', authentications, CommunityController.getByPostIdComment);
router.post('/likeCommunityPost', authentications, CommunityController.likeCommunityPost);
router.post('/CommunitySearch', authentications, CommunityController.CommmunitySearch);





module.exports = router;
