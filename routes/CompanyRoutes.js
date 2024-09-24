const express = require('express');
const CompanyController = require("../controller/CompanyUserController");
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');


const router = express.Router();

router.post('/register', CompanyController.signup);
router.post('/login', CompanyController.login);
router.get('/get', authentications,paginationMiddleware, CompanyController.userlists);
router.get('/get/:Id', authentications, CompanyController.userFind);
router.put('/update/:userId', authentications, CompanyController.update);
router.delete('/delete/:id', authentications, CompanyController.Delete);
router.get('/dashboard', CompanyController.activeUserCount);
router.post('/Approved/:userId', authentications, CompanyController.Approved);
router.post('/CompanySearch', authentications, CompanyController.CompanySearch);



module.exports = router;
