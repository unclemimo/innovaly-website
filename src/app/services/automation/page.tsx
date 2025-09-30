import Link from 'next/link';
import { Workflow, Search, Settings, Database, Users, ArrowRight, DollarSign, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProcessAutomation() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 10% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">From Operational Chaos to a Streamlined Growth Machine.</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">
            Are you running your business on a chaotic web of WhatsApp messages, spreadsheets, and manual data entry? That friction is costing you more than just time—it&apos;s costing you growth. We design and implement automated systems that let you scale without the chaos.
          </p>
        </div>
      </section>

      {/* Credibility Statement */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
            <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">We Live in These Systems</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              We run our own companies on these exact systems. We don&apos;t just recommend them; we live in them.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">From Manual Mess to Automated Success</h2>
          
          <div className="space-y-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 flex-shrink-0">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">1. Deep Diagnosis</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We start by mapping your current state of chaos. We analyze every manual task, broken workflow, and communication bottleneck to understand the true sources of friction in your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 flex-shrink-0">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">2. System Architecture</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We design a new, streamlined system using powerful tools like N8N, Zapier, AI agents and custom integrations.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 flex-shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">3. CRM & Integration Mastery</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We are experts in creating a single source of truth. We implement and deeply integrate the tools you use—like Notion and Slack—and master complex CRM setups in HubSpot or Salesforce to create a 360-degree view of your customer.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 flex-shrink-0">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">4. Google Workspace and Big tech discounts</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We work closely with Google partners to secure better pricing and manage the entire migration and training process for your team, unlocking the full potential of the ecosystem. We also help you obtain discounts on other major tech tools, such as Microsoft, Stripe and Slack.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">5. Deploy & Train</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We lead the migration and training process from First Principles, working closely with your executive team to drive a sustainable shift in mindset and organizational paradigms—ensuring this is not just another tool, but a true transformation in how your team operates.
                  </p>
                </div>
              </div>
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
                <span className="text-zinc-600 dark:text-zinc-400">Cut 20+ hours of weekly busywork</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-zinc-600 dark:text-zinc-400">Reduce human error and improve data accuracy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-zinc-600 dark:text-zinc-400">Create a scalable foundation for future growth</span>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="font-medium mb-2">Our Guarantee</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A 50% reduction in operational friction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-5 w-5 text-indigo-500" />
              <h3 className="font-medium">Investment</h3>
            </div>
            <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Starting from $3,990 + optimization retainer</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Includes assesment, implementation, training, and ongoing optimization</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Let&apos;s transform your operational chaos into a streamlined growth machine.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-base font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
            Design My Automated Workflow
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}