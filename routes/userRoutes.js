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
router.post('/addFriend', userController.addFreind);

module.exports = router;
