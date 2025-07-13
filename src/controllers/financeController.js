import MaterialEntry from '../models/MaterialEntry.js';
import Payment from '../models/Payment.js';

// Criar entrada de material
export const addMaterial = async (req, res) => {
  try {
    const material = await MaterialEntry.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar recebimento
export const addPayment = async (req, res) => {
  try {
    const payment = await Payment.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar balanço geral
export const getBalance = async (req, res) => {
  try {
    const { start, end } = req.query;
    const createdBy = req.user.id;

    const dateFilter = {};
    if (start && end) {
      dateFilter.date = {
        $gte: new Date(start),
        $lte: new Date(end)
      };
    }

    const [materials, payments] = await Promise.all([
      MaterialEntry.find({ createdBy, ...dateFilter }),
      Payment.find({ createdBy, ...dateFilter })
    ]);

    const totalGastos = materials.reduce((sum, m) => sum + (m.cost * m.quantity), 0);
    const totalRecebido = payments.reduce((sum, p) => sum + p.amount, 0);
    const saldo = totalRecebido - totalGastos;

    res.json({
      totalRecebido,
      totalGastos,
      saldo,
      materiais: materials,
      recebimentos: payments
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

