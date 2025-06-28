import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Admin from '@/lib/models/Admin';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  await connectDB();
  const admin = await Admin.findOne({ username });
  if (!admin) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const isMatch = await bcrypt.compare(password, admin.passwordHash);
  if (!isMatch) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const token = jwt.sign({ adminId: admin._id, username: admin.username }, JWT_SECRET, { expiresIn: '1d' });
  return NextResponse.json({ token });
} 