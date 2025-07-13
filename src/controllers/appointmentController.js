import Appointment from '../models/Appointment.js';
import Client from '../models/Client.js';
import { sendAppointmentEmail } from '../utils/sendEmail.js';
import { sendWhatsAppMessage } from '../utils/sendWhatsApp.js';

export const createAppointment = async (req, res) => {
  try {
    const { clientId, date, service, notes } = req.body;

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: 'Cliente não encontrado' });

    const appointment = await Appointment.create({
      client: clientId,
      date,
      service,
      notes,
      createdBy: req.user.id
    });

    // Enviar e-mail e WhatsApp
    await sendAppointmentEmail(client.email, {
      name: client.fullName,
      date,
      service
    });

    await sendWhatsAppMessage(client.phone, {
      name: client.fullName,
      date,
      service
    });

    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
