import Link from 'next/link';
import { Home, Search, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Decorative background similar to hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(800px 320px at 10% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(800px 360px at 90% -20%, rgba(56,189,248,0.12), transparent 60%)',
            }}
          ></div>

          <div className="relative mx-auto max-w-5xl px-3 sm:px-4 lg:px-8 pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-zinc-800 px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 mb-4">
                <Search className="h-3.5 w-3.5" />
                Page not found
              </div>
              <h1 className="text-4xl sm:text-5xl/tight tracking-tight font-semibold bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
                This page does not exist.
              </h1>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2.5 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-all"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-zinc-200/70 dark:border-zinc-800 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Helpful links */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <Link href="/about" className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                  Our Philosophy
                </Link>
                <Link href="/proof" className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                  Case Studies
                </Link>
                <Link href="/contact" className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
