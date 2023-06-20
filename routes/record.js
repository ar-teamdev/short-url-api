var express = require('express');
var router = express.Router();
var recordController = require('../controllers/record');

router.post('/', recordController.createRecord); 

// router.get('/', recordController.getAllPackage); 

module.exports = router;