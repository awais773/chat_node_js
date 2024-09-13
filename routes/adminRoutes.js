const express = require('express');
const userController = require("../controller/adminController");
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/get', authentications, userController.userlists);
router.get('/get/:Id', authentications, userController.userFind);
router.put('/update/:userId', authentications, userController.update);
router.delete('/delete/:id', authentications, userController.Delete);
router.delete('/UserDelete/:id', authentications, userController.UserDelete);
router.get('/dashboard', userController.activeUserCount);


module.exports = router;
