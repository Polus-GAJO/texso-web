import connectToDatabase from '@/db';

export async function GET() {
  const connection = await connectToDatabase();
  const [rows] = await connection.execute('SELECT QoloN, Qolo FROM Qolos');
  return Response.json(rows);
}
