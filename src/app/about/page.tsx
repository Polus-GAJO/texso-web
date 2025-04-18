'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-white">
      <h1 className="text-3xl font-bold mb-6">من نحن</h1>
      <p className="mb-4 text-lg">هذه صفحة لاختبار تحميل الصورة من مجلد public.</p>
      <img
        src="/images/main-bg.png"
        alt="اختبار الصورة"
        className="w-64 h-auto border border-gray-400 rounded shadow"
      />
    </div>
  );
}
