'use client';

import { useEffect, useState } from 'react';

export default function QolosPage() {
  const [qolos, setQolos] = useState([]);
  const [filteredQolos, setFilteredQolos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const syriacLetters = [
    'ܐ', 'ܒ', 'ܓ', 'ܕ', 'ܗ', 'ܘ', 'ܙ', 'ܚ', 'ܛ',
    'ܝ', 'ܟ', 'ܠ', 'ܡ', 'ܢ', 'ܣ', 'ܥ', 'ܦ',
    'ܨ', 'ܩ', 'ܪ', 'ܫ', 'ܬ'
  ];

  useEffect(() => {
    async function fetchQolos() {
      try {
        const res = await fetch('/api/qolos');
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error('البيانات غير صالحة:', data);
          return;
        }

        const sorted = [...data].sort((a, b) =>
          removeDiacritics(a.Qolo).localeCompare(removeDiacritics(b.Qolo), 'ar')
        );

        setQolos(sorted);
        setFilteredQolos(sorted);
      } catch (error) {
        console.error('فشل في جلب البيانات:', error);
      }
    }

    fetchQolos();
  }, []);

  function removeDiacritics(str: string) {
    return str.replace(/[\u0307\u0304\u0308\u0670\u0700-\u070D\u070F\u0711\u0730-\u074A\u074A\u002E\u003A]/g, '');
    }
  
  function filterBySearch(term: string) {
    const cleanedTerm = removeDiacritics(term.trim());
    const filtered = qolos.filter((item) =>
      removeDiacritics(item.Qolo).includes(cleanedTerm)
    );
    setFilteredQolos(filtered);
    setSearchTerm(term);
  }

  function filterByLetter(letter: string) {
    setSearchTerm('');
    const filtered = qolos.filter((item) =>
      removeDiacritics(item.Qolo).startsWith(letter)
    );
    setFilteredQolos(filtered);
  }

  return (
    <div className="min-h-screen flex flex-col items-end justify-start p-6">
      {/* ✅ مربع البحث */}
      <div className="relative mb-4 w-full max-w-xs self-end">
        <input
          type="text"
          placeholder="ابحث عن القولو..."
          value={searchTerm}
          onChange={(e) => filterBySearch(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded shadow text-right placeholder:text-gray-500 bg-gray-100"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
          🔍
        </span>
      </div>

      {/* ✅ أزرار الحروف السريانية */}
      <div className="flex flex-wrap gap-2 justify-center mb-6 flex-row-reverse w-full">
        <button
          onClick={() => {
            setFilteredQolos(qolos);
            setSearchTerm('');
          }}
          className="bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-200"
        >
          عرض الكل
        </button>
        {syriacLetters.map((letter) => (
          <button
            key={letter}
            onClick={() => filterByLetter(letter)}
            className="bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-200"
          >
            {letter}
          </button>
        ))}
      </div>

      {/* ✅ المربع الأبيض للنصوص */}
      <div className="bg-white/80 text-black rounded-xl p-6 max-w-2xl w-full text-right shadow-md">
        <h1 className="text-4xl font-bold mb-6 font-[SertoJerusalem]">ܩܘ̈ܠܐ (قولي)</h1>

        <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
          {filteredQolos.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-400 pb-2 text-2xl font-[SertoJerusalem]"
            >
              {item.Qolo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
