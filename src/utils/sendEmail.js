import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // ou 587
  secure: false, // true para 465, false para 587
  auth: {
    user: process.env.EMAIL_USER ,
    pass: process.env.EMAIL_PASSW
  }
});

// 🔄 Renomeado aqui
export const sendEmail = async (to, token) => {
  const resetLink = `${process.env.FRONTEND_URL}/api/auth/reset-password?token=${token}`;
  dotenv.config()
  const mailOptions = {
    from: `"Ags Tattoo" <uxaaoktattoo@gmail.com>`,
    to,
    subject: 'Recuperação de Senha - Ags Tattoo',
    html: `
      <p>Você solicitou a redefinição de senha.</p>
      <p>Clique no link abaixo para criar uma nova senha:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>Este link expira em 30 minutos.</p>
    `
  };

  transporter.verify((error, success) => {
    if (error) {
      console.error('Erro ao conectar com o SMTP:', error);
    } else {
      console.log('✅ Conexão SMTP está pronta para enviar e-mails');
    }
  });

  // Envia o emai
  return transporter.sendMail(mailOptions);
};

// Continuação para agendamento
export const sendAppointmentEmail = async (to, { name, date, service }) => {
  const formattedDate = new Date(date).toLocaleString('pt-BR');

  const mailOptions = {
    from: `"Studio Tattoo" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Confirmação de Agendamento',
    html: `
      <p>Olá, ${name}!</p>
      <p>Seu agendamento está confirmado para:</p>
      <p><strong>${formattedDate}</strong> — Serviço: ${service || 'Tatuagem'}</p>
      <p>Nos vemos em breve!</p>
    `
  };

  return transporter.sendMail(mailOptions);
};
