import Link from 'next/link';
import { ArrowLeft, Hammer, ArrowRight, PenTool, LayoutGrid, ServerCog, Search, Plug, BookOpenCheck, Check, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WebsitesService() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 15% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(800px 320px at 90% -20%, rgba(56,189,248,0.12), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-20 sm:pb-14">
          <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            <Link href="/services" className="inline-flex items-center hover:underline">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Back to Services
            </Link>
            <span className="opacity-50">/</span>
            <span>Growth-Engine Websites</span>
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl/tight tracking-tight font-semibold">Growth-Engine Websites</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">Your website should be your best salesperson. We architect, write, design, and build sites that rank, convert, and integrate with your stack.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2.5 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
              <Hammer className="mr-2 h-4 w-4" />
              Start My Build
            </Link>
            <Link href="/proof" className="inline-flex items-center rounded-md border border-zinc-200/70 dark:border-zinc-800 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900">
              See Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-3xl text-xs text-zinc-600 dark:text-zinc-400">
            <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
              <span className="block text-zinc-900 dark:text-zinc-100 font-medium">Strategic UX</span>
              Research, messaging, IA
            </div>
            <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
              <span className="block text-zinc-900 dark:text-zinc-100 font-medium">SEO + AI-ready</span>
              Schema, speed, structure
            </div>
            <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3">
              <span className="block text-zinc-900 dark:text-zinc-100 font-medium">RevOps Friendly</span>
              Forms, CRM, analytics
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">What You Get</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><PenTool className="h-4 w-4 text-indigo-500" /> Brand + Messaging</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Positioning, value prop, and sales narratives that convert.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><LayoutGrid className="h-4 w-4 text-indigo-500" /> Design System</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Modern UI kit: typography, components, and accessible patterns.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><ServerCog className="h-4 w-4 text-indigo-500" /> Fast Tech Stack</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Static-first builds with CDN, image optimization, and analytics.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><Search className="h-4 w-4 text-indigo-500" /> SEO Foundation</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Topic architecture, schema, internal links, and speed budgets.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><Plug className="h-4 w-4 text-indigo-500" /> Integrations</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">CRM, forms, automations, chat, booking, and payments.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><BookOpenCheck className="h-4 w-4 text-indigo-500" /> Playbooks</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Launch, content, and CRO playbooks so your team can run it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview / Image */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop" alt="High-converting website UI preview" className="w-full h-80 object-cover" />
          </div>
          <p className="mt-3 text-xs text-zinc-500">A modern, conversion-focused layout with clear hierarchy and speed-first implementation.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">How We Build</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">1</span>
              <h3 className="mt-3 font-medium">Blueprint</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Research, analytics audit, positioning, and information architecture.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">2</span>
              <h3 className="mt-3 font-medium">Write + Design</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Conversion copy, brand visuals, components, and responsive layouts.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">3</span>
              <h3 className="mt-3 font-medium">Build + Integrate</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Headless/static implementation, CMS setup, forms, CRM, and automations.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">4</span>
              <h3 className="mt-3 font-medium">Launch + Iterate</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">QA, performance, SEO checks, and CRO experiments post-launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Packages</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">Transparent scopes. No vendor lock-in. Payment milestones tied to outcomes.</p>
            </div>
            <Link href="/contact" className="mt-4 sm:mt-0 inline-flex items-center rounded-md border border-zinc-200/70 dark:border-zinc-800 px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900">
              Ask for a Custom Scope <MessageSquare className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="relative rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Starter</div>
              <div className="mt-1 text-2xl font-semibold">$7k–$12k</div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Fast launch for early-stage teams.</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> 5–8 pages</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Copywriting + design</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> CMS + forms</li>
              </ul>
              <Link href="/contact" className="mt-5 inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95">Get Started</Link>
            </div>
            {/* Growth */}
            <div className="relative rounded-xl border border-indigo-300/60 dark:border-indigo-700/60 p-6 bg-indigo-50/50 dark:bg-indigo-950/20 ring-1 ring-indigo-500/10">
              <div className="absolute -top-3 right-4 text-[10px] uppercase tracking-wide rounded-full bg-indigo-600 text-white px-2 py-0.5">Most Popular</div>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Growth</div>
              <div className="mt-1 text-2xl font-semibold">$15k–$30k</div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Full-stack site optimized for SEO and conversions.</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> 12–20 pages + blog</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Technical SEO + schema</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> CRM + automation</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> A/B test setup</li>
              </ul>
              <Link href="/contact" className="mt-5 inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95">Schedule a Call</Link>
            </div>
            {/* Scale */}
            <div className="relative rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Scale</div>
              <div className="mt-1 text-2xl font-semibold">$40k+</div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Complex sites, multi-language, and custom integrations.</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Multi-region + i18n</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Headless CMS + design system</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Product + docs + blog</li>
              </ul>
              <Link href="/contact" className="mt-5 inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95">Design My Scope</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
