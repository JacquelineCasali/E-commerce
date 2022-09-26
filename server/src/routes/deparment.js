const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController')
const produtosByDepartmentController = require('../controllers/produtosByDepartmentController')
router.get('/', departmentController.index)
router.get('/:name', produtosByDepartmentController.index)
module.exports = router;