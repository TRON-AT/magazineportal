import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;
const DB_NAME = process.env.DB_NAME as string;

if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable');
if (!DB_NAME) throw new Error('Please define the DB_NAME environment variable');

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(`${MONGODB_URI}/${DB_NAME}`).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
} 