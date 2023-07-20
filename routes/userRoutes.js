const express = require('express');
const userController = require('../controller/userController');

const multer = require('multer');
const { v4 } = require('uuid');

const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const upload = multer({ dest: 'uploads/' });

        const uniqueSuffix = `${v4()}`;
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({ storage: storage });
const uploadMultipleImages = multer({ dest: 'uploads/' });




router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/upload-image', upload.single('image'), userController.uploadImage);
router.post('/upload-multiple', upload.array('image', 10), userController.uploadMultipleImages);
router.post('/find', userController.findBookingById);
router.get('/view-image', userController.getImage);
router.delete('/delete-image/:id', userController.deleteImage);
// router.put('/update/:id', userController.updateAppRes);





module.exports = router;
