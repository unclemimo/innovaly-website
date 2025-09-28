import Link from 'next/link';
import { Search, Target, TrendingUp, CheckCircle, ArrowRight, Clock, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AuthorityBuilding() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 10% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">Stop Hoping to Be Found. Start Being the Answer.</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">
            For any new startup or small business, being found on Google is not a luxury—it&apos;s the foundation of growth. Our Authority Building service is a quick-start toolkit designed to rapidly increase your discoverability.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
            <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">We Focus on One Powerful Outcome</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Boosting your Domain Rating in a short amount of time, making you a credible and visible option for your customers from day one.
            </p>
          </div>
        </div>
      </section>

      {/* The Authority Flywheel */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">Our Proven System: The Authority Flywheel</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">This isn&apos;t about SEO tricks. It&apos;s about building real, sustainable digital authority.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Technical SEO Foundation</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                We ensure your website is perfectly optimized from the inside out, making it easy for search engines to crawl and rank.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-medium">High-Quality Backlinks</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Our flagship service. We secure 50-80 powerful backlinks from authoritative directories and sites, signaling to Google that you are a leader in your field.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Content Strategy</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                We help you create content that answers your customers&apos; most pressing questions, establishing you as a go-to resource.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">The Result</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-zinc-600 dark:text-zinc-400">Higher rankings for your most important keywords</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-zinc-600 dark:text-zinc-400">A steady stream of qualified, organic traffic</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-zinc-600 dark:text-zinc-400">Increased brand trust and recognition</span>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium mb-2">Our Guarantee</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A 90%+ SEO score in 45 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Timeline */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-5 w-5 text-indigo-500" />
                <h3 className="font-medium">Investment</h3>
              </div>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Starting from $1,600</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-indigo-500" />
                <h3 className="font-medium">Timeline</h3>
              </div>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">30-day deployment + 60-day amplification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">Ready to Claim Your Authority?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Stop being invisible to your customers. Let&apos;s make you the definitive answer in your niche.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-base font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
            Start Building My Authority
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}