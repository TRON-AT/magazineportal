import mongoose, { Schema, Document, models } from 'mongoose';

export interface IPdf extends Document {
  title: string;
  description: string;
  pdfUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const PdfSchema = new Schema<IPdf>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pdfUrl: { type: String, required: true },
}, { timestamps: true });

export default models.Pdf || mongoose.model<IPdf>('Pdf', PdfSchema); 