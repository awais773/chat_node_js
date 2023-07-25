const express = require('express');
const PortfolioController = require("../controller/PortfolioController")


const router = express.Router();

router.post('/create', PortfolioController.create);
 router.get('/get', PortfolioController.get);
 router.get('/get/:Id', PortfolioController.find);
router.put('/update/:Id', PortfolioController.update);
router.delete('/delete/:id', PortfolioController.portfolioDelete);


module.exports = router;
