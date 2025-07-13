import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true
    },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['pix', 'dinheiro', 'cartão'], default: 'pix' },
    date: { type: Date, default: Date.now },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Payment', paymentSchema);
