import express from  'express';
const router = express.Router();
import { createCollege, getCollege } from '../controllers/collegeController.js';
import { createInterns } from '../controllers/internController.js';

router.post('/colleges', createCollege);
router.get('/collegeDetails', getCollege);
router.post('/interns', createInterns);

export default router;
