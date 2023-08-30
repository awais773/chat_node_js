const express = require('express');
const PortfolioController = require("../controller/PortfolioController");
const { authentications } = require('../middleware/authentication');


const router = express.Router();

router.post('/create', authentications ,  PortfolioController.create);
 router.get('/get', authentications , PortfolioController.get);
 router.get('/get/:Id',authentications , PortfolioController.find);
router.put('/update/:Id',authentications , PortfolioController.update);
router.delete('/delete/:id',authentications , PortfolioController.portfolioDelete);


module.exports = router;
