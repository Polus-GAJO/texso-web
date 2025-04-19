import { NextRequest } from 'next/server';
import db from '@/lib/db';

export async function GET(req: NextRequest, { params }: { params: { qoloN: string } }) {
  const qoloN = params.qoloN;

  try {
    const [rows] = await db.query(
      'SELECT Qolo FROM Qolos WHERE QoloN = ?',
      [qoloN]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'قولو غير موجود' }), { status: 404 });
    }

    return Response.json(rows[0]);
  } catch (error: unknown) {
    const err = error as Error;
    return Response.json({ error: err.message }, { status: 500 });
  }  
}
