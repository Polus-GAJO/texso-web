import fs from 'fs';
import path from 'path';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const pages = [
  { name: 'browse', title: 'تصفح المحتوى', description: 'هذه الصفحة قيد التطوير.' },
  { name: 'edit', title: 'تعديل المحتوى', description: 'هذه الصفحة قيد التطوير.' },
  { name: 'search', title: 'البحث', description: 'هذه الصفحة قيد التطوير.' },
  { name: 'settings', title: 'الإعدادات', description: 'هذه الصفحة قيد التطوير.' },
  { name: 'about', title: 'عن التطبيق', description: 'هذه الصفحة قيد التطوير.' }
];

const appDir = path.join('src', 'app');

for (const page of pages) {
  const pageDir = path.join(appDir, page.name);
  const pageFile = path.join(pageDir, 'page.tsx');

  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
    console.log(`✅ أنشئ المجلد: ${page.name}`);
  }

  const content = `export default function ${capitalize(page.name)}Page() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">${page.title}</h1>
      <p>${page.description}</p>
    </div>
  );
}
`;

  fs.writeFileSync(pageFile, content);
  console.log(`📄 أنشئت الصفحة: ${page.name}/page.tsx`);
}
