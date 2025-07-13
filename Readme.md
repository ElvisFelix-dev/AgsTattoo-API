
# 🧷 Tattoo Studio Manager

Plataforma de gerenciamento para estúdios de tatuagem, desenvolvida com a stack MERN (MongoDB, Express, React, Node.js).
Permite cadastro de clientes, histórico de serviços, agendamentos, formulários médicos, controle financeiro e envio de notificações por e-mail e WhatsApp.

---

## 📦 Tecnologias

- **Frontend:** ReactJS + TailwindCSS (Vite)
- **Backend:** Node.js + Express
- **Banco de dados:** MongoDB (Mongoose)
- **Upload de imagens:** Cloudinary
- **Autenticação:** JWT
- **Envio de e-mail:** Nodemailer (Gmail)
- **WhatsApp:** Twilio (ou similar)

---

## 🔐 Recursos da aplicação

### 👤 Admin (usuário autenticado)
- Cadastro e login
- Redefinição de senha via token por e-mail

### 👥 Clientes
- Cadastro com:
  - Nome, telefone, e-mail, CPF, endereço
  - Foto de perfil (opcional)
  - Questionário médico
  - Assinatura digital via touch

- Busca por nome, CPF ou data de atendimento

### 📋 Histórico de Atendimento
- Armazena data, orçamento, artista responsável
- Upload de desenho definido (design)
- Upload de fotos da tatuagem finalizada
- Anotações gerais
- Edição e remoção de entradas

### 📅 Agendamento
- Criado apenas por admin
- Associado a cliente já existente (ou cria novo)
- Envio automático de e-mail e WhatsApp ao cliente com data e serviço

### 📊 Financeiro
- Entradas de materiais (com nome, valor, quantidade e data)
- Recebimentos de clientes (valor, método, data)
- Filtro por data
- Cálculo de saldo:
  ```
  saldo = totalRecebido - totalGastos
  ```

---

## 🛠️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/tattoo-studio-manager.git
cd tattoo-studio-manager
```

### 2. Instale as dependências do backend

```bash
cd backend
npm install
```

### 3. Configure o arquivo `.env`

Crie o arquivo `.env` na raiz do `backend/` com:

```env
PORT=3333
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/tattoo
JWT_SECRET=suachavesecreta

EMAIL_USER=seuemail@gmail.com
EMAIL_PASS=senhadeappdoconta

CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=sua_api_secret

TWILIO_SID=your_twilio_sid
TWILIO_AUTH=your_twilio_auth
```

### 4. Rode o backend

```bash
npm run dev
```

---

## 📁 Estrutura de Pastas (Backend)

```
backend/
├── controllers/
├── models/
├── routes/
├── utils/
├── middleware/
├── .env
└── server.js
```

---

## ✅ Próximos passos sugeridos

- Painel com gráficos financeiros no frontend (ex: Recharts)
- Dashboard de agendamentos por mês
- Relatórios em PDF ou Excel
- Permissões por função (admin/tatuador)
- Upload de assinatura com armazenamento no Cloudinary

---

## 📄 Licença

MIT - Desenvolvido por Elvis Felix
