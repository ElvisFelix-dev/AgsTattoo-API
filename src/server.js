import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import financeRoutes from './routes/financeRoutes.js';
import historyRoutes from './routes/historyRoutes.js';

dotenv.config();

const app = express();

// Banco de dados
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('📊 Connected to db'))
  .catch((err) => console.error('Error connected db:', err.message));

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/history', historyRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor do Tattoo Studio Manager rodando! ✅');
});

// Iniciar servidor
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`💻 Server running ${PORT}`);
});
