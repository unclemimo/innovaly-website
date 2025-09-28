import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Reviews() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 50% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-center">The Results of a True Partnership.</h1>
          <p className="mt-4 max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400 text-lg text-center">
            We measure our success by the success of our clients. Here&apos;s what some of the founders and businesses we&apos;ve partnered with have to say.
          </p>
        </div>
      </section>

      {/* Senja Widget */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
            <div className="senja-embed" data-id="87efe759-519a-4ff2-97f3-ee4d2a7f2524" data-mode="shadow" data-lazyload="false" style={{display: 'block', width: '100%'}}></div>
          </div>
        </div>
      </section>

      {/* Sample Testimonials (Fallback) */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-8 text-center">What Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 italic">
                &quot;Innovaly is the first partner we&apos;ve had who truly understands both strategy and execution. They didn&apos;t just give us a plan; they built the entire platform. The validation process alone saved us at least $50,000 in development costs.&quot;
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                — CEO, FinTech SaaS Startup
              </div>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 italic">
                &quot;Within 45 days, our website went from being invisible on Google to ranking on the first page for our key terms. Their Authority Building service is a game-changer for any small business that needs to be discovered.&quot;
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                — Founder, US-based E-commerce Brand
              </div>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 italic">
                &quot;The automation system they built for us transformed our operations. We&apos;ve cut down on 20+ hours of manual work per week and can finally focus on scaling the business instead of getting stuck in logistics. It&apos;s the best investment we&apos;ve made.&quot;
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                — Managing Partner, Services Firm
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Senja Script */}
      <Script 
        src="https://widget.senja.io/widget/87efe759-519a-4ff2-97f3-ee4d2a7f2524/platform.js" 
        type="text/javascript" 
        strategy="afterInteractive"
      />
    </div>
  );
}