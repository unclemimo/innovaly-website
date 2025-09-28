import Link from 'next/link';
import { Sparkles, Hammer, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(800px 320px at 10% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(800px 360px at 90% -20%, rgba(56,189,248,0.12), transparent 60%)'}}></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-zinc-800 px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 mb-5">
                  <Sparkles className="h-3.5 w-3.5" />
                  Business Architects Who Build
                </div>
                <h1 className="text-4xl sm:text-5xl/tight tracking-tight font-semibold">
                  Stop Buying Services. Start Building an Ecosystem.
                </h1>
                            <p className="mt-5 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">
                              You&apos;re trapped between consultants who deliver PDFs and agencies who build code without a strategy. We&apos;re the end-to-end growth implementation partner that actually builds.
                            </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2.5 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
                    <Hammer className="mr-2 h-4 w-4" />
                    Let&apos;s Build Together
                  </Link>
                  <Link href="/services" className="inline-flex items-center rounded-md border border-zinc-200/70 dark:border-zinc-800 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-8 grid grid-cols-3 max-w-md gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">15+ years</span>
                    Founder-led experience
                  </div>
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">Hybrid</span>
                    Agency + Innovation House
                  </div>
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">Latin-founded</span>
                    Cultural fluency
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-5 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="Futuristic workspace" className="h-60 w-full object-cover rounded-md" />
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium">2,500+</div>
                      Active Users
                    </div>
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium">$120k+</div>
                      ARR in 3 Months
                    </div>
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium">Automated</div>
                      Operations
                    </div>
                  </div>
                  <div className="absolute inset-x-0 -bottom-10 h-24 blur-2xl" style={{background: 'radial-gradient(50% 50% at 50% 0%, rgba(99,102,241,0.15), transparent 70%)'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}