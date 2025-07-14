import express from 'express';
import {
  register,
  login,
  forgotPassword,
  resetPassword
} from '../controllers/authController.js';

const router = express.Router();

// Rota de cadastro (registro) do admin
router.post('/register', register);

// Rota de login
router.post('/login', login);

// Rota de recuperação de senha
router.post('/forgot-password', forgotPassword);

// Rota de redefinição de senha
router.post('/reset-password', resetPassword);

export default router;
