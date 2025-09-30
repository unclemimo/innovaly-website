import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Hammer, ArrowRight, PenTool, LayoutGrid, ServerCog, Search, Plug, BookOpenCheck } from 'lucide-react';
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
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Positioning, value prop, and sales narratives that convey your message and convert.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><LayoutGrid className="h-4 w-4 text-indigo-500" /> Design System</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Modern UI kit: typography, components, and accessible patterns for your brand.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><ServerCog className="h-4 w-4 text-indigo-500" /> Fast Tech Stack</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Static-first builds with CDN, image optimization, and analytics (we also develop on top of WordPress, Webflow, and other platforms).</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><Search className="h-4 w-4 text-indigo-500" /> SEO Foundation</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-indigo-600 dark:text-indigo-400">Dominate search and AI:</span> Advanced topic clusters, rich schema, and on-site optimization—<span className="font-bold">playbooks built for 2025</span>.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><Plug className="h-4 w-4 text-indigo-500" /> Integrations</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                CRM, forms, chat, payments, and automations—seamlessly integrated with tools like N8N, Zapier, and AI agents.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium flex items-center gap-2"><BookOpenCheck className="h-4 w-4 text-indigo-500" /> Proven Playbooks</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Launch, content, and CRO playbooks so your team can run it with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview / Image */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop" 
              alt="High-converting website UI preview" 
              width={1600}
              height={320}
              className="w-full h-80 object-cover" 
            />
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Innovaly Services helps ambitious teams turn their websites into growth engines—combining strategy, design, and technology to drive real business results.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-zinc-200/70 dark:border-zinc-800 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold tracking-tight text-2xl sm:text-3xl">How We Build</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {/* Step 1 */}
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">1</span>
              <h3 className="mt-3 font-medium">Blueprint</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                We begin by deeply understanding your business, then conduct research, analytics audits, and craft your positioning and information architecture.
              </p>
            </div>
            {/* Step 2 */}
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">2</span>
              <h3 className="mt-3 font-medium">Write</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                We craft compelling copy aligned with your brand, value proposition, and competitive edge—integrated with keyword research for maximum impact.
              </p>
            </div>
            {/* Step 3 */}
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">3</span>
              <h3 className="mt-3 font-medium">Design</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Visual direction, components, and responsive layouts—delivered in Figma for your approval before we build.
              </p>
            </div>
            {/* Step 4 */}
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">4</span>
              <h3 className="mt-3 font-medium">Build + Integrate</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Headless/static implementation, CMS setup, forms, CRM, and automations.
              </p>
            </div>
            {/* Step 5 */}
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 font-medium">5</span>
              <h3 className="mt-3 font-medium">Launch + Iterate</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                QA, performance, SEO checks, and CRO experiments post-launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Pricing Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Custom Website Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent mb-4">
              Tailored Growth-Engine Websites
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Every website is unique. We create custom growth-engine sites that fit your specific business needs, starting from $4,990.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative rounded-3xl border border-zinc-200/70 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-8 sm:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Pricing Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                      Custom Website Solutions
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                      We don&apos;t believe in one-size-fits-all websites. Every business deserves a tailored growth-engine that converts.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        $4,990
                      </span>
                      <span className="text-lg text-zinc-600 dark:text-zinc-400">starting from</span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      *Final pricing depends on project scope, pages, and integrations
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Free consultation & project assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Transparent pricing with no hidden fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Payment milestones tied to outcomes</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group-hover:scale-105">
                      <span>Get Your Custom Quote</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Right Column - Website Features */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200/50 dark:border-indigo-800/30">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <PenTool className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Strategy & Copy</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Brand + messaging</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Search className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">SEO Foundation</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Technical + content</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-200/50 dark:border-orange-800/30">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                      <LayoutGrid className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Design System</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Modern UI components</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200/50 dark:border-cyan-800/30">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Plug className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Integrations</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">CRM + automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Ready to build your growth-engine website?
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-300 group">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <PenTool className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center">
                  <LayoutGrid className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Plug className="h-4 w-4 text-white" />
                </div>
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">Let&apos;s discuss your website project</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
