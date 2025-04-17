import './globals.css';

export const metadata = {
  title: 'Aakash Rajbanshi | Flutter Developer',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1E1E1E] text-white font-sans">
        <div className="flex flex-col md:flex-row min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
