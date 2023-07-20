const express = require('express');
const therapistController = require('../controller/therapistController');
const multer = require('multer');
const { v4 } = require('uuid');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const upload = multer({ dest: 'uploads/' });

        const uniqueSuffix = `${v4()} `;
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
const uploadMultipleImages = multer({ dest: 'uploads/' });


router.post('/add', therapistController.createTherapist);
router.post('/login', therapistController.loginTherapist);
router.get('/view', therapistController.listTherapists);
router.get('/viewAll', therapistController.getAllTherapistsAndPatients);
router.delete('/del/:id', therapistController.deleteTherapist);
router.put('/update/:id', therapistController.editTherapist);
router.get('/get/:id', therapistController.getTherapist);
router.post('/file', upload.single('file'), therapistController.uploadFile);
router.delete('/file', therapistController.deleteFile);
router.post('/zip', therapistController.createZip);


module.exports = router;
