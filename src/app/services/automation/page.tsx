import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AutomationService() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 mb-4">
            <Link href="/services" className="inline-flex items-center hover:underline">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Back to Services
            </Link>
            <span className="opacity-50">/</span>
            <span>AI & Process Automation</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI & Process Automation</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">Eliminate chaos. Automate growth.</p>
          <p className="text-sm text-zinc-500">Coming soon...</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
