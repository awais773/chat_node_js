const express = require('express');
const userRoutes = require("./userRoutes")
const PortfolioRoutes = require("./PortfolioRoutes")
const CommunityRoutes = require("./CommunityRoutes")


const router = express.Router();

router.use(`/user`, userRoutes);
router.use(`/portfolio`, PortfolioRoutes);
router.use(`/community`, CommunityRoutes);





module.exports = router;
