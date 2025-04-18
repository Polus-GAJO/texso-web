import connectToDatabase from '@/db';

export async function GET() {
  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.execute('SELECT Qolo FROM Qolos');
    return Response.json(rows);
  } catch (error) {
    return Response.json({ error: String(error) });
  }
}
