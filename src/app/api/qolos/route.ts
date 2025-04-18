import connectToDatabase from '@/db';

export async function GET() {
  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.execute('SELECT Qolo FROM Qolos');
    return Response.json(rows);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json({ error: error.message });
    }
    return Response.json({ error: 'Unknown error' });
  }
}
