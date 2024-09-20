const express = require('express');
const QuerieController = require("../controller/QuerieController")
const { authentications } = require('../middleware/authentication');
const { paginationMiddleware } = require('../middleware/pagination');


const router = express.Router();

router.post('/create', authentications ,QuerieController.create);
 router.get('/get',authentications,paginationMiddleware, QuerieController.get);
 router.get('/get/:Id',authentications,  QuerieController.find);
router.put('/update/:Id',authentications,  QuerieController.update);
router.delete('/delete/:id',authentications,  QuerieController.QuerieDelete);
router.post('/filters',authentications,  QuerieController.filtersQuerie);
//comments
router.post('/CommentCreate',authentications,  QuerieController.CommentCreate);
router.post('/getByPostIdComment',authentications,  QuerieController.getByPostIdComment);
router.post('/likeQueryPost',authentications,  QuerieController.likeQueryPost);


module.exports = router;
