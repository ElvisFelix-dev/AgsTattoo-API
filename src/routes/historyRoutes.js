import express from 'express';
import upload from '../middleware/upload.js';
import { addClientHistory } from '../controllers/historyController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Espera múltiplos campos de imagem
router.post(
  '/clients/:clientId/history',
  verifyToken,
  upload.fields([
    { name: 'design', maxCount: 5 },
    { name: 'final', maxCount: 5 }
  ]),
  addClientHistory
);

router.put(
  '/clients/:clientId/history/:entryId',
  verifyToken,
  upload.fields([
    { name: 'design', maxCount: 5 },
    { name: 'final', maxCount: 5 }
  ]),
  updateHistoryEntry
);

router.delete(
  '/clients/:clientId/history/:entryId',
  verifyToken,
  deleteHistoryEntry
);

router.put(
  '/clients/:clientId/history/:entryId/remove-image',
  verifyToken,
  removeImageFromHistory
);

export default router;
