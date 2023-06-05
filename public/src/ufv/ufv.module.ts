import { Schema, Document, model } from 'mongoose';

export interface UFV extends Document {
  value: number;
  createdAt: Date;
}

const UFVSchema = new Schema<UFV>({
  value: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<UFV>('UFV', UFVSchema);

