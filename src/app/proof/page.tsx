import Link from 'next/link';
import { ArrowRight, Users, DollarSign, TrendingUp, Globe, Smartphone, Zap, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Proof() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 10% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">Don&apos;t Take Our Word For It. Look at What We&apos;ve Built.</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">
            We use the exact same strategies, technologies, and AI-augmented systems we offer you to build and scale our own profitable companies. This is our proof.
          </p>
        </div>
      </section>

      {/* Featured Case Study: ElGrupito */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">ElGrupito.com - A Community-Based Subscription Sharing Platform</h2>
                <h3 className="text-lg font-medium text-zinc-600 dark:text-zinc-400 mb-6">The Challenge:</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  To build a fully functional, scalable SaaS platform from scratch on a bootstrap budget. The system needed to handle user authentication, recurring payments, complex fulfillment automation, and community management for thousands of users.
                </p>
                <h3 className="text-lg font-medium text-zinc-600 dark:text-zinc-400 mb-4">Our Solution: The Innovaly Ecosystem in Action</h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• <strong>Strategy:</strong> We identified a market gap and applied a product-led growth strategy focused on community and trust.</li>
                  <li>• <strong>Technology:</strong> We built the entire platform on the same stack we use for clients: Next.js, Supabase, and a suite of self-hosted automation tools.</li>
                  <li>• <strong>Automation:</strong> We created a sophisticated, "human-in-the-loop" automation system with N8N and Browserbase to handle account fulfillment.</li>
                  <li>• <strong>Growth:</strong> We used our own Authority Building service to drive organic growth.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-4 text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">1.77M</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Organic impressions</div>
                  </div>
                  <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-4 text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">30.7K+</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Clicks from qualified users</div>
                  </div>
                  <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-4 text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">2,500+</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Active, paying customers</div>
                  </div>
                  <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-4 text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">$120k+</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">ARR in 3 months</div>
                  </div>
                </div>
                <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-4 bg-white/60 dark:bg-zinc-900/40">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    <strong>The Results:</strong> A resilient business that operates effectively with an asynchronous, remote team. This is what happens when strategy and execution come together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-8">More Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Case Study 2 */}
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-medium">E-commerce Platform</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Built a complete e-commerce solution for a Latin American fashion brand, including custom payment processing and inventory management.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Revenue Increase:</span>
                  <span className="font-medium text-green-600">+340%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Conversion Rate:</span>
                  <span className="font-medium text-green-600">+180%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Page Load Speed:</span>
                  <span className="font-medium text-green-600">0.8s</span>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Mobile App Launch</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Developed and launched a fitness tracking app for a startup, from concept to 10,000+ downloads in 6 months.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">App Store Rating:</span>
                  <span className="font-medium text-green-600">4.8/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Downloads:</span>
                  <span className="font-medium text-green-600">10,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">User Retention:</span>
                  <span className="font-medium text-green-600">78%</span>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Process Automation</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Transformed a consulting firm&apos;s manual processes into an automated workflow, reducing operational overhead by 60%.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Time Saved:</span>
                  <span className="font-medium text-green-600">25 hrs/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Error Reduction:</span>
                  <span className="font-medium text-green-600">-85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Client Satisfaction:</span>
                  <span className="font-medium text-green-600">+95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">Want Results Like These?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Let&apos;s talk about how we can help you achieve similar success with your business.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-base font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
            Let&apos;s Talk
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}