import Link from 'next/link';
import { Users, Network, Bot, ArrowRight, Globe, Code, Palette, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Ecosystem() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 90% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">More Than a Team. A Growth Ecosystem.</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">
            We&apos;ve moved beyond the traditional agency model. Innovaly operates as a dynamic ecosystem of in-house experts, specialized partners, and AI-powered systems, allowing us to assemble the perfect team for any challenge.
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">The Architects & Builders</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Our in-house team of 15+ professionals is the core of our operations. This multidisciplinary group includes senior developers, growth marketers, content strategists, brand designers, and operational experts. We are a remote-first, globally distributed team united by a passion for building great products.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 mx-auto mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Senior Developers</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Full-stack experts with startup experience</p>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 mx-auto mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Growth Marketers</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Data-driven growth specialists</p>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 mx-auto mb-4">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Brand Designers</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Creative visionaries and UX experts</p>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Operational Experts</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Process optimization specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">Specialized Expertise on Demand</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            No single agency can be the best at everything. That&apos;s why we&apos;ve built a trusted network of contractors and specialist agency partners who are leaders in their fields. From YouTube SEO masters like MiraVision to a global network of business developers, we can plug in world-class talent exactly when it&apos;s needed, ensuring you always have the best people working on your project.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-medium">YouTube SEO Masters</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Partners like MiraVision who specialize in video content optimization and YouTube growth strategies.
              </p>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Network className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Global Business Developers</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A worldwide network of business development specialists who understand local markets and cultural nuances.
              </p>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Specialist Agencies</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Trusted partners who are leaders in their specific fields, from advanced development to specialized marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Quality */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-6">AI-Augmented, Human-Perfected</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            We are at the forefront of leveraging AI to accelerate development and increase efficiency. But technology is only half the equation. Our rigorous quality control processes, led by experienced project managers, ensure that every deliverable is polished, on-strategy, and ready to perform. This combination of advanced technology and human oversight is our secret to delivering exceptional results, fast.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="font-medium">AI-Powered Development</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                We leverage cutting-edge AI tools to accelerate development, automate repetitive tasks, and enhance our creative capabilities while maintaining the highest quality standards.
              </p>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-medium">Human Quality Control</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Every deliverable goes through rigorous human review by experienced project managers to ensure it meets our high standards and aligns with your strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">Ready to Work with Our Ecosystem?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Let&apos;s assemble the perfect team for your project and deliver exceptional results together.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-base font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}