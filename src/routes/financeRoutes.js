import express from 'express';
import { addMaterial, addPayment, getBalance } from '../controllers/financeController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/materials', verifyToken, addMaterial);
router.post('/payments', verifyToken, addPayment);
router.get('/balance', verifyToken, getBalance);

export default router;
