const express = require('express');
const uploadDocumentController = require('../controller/uploadDocumentController');
const multer = require('multer');
const { v4 } = require('uuid');
const userController = require('../controller/userController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './downloads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${v4()} ${Math.random()} ${new Date()} `;
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/uploadFile', upload.array('document'), uploadDocumentController.uploadDocument);
router.get('/viewFile', uploadDocumentController.getFile);
router.put('/update', userController.updateAppRes);


module.exports = router;
