import MedicalQuestion from '../models/MedicalQuestion.js';

// 🔹 Criar nova pergunta
export const createQuestion = async (req, res) => {
  try {
    const { question, fieldName, type, required } = req.body;

    const existing = await MedicalQuestion.findOne({ fieldName });
    if (existing) {
      return res.status(400).json({ message: 'Já existe uma pergunta com esse campo (fieldName)' });
    }

    const newQuestion = await MedicalQuestion.create({
      question,
      fieldName,
      type: type || 'yes-no',
      required: required ?? true
    });

    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Listar todas as perguntas
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await MedicalQuestion.find().sort({ createdAt: 1 });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Deletar pergunta por ID
export const deleteQuestion = async (req, res) => {
  try {
    const deleted = await MedicalQuestion.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Pergunta não encontrada' });
    }

    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
