import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Texso Baghdede',
  description: 'واجهة تطبيق الطقس السرياني',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-[url('/images/main-bg.jpg')] bg-cover bg-center min-h-screen">
        {/* ✅ شريط التنقل دائمًا في الأعلى */}
        <div className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
          <Navbar />
        </div>

        {/* ✅ محتوى الصفحة */}
        <main className="pt-20"> {/* لإزاحة المحتوى أسفل شريط التنقل */}
          {children}
        </main>
      </body>
    </html>
  );
}