🧷 Tattoo Studio Manager

Plataforma de gerenciamento para estúdios de tatuagem, desenvolvida com a stack MERN (MongoDB, Express, React, Node.js).Permite cadastro de clientes, histórico de serviços, agendamentos, formulários médicos, controle financeiro e envio de notificações por e-mail e WhatsApp.

📦 Tecnologias

Frontend: ReactJS + TailwindCSS (Vite)

Backend: Node.js + Express

Banco de dados: MongoDB (Mongoose)

Upload de imagens: Cloudinary

Autenticação: JWT

Envio de e-mail: Nodemailer (Gmail)

WhatsApp: Twilio (ou similar)

🔐 Recursos da aplicação

👤 Admin (usuário autenticado)

Cadastro e login

Redefinição de senha via token por e-mail

👥 Clientes

Cadastro com:

Nome, telefone, e-mail, CPF, endereço

Foto de perfil (opcional)

Questionário médico

Assinatura digital via touch

Busca por nome, CPF ou data de atendimento

📋 Histórico de Atendimento

Armazena data, orçamento, artista responsável

Upload de desenho definido (design)

Upload de fotos da tatuagem finalizada

Anotações gerais

Edição e remoção de entradas

📅 Agendamento

Criado apenas por admin

Associado a cliente já existente (ou cria novo)

Envio automático de e-mail e WhatsApp ao cliente com data e serviço

📊 Financeiro

Entradas de materiais (com nome, valor, quantidade e data)

Recebimentos de clientes (valor, método, data)

Filtro por data

Cálculo de saldo:
