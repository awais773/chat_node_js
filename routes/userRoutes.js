const express = require('express');
const NotificationController = require("../controller/NotificationController");
const userController = require("../controller/userController");
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/get', authentications, userController.userlists);
router.get('/get/:Id', authentications ,  userController.userFind);
router.put('/update/:userId', authentications, userController.update);
router.delete('/delete/:id', authentications, userController.Delete);
router.get('/dashboard', userController.activeUserCount);
router.post('/sendNotification', NotificationController.sendNotification);


module.exports = router;
