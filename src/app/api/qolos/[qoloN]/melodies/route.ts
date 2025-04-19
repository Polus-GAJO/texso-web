import { NextRequest } from 'next/server';
import db from '@/lib/db';

export async function GET(
  req: NextRequest,
  context: { params: { qoloN: string } }
) {
  const { qoloN } = context.params;

  try {
    const [rows] = await db.query(
      `SELECT 
        Melody.MelodyN, 
        Melody.Melody, 
        Qinto.Qinto, 
        Qolos.Qolo 
       FROM Melody 
       LEFT JOIN Qinto ON Melody.QintoN = Qinto.QintoN 
       LEFT JOIN Qolos ON Melody.QoloN = Qolos.QoloN 
       WHERE Melody.QoloN = ?`,
      [qoloN]
    );

    return Response.json(rows);
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
