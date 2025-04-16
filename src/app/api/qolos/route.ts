import { NextResponse } from 'next/server';
import db from '@/db';

export async function GET() {
  try {
    const [rows] = await db.execute('SELECT Qolo FROM Qolos');
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
