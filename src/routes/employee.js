const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee');

// GET employee
router.get('/', employeeController.findAll);

// POST employee
router.post('/', employeeController.create);

// GET employee id
router.get('/:id', employeeController.findById);

// PUT employee id
router.put('/:id', employeeController.update);

// DELETE employee id
router.delete('/:id', employeeController.delete);

module.exports = router;

