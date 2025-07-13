import express from 'express';
import upload from '../middleware/upload.js';
import { uploadProfilePhoto } from '../controllers/imageController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post(
  '/clients/:clientId/photo',
  verifyToken,
  upload.single('image'),
  uploadProfilePhoto
);

export default router;
