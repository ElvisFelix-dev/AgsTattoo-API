import express from 'express';
import {
  createClient,
  getClientsByAdmin,
  getClientById
} from '../controllers/clientController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Criar cliente (associado ao admin logado)
router.post('/', verifyToken, createClient);

// Listar todos os clientes criados pelo admin logado
router.get('/', verifyToken, getClientsByAdmin);

// Buscar cliente específico por ID
router.get('/:id', verifyToken, getClientById);

export default router;
