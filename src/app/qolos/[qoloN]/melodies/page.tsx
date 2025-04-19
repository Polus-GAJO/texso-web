import { notFound } from 'next/navigation';

export default async function QoloMelodiesPage({ params }: { params: { qoloN: string } }) {
  const qoloN = params.qoloN;
  if (!qoloN) return notFound();

  // جلب اسم القولو
  const qoloRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/qolos/${qoloN}`, {
    cache: 'no-store',
  });
  if (!qoloRes.ok) throw new Error('فشل في جلب اسم القولو');
  const { Qolo } = await qoloRes.json();

  // جلب الألحان
  const melodiesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/qolos/${qoloN}/melodies`, {
    cache: 'no-store',
  });
  if (!melodiesRes.ok) throw new Error('فشل في جلب الألحان');
  const melodies = await melodiesRes.json();

  return (
    <div className="p-6 text-right">
      <h1 className="text-3xl font-bold mb-2">الألحان الموجودة في القولو</h1>
      <h2 className="text-4xl text-blue-700 font-[SertoJerusalem] mb-6">{Qolo || '---'}</h2>

      <table className="table-fixed w-fit ml-auto border border-gray-400 text-xl">
  <thead>
  <tr className="bg-gray-100 text-lg">
    <th className="px-4 py-2 font-bold w-[400px]">اسم اللحن</th>
    <th className="px-4 py-2 font-bold w-[200px]">القينة</th>
    <th className="px-4 py-2 font-bold w-[120px]">خيارات</th>
  </tr>
</thead>
<tbody>
  {melodies.map((melody, index) => (
    <tr key={index} className="border-t">
      <td className="px-4 py-2 font-[SertoJerusalem] text-black text-2xl w-[400px]">
       {melody.Melody}
      </td>
      <td className="px-4 py-2 font-[SertoJerusalem] text-gray-600 text-2xl w-[200px] flex flex-row-reverse items-center gap-3">
        <span className="text-gray-500 text-sm">.{index + 1}</span>
      {melody.Qinto}
      </td>
      <td className="px-4 py-2 text-center w-[120px] space-x-2">
        <button className="text-blue-600 hover:text-blue-800 text-2xl" title="سماع التسجيل">
          🎧
        </button>
        <button className="text-green-600 hover:text-green-800 text-2xl" title="رؤية النوتة">
          🎼
        </button>
      </td>

    </tr>
  ))}
</tbody>
  </table>
    </div>
  );
}
