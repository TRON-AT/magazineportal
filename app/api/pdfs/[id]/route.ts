import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Pdf from '@/lib/models/Pdf';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

async function authenticate(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return null;
  }
  const token = auth.replace('Bearer ', '');
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await authenticate(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const { title, description, pdfUrl } = await req.json();
  await connectDB();
  const updated = await Pdf.findByIdAndUpdate(id, { title, description, pdfUrl }, { new: true });
  if (!updated) {
    return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
  }
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await authenticate(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  await connectDB();
  const deleted = await Pdf.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true });
} 