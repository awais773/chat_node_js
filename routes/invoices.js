const express = require("express");
const invoicesController = require("../controller/invoices");
const multer = require("multer");
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const upload = multer({ dest: 'uploads/' });

        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
router.post("/add", invoicesController.createInvoioce);
router.get("/get", invoicesController.getInvoioces);
router.post("/update", invoicesController.update);
router.post("/filter", invoicesController.filter);
router.post("/email",upload.single('file'), invoicesController.email);
router.get("/get/:id", invoicesController.getInvoioce);

module.exports = router;
