import Link from 'next/link';
import { ArrowRight, LayoutDashboard, Trophy, Box, Workflow } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 90% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">Solutions, Not Silos.</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">We don&apos;t sell hours or tasks. We deliver integrated solutions to your biggest growth challenges.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {/* Box 1 */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight">Growth-Engine Websites</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Turn your website from a cost center into your best salesperson.</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">We design, write, and build high-performance sites that drive revenue.</p>
            <Link href="/services/websites" className="mt-4 inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95">
              Build My Growth Engine <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {/* Box 2 */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight">Authority Building</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Become the answer your customers are searching for.</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Dominate search rankings with sustainable SEO and backlinks.</p>
            <Link href="/services/authority" className="mt-4 inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95">
              Claim My Authority <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {/* Box 3 */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                <Box className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight">Innovation & Platform Development</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Go from a promising idea to a market-ready platform.</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Validate, build, and launch with clear strategy.</p>
            <Link href="/services/innovation" className="mt-4 inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95">
              Launch My Venture <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {/* Box 4 */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                <Workflow className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight">AI & Process Automation</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Eliminate chaos. Automate growth.</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">From diagnosis to deployment and training.</p>
            <Link href="/services/automation" className="mt-4 inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95">
              Automate My Business <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
