import Link from 'next/link';
import { Lightbulb, Target, Smartphone, Globe, ArrowRight, Clock, DollarSign, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InnovationDevelopment() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 90% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">From Idea to Market-Ready Platform.</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">
            An idea is just the beginning. The real challenge is translating that vision into a product customers will pay for. We&apos;ve seen countless founders waste hundreds of thousands of dollars building platforms nobody wants. Our process prevents that.
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
            <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">Founder-to-Founder Partnership</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              This service is an intensive, founder-to-founder partnership designed for two outcomes: first, to rigorously validate your idea and find product-market fit, and second, to build your actual platform.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 1: Validation & Go-to-Market */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">Phase 1: Validation & Go-to-Market (90 Days)</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Validate Your Business Model</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                We use proven methodologies to test your assumptions and find true product-market fit. This crucial step saves you a fortune in the long run.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Craft Your Go-to-Market Strategy</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                We define your target audience, messaging, pricing, and launch plan.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Secure Your First Paying Customers</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                The ultimate validation. We work with you to get your first paying clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Platform & App Development */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">Phase 2: Platform & App Development</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Leveraging our highly skilled, AI-augmented development team with deep startup experience, we build robust, scalable products.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="font-medium">MVPs & Proofs of Concept</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Get a functional product in front of users in under 90 days to test, iterate, and attract investors.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Native Mobile Apps</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Engaging experiences for iOS and Android.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Scalable Web Platforms</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Complex applications built for growth from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">Investment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-5 w-5 text-indigo-500" />
                <h3 className="font-medium">Validation & GTM</h3>
              </div>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Starting from $3,000/month</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">(2-month minimum)</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-5 w-5 text-indigo-500" />
                <h3 className="font-medium">Platform Development</h3>
              </div>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Custom quote based on scope</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Tailored to your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">Ready to Launch Your Venture?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Let&apos;s turn your idea into a market-ready platform with a founder who understands the journey.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-base font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
            Book a Founder-to-Founder Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}