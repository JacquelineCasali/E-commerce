const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController')
router.get('/', departmentController.index)
module.exports = router;