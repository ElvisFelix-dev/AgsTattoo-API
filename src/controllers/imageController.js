import Client from '../models/Client.js';

export const uploadProfilePhoto = async (req, res) => {
  try {
    const { clientId } = req.params;
    const imageUrl = req.file.path;

    const updated = await Client.findByIdAndUpdate(
      clientId,
      { photoUrl: imageUrl },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
