import { NextRequest } from 'next/server';
import db from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: { qoloN: string } }
) {
  const qoloN = params.qoloN;

  try {
    const [rows] = await db.query(
      `
      SELECT 
  Melody.MelodyN,
  Melody.Melody,
  Qinto.Qinto,
  Qolos.Qolo  -- ✅ إضافة اسم القولو
FROM Melody
LEFT JOIN Qinto ON Melody.QintoN = Qinto.QintoN
LEFT JOIN Qolos ON Melody.QoloN = Qolos.QoloN
WHERE Melody.QoloN = ?
      `,
      [qoloN]
    );

    return Response.json(rows);
  } catch (error: unknown) {
    const err = error as Error;
    return Response.json({ error: err.message }, { status: 500 });
  } 
}
