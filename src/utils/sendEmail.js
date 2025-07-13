import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // ou 'hotmail', 'outlook' etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendResetEmail = async (to, token) => {
  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: `"Ags Tattoo" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Recuperação de Senha - Ags Tattoo',
    html: `
      <p>Você solicitou a redefinição de senha.</p>
      <p>Clique no link abaixo para criar uma nova senha:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>Este link expira em 30 minutos.</p>
    `
  };

  return transporter.sendMail(mailOptions);
};
