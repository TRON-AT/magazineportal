import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Pdf from '@/lib/models/Pdf';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET() {
  await connectDB();
  const pdfs = await Pdf.find().sort({ createdAt: -1 });
  return NextResponse.json(pdfs);
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const token = auth.replace('Bearer ', '');
  try {
    jwt.verify(token, JWT_SECRET);
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
  const { title, description, pdfUrl } = await req.json();
  if (!title || !description || !pdfUrl) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  await connectDB();
  const pdf = await Pdf.create({ title, description, pdfUrl });
  return NextResponse.json(pdf, { status: 201 });
} 