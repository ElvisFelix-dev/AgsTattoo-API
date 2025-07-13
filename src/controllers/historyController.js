import Client from '../models/Client.js';

export const addClientHistory = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { date, artist, budget, notes } = req.body;

    const designUrls = req.files['design']?.map(file => file.path) || [];
    const finalPhotos = req.files['final']?.map(file => file.path) || [];

    const newEntry = {
      date,
      artist,
      budget,
      designUrl: designUrls,
      finalPhotos,
      notes
    };

    const client = await Client.findById(clientId);
    client.history.push(newEntry);
    await client.save();

    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateHistoryEntry = async (req, res) => {
  try {
    const { clientId, entryId } = req.params;
    const { date, artist, budget, notes } = req.body;

    const designUrls = req.files?.design?.map(file => file.path) || [];
    const finalPhotos = req.files?.final?.map(file => file.path) || [];

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: 'Cliente não encontrado' });

    const entry = client.history.id(entryId);
    if (!entry) return res.status(404).json({ message: 'Histórico não encontrado' });

    // Atualiza os campos
    if (date) entry.date = date;
    if (artist) entry.artist = artist;
    if (budget) entry.budget = budget;
    if (notes) entry.notes = notes;

    // Adiciona imagens novas (sem excluir as antigas)
    entry.designUrl.push(...designUrls);
    entry.finalPhotos.push(...finalPhotos);

    await client.save();
    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteHistoryEntry = async (req, res) => {
  try {
    const { clientId, entryId } = req.params;

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: 'Cliente não encontrado' });

    const entry = client.history.id(entryId);
    if (!entry) return res.status(404).json({ message: 'Histórico não encontrado' });

    entry.remove();
    await client.save();

    res.status(200).json({ message: 'Histórico removido com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeImageFromHistory = async (req, res) => {
  try {
    const { clientId, entryId } = req.params;
    const { url, field } = req.body; // field = 'designUrl' ou 'finalPhotos'

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: 'Cliente não encontrado' });

    const entry = client.history.id(entryId);
    if (!entry || !entry[field]) return res.status(404).json({ message: 'Imagem não encontrada' });

    entry[field] = entry[field].filter(img => img !== url);

    await client.save();
    res.status(200).json({ message: 'Imagem removida' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

