
// import express
const express = require('express');

// import userRoutes
const userRoutes = require("./userRoutes")
const adminRoutes = require("./adminRoutes")

// import PortfolioRoutes
const PortfolioRoutes = require("./PortfolioRoutes")

// import CommunityRoutes
const CommunityRoutes = require("./CommunityRoutes")

// import CompanyProfile
const CompanyProfile = require("./CompanyProfileRoutes")

// import DefineItem
const DefineItem = require("./DefineItemRoutes")


// import PackingList
const PackingList = require("./PackingListRoutes")

const invoiceRoutes = require("./invoiceRoutes")

const Legder = require("./LegderRoutes")

const priceList = require("./PriceListRoutes")

const cardBook = require("./CardBookRoutes")

const defineAccount = require("./DefineAccountRoutes")

const productVerification = require("./ProductVerificationRoutes")
// import router
const router = express.Router();

// import multer
const multer = require('multer');

// import uuid
const { v4 } = require('uuid');

// import documentController
const documentController = require("../controller/documentController")

// define storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './downloads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = `${v4()}`;
        cb(null, uniqueSuffix + file.originalname);
    },
});

// define upload
const upload = multer({ storage: storage });

// define router
router.use(`/user`, userRoutes);
router.use(`/admin`, adminRoutes);
router.use(`/portfolio`, PortfolioRoutes);
router.use(`/community`, CommunityRoutes);
router.use(`/CompanyProfile`, CompanyProfile);
router.use(`/PackingList`, PackingList);
router.use(`/DefineItem`, DefineItem);
router.use(`/ledger`, Legder);
router.use(`/priceList`, priceList);
router.use(`/cardBook`, cardBook);
router.use(`/defineAccount`, defineAccount);
router.use(`/productVerification`, productVerification);





router.use(`/invoice`, invoiceRoutes);
router.post('/upload', upload.array('file'), documentController.Upload);
router.post('/file/delete', documentController.deleteFile);

// export router
module.exports = router;
