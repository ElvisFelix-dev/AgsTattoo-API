import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

export const sendWhatsAppMessage = async (to, { name, date, service }) => {
  const formattedDate = new Date(date).toLocaleString('pt-BR');
  const message = `Olá, ${name}! Seu agendamento está confirmado para ${formattedDate} — ${service || 'Tatuagem'}.`;

  return client.messages.create({
    body: message,
    from: 'whatsapp:+14155238886', // Twilio sandbox
    to: `whatsapp:+55${to.replace(/\D/g, '')}`
  });
};
