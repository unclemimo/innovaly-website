import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">Get in touch with our team</p>
          <a href="mailto:weare@innovaly.services" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2.5 text-sm font-medium hover:opacity-95">
            weare@innovaly.services
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
