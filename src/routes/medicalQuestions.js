import express from 'express';
import {
  createQuestion,
  getAllQuestions,
  deleteQuestion
} from '../controllers/medicalQuestionController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Todas as rotas protegidas
router.get('/', verifyToken, getAllQuestions);
router.post('/', verifyToken, createQuestion);
router.delete('/:id', verifyToken, deleteQuestion);

export default router;
