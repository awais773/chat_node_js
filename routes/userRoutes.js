const express = require('express');
const userController = require("../controller/userController");
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');


const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/get', authentications, paginationMiddleware, userController.userlists);
router.get('/get/:Id', authentications, userController.userFind);
router.put('/update/:userId', authentications, userController.update);
router.delete('/delete', authentications, userController.Delete);
router.get('/dashboard', userController.activeUserCount);
router.post('/addFriend', authentications,userController.addFreind);
router.post('/isFriend', authentications, userController.isFriend);
router.post('/reportUser', authentications, userController.addReportedUser);
router.post('/isReport', authentications, userController.isReportedUser);
router.post('/blockUser', authentications, userController.addBlockedUser);
router.post('/isBlock', authentications, userController.isBlockedUser);
router.get('/reportUsersAll', authentications, userController.reportedAllUsers);
router.get('/getAllFriends', authentications, userController.getAllFriends);
router.post('/unfriend', authentications, userController.unfriend);
router.post('/UserSearch', authentications, userController.UserSearch);







module.exports = router;
