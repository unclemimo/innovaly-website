import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Insights</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">Our latest thoughts and insights</p>
          <p className="text-sm text-zinc-500">Coming soon...</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
