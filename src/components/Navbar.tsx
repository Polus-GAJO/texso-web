'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/50 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Link
          href="/"
          className="font-bold text-xl text-blue-300 hover:text-white transition"
        >
          ܛܟܣܐ ܕܒܓܕܝܕܐ
        </Link>
      </div>

      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link
            href="/browse"
            className="px-3 py-1 rounded bg-black/30 hover:bg-black/50 transition"
          >
            تصفح
          </Link>
        </li>
        <li>
          <Link
            href="/edit"
            className="px-3 py-1 rounded bg-black/30 hover:bg-black/50 transition"
          >
            تعديل
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="px-3 py-1 rounded bg-black/30 hover:bg-black/50 transition"
          >
            من نحن
          </Link>
        </li>
        <li>
          <Link
            href="/qolos"
            className="px-3 py-1 rounded bg-black/30 hover:bg-black/50 transition"
          >
            قولي
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="px-3 py-1 rounded bg-black/30 hover:bg-black/50 transition"
          >
            إعدادات
          </Link>
        </li>
        <li>
          <Link
            href="/search"
            className="px-3 py-1 rounded bg-black/30 hover:bg-black/50 transition"
          >
            البحث
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="px-3 py-1 rounded bg-black/30 hover:bg-black/50 transition"
          >
            لوحة التحكم
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="px-3 py-1 rounded bg-black/30 hover:bg-black/50 transition"
          >
            الصفحة الرئيسية
          </Link>
        </li>
      </ul>
    </nav>
  );
}
