// app/page.tsx
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <><div><NavBar /></div>
      
      <main>
      </main>
      <div className="flex flex-col items-center justify-center min-h-screen text-white"/>
      <Footer />
    </>
  )
}