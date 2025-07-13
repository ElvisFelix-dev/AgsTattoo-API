import Client from '../models/Client.js';

// Criar um novo cliente
export const createClient = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      address,
      cpf,
      photoUrl,
      medicalFormAnswers,
      signatureUrl
    } = req.body;

    const client = await Client.create({
      fullName,
      phone,
      email,
      address,
      cpf,
      photoUrl,
      medicalFormAnswers,
      signatureUrl,
      createdBy: req.user.id // ID do admin logado
    });

    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os clientes criados pelo admin logado
export const getClientsByAdmin = async (req, res) => {
  try {
    const clients = await Client.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar cliente por ID (só se for do admin logado)
export const getClientById = async (req, res) => {
  try {
    const client = await Client.findOne({
      _id: req.params.id,
      createdBy: req.user.id
    });

    if (!client) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
