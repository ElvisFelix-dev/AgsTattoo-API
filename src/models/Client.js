import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: String,
  email: String,
  address: String,
  cpf: { type: String, unique: true },
  photoUrl: String,

  medicalFormAnswers: {
    type: Map,
    of: String
  },

  signatureUrl: String,

    history: [
    {
      date: Date,
      artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      budget: String,
      designUrl: String,
      finalPhotos: [String],
      notes: String
    }
  ],

  // Referência ao admin que criou
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

}, { timestamps: true });

export default mongoose.model('Client', clientSchema);
