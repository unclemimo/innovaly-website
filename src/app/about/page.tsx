import { Handshake, Beaker, Eye, BookOpen, Unlock, Lightbulb, Target, Code } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 10% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">By Founders, For Founders.</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">We started Innovaly Services because we lived the problem. We were tired of the gap between thinking and doing. So we built the company we always wished we could hire.</p>
        </div>
      </section>

      {/* Core Belief */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-10 w-10 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">We Believe in Two Simple Truths</h2>
          </div>
          
          <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-indigo-200/50 dark:border-indigo-800/50">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 flex-shrink-0 mt-1">
                  <Target className="h-4 w-4" />
                </div>
                <p className="text-left">
                  <span className="font-semibold text-indigo-700 dark:text-indigo-300">First,</span> the best strategy is one that gets built. An idea is just an idea until it&apos;s a functioning system, a live website, or a measurable business result.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-6 border border-emerald-200/50 dark:border-emerald-800/50">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 text-emerald-500 grid place-items-center ring-1 ring-emerald-500/20 flex-shrink-0 mt-1">
                  <Code className="h-4 w-4" />
                </div>
                <p className="text-left">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">Second,</span> the best code is built with a strategy. Technology without a clear business purpose is just an expensive hobby.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-xl p-6 border border-amber-200/50 dark:border-amber-800/50">
              <p className="text-lg font-medium text-amber-800 dark:text-amber-200">
                At <span className="font-bold">Innovaly Services</span>, we live at the intersection of these two truths. We are <span className="font-bold text-amber-900 dark:text-amber-100">Business Architects Who Build</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Innovaly Model */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">The Two Sides of Our Coin</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Handshake className="h-4 w-4" />
                </div>
                <h4 className="font-medium">The Agency Arm</h4>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We partner with you to design strategy, build, and grow. We become an extension of your team, delivering results and transferring knowledge.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Beaker className="h-4 w-4" />
                </div>
                <h4 className="font-medium">The Innovation House</h4>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We build for ourselves—platforms like ElGrupito.com or Padelcrest.com are our testing grounds to pressure-test AI, ops frameworks, and growth strategies.</p>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
            <p className="text-sm text-zinc-600 dark:text-zinc-400"><span className="font-medium text-zinc-900 dark:text-zinc-100">Why this matters:</span> You get solutions that are proven in the real world—already optimized inside our own ventures.</p>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Our Promises to You</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6">
              <h4 className="font-medium flex items-center gap-2"><Eye className="h-4 w-4 text-indigo-500" /> 1. Complete Transparency</h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">No black boxes. You see our process, costs, and decisions. We build with you, not just for you.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6">
              <h4 className="font-medium flex items-center gap-2"><BookOpen className="h-4 w-4 text-indigo-500" /> 2. We Teach As We Build</h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We document and empower your team—our aim is to make ourselves obsolete. You will get tangible consulting, not just a report.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6">
              <h4 className="font-medium flex items-center gap-2"><Unlock className="h-4 w-4 text-indigo-500" /> 3. Zero Vendor Lock-in</h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Everything we build is yours: code, content, and strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative group">
            {/* Background gradient effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Image container with enhanced effects */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img 
                src="/david-atias.jpg" 
                alt="David Atias - Venezuelan-Spanish entrepreneur and founder of Innovaly Services, digital nomad with 15+ years experience across 8 countries" 
                title="David Atias - Founder & CEO of Innovaly Services"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{objectPosition: 'center 15%'}}
                loading="eager"
                width="400"
                height="400"
              />
              
              {/* Overlay gradient for dramatic effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-indigo-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animationDelay: '0.5s'}}></div>
              
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-12"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -rotate-12" style={{transitionDelay: '0.2s'}}></div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">DA</span>
              </div>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Founder & CEO</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">A Nomad&apos;s Journey to Building Bridges</h3>
            <div className="mt-4">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                <a 
                  href="https://atias.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline decoration-2 underline-offset-2 hover:decoration-indigo-500"
                >
                  David Atias
                </a> isn&apos;t your typical agency founder. He&apos;s an Hispanic entrepreneur, a digital nomad, and a multi-disciplinary builder with a Master&apos;s in Entrepreneurship from Lund University.
              </p>
            </div>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">With 15+ years across 8 countries—fullstack marketer, programmer, growth marketer, journalist, and multi-time founder—he started Innovaly Services to bridge entrepreneurs with world-class strategy and execution, without the Silicon Valley price tag or cultural disconnect.</p>
            
            {/* Call to action */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="mailto:weare@innovaly.services" 
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                <span className="mr-2">💬</span>
                Let&apos;s talk
              </a>
              <a 
                href="https://linkedin.com/in/davidatias" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <span className="mr-2">🔗</span>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
