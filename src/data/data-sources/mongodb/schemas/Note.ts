import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  id: { type: String, required: true },
  content: { type: String, required: true },
  important: { type: Boolean, required: true },
  updatedAt: { type: Date, required: true },
  createdAt: { type: Date, required: true },
});

export default mongoose.model('Note', noteSchema);
