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
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-zinc-800 px-2 sm:px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-5">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Business Architects Who Build
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl/tight tracking-tight font-semibold">
                  Stop Buying Services. Start Building an Ecosystem.
                </h1>
                <p className="mt-4 sm:mt-5 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                  You&apos;re trapped between consultants who deliver PDFs and agencies who build code without a strategy. We&apos;re the end-to-end growth implementation partner that actually builds.
                </p>
                <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2.5 sm:py-3 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-all">
                    <Hammer className="mr-2 h-4 w-4" />
                    Let&apos;s Build Together
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-zinc-200/70 dark:border-zinc-800 px-4 py-2.5 sm:py-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center sm:text-left">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">15+ years</span>
                    Founder-led experience
                  </div>
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center sm:text-left">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">Hybrid</span>
                    Agency + Innovation House
                  </div>
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center sm:text-left">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">Latin-founded</span>
                    Cultural fluency
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 mt-8 lg:mt-0">
                <div className="relative rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-4 sm:p-5 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="Futuristic workspace" className="h-48 sm:h-60 w-full object-cover rounded-md" />
                  <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3 text-xs">
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-2 sm:p-3 text-center">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base">2,500+</div>
                      <div className="text-xs">Active Users</div>
                    </div>
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-2 sm:p-3 text-center">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base">$120k+</div>
                      <div className="text-xs">ARR in 3 Months</div>
                    </div>
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-2 sm:p-3 text-center">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base">Automated</div>
                      <div className="text-xs">Operations</div>
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