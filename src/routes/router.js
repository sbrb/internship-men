const express = require('express');
const router = express.Router();
const { createCollege, getCollege } = require('../controllers/collegeController.js');
const { createInterns } = require('../controllers/internController.js');

router.post('/colleges', createCollege);
router.get('/collegeDetails', getCollege);
router.post('/interns', createInterns);

module.exports = router;
