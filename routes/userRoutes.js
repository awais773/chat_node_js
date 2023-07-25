const express = require('express');
const userController = require("../controller/userController")


const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/get', userController.userlists);
router.get('/get/:Id', userController.userFind);
router.put('/update/:userId', userController.update);
router.delete('/delete/:id', userController.Delete);



module.exports = router;
