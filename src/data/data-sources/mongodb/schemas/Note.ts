import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    id: String,
    content: String,
    important: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Note', noteSchema);
