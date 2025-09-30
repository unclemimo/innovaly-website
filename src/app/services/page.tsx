import Link from 'next/link';
import { ArrowRight, LayoutDashboard, Trophy, Box, Workflow, Globe2, SearchCheck, Blocks, Bot } from 'lucide-react';
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
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">
            We don&apos;t trade in busywork. We deliver bold, integrated solutions that unlock your next stage of growth.
          </p>
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
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Dominate Chatgpt and Google search rankings with sustainable SEO and backlinks.</p>
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
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Validate, build, and launch with a clear strategy alongside an accredited entrepreneurship consultant. Then, bring your vision to life—develop your platform, mobile apps (iOS & Android), or web system with our expert team guiding you every step of the way.
            </p>
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
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">End chaos. Standardize with SOPs, Google Workspace, Microsoft, Slack.</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Upgrade leadership. Transform processes. Automate growth.</p>
            <Link href="/services/automation" className="mt-4 inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95">
              Automate My Business <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Custom Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent mb-4">
              Tailored Solutions, Not Templates
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Every business is unique. We create custom solutions that fit your specific needs, starting from $5,000 for custom developments.
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
                      Custom Solutions
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                      We don&apos;t believe in one-size-fits-all. Every project is unique and deserves a tailored approach.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        $3,990
                      </span>
                      <span className="text-lg text-zinc-600 dark:text-zinc-400">starting from</span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      *Final pricing depends on project scope and requirements
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
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Flexible payment terms available</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group-hover:scale-105">
                      <span>Get Your Custom Quote</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Right Column - Service Icons */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200/50 dark:border-indigo-800/30">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Globe2 className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Websites</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Growth-engine sites</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <SearchCheck className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Authority</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">SEO & backlinks</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-200/50 dark:border-orange-800/30">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                      <Blocks className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Platforms</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Custom development</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200/50 dark:border-cyan-800/30">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Automation</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Process optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Ready to transform your business with a custom solution?
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-300 group">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Globe2 className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                  <SearchCheck className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center">
                  <Blocks className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">Let&apos;s discuss your project</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
