import { Handshake, Beaker, Eye, BookOpen, Unlock } from 'lucide-react';
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
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">We started Innovaly because we lived the problem. We were tired of the gap between thinking and doing. So we built the company we always wished we could hire.</p>
        </div>
      </section>

      {/* Core Belief */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">We Believe in Two Simple Truths.</h2>
          <div className="mt-5 space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>First, the best strategy is one that gets built. An idea is just an idea until it&apos;s a functioning system, a live website, or a measurable result.</p>
            <p>Second, the best code is built with a strategy. Technology without a clear business purpose is just an expensive hobby.</p>
            <p>At Innovaly, we live at the intersection of these two truths. We are Business Architects Who Build.</p>
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
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We build for ourselves—platforms like ElGrupito.com are our testing grounds to pressure-test AI, ops frameworks, and growth strategies.</p>
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
          <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Our Promises to You.</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6">
              <h4 className="font-medium flex items-center gap-2"><Eye className="h-4 w-4 text-indigo-500" /> 1. Complete Transparency.</h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">No black boxes. You see our process, costs, and decisions. We build with you, not just for you.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6">
              <h4 className="font-medium flex items-center gap-2"><BookOpen className="h-4 w-4 text-indigo-500" /> 2. We Teach As We Build.</h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We document and empower your team—our aim is to make ourselves obsolete.</p>
            </div>
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6">
              <h4 className="font-medium flex items-center gap-2"><Unlock className="h-4 w-4 text-indigo-500" /> 3. Zero Vendor Lock-in.</h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Everything we build is yours: code, content, and strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1400&auto=format&fit=crop" alt="Founder portrait" className="w-full h-80 object-cover rounded-xl border border-zinc-200/70 dark:border-zinc-800" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">A Nomad&apos;s Journey to Building Bridges.</h3>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm">David Atias isn&apos;t your typical agency founder. He&apos;s a Venezuelan-Spanish entrepreneur, a digital nomad, and a multi-disciplinary builder with a Master&apos;s in Entrepreneurship from Lund University.</p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm">With 15+ years across 8 countries—programmer, growth marketer, journalist, and multi-time founder—he started Innovaly from Vietnam to bridge Latin entrepreneurs with world-class strategy and execution, without the Silicon Valley price tag or cultural disconnect.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
