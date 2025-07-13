import mongoose from 'mongoose';

const medicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true
    },
    fieldName: {
      type: String,
      required: true,
      unique: true, // para evitar campos duplicados
      trim: true
    },
    type: {
      type: String,
      enum: ['yes-no', 'text', 'textarea'],
      default: 'yes-no'
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('MedicalQuestion', medicalQuestionSchema);
