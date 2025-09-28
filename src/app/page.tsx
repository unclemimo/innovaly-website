import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Hammer, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Wrench, 
  LandPlot, 
  Globe2, 
  SearchCheck, 
  Blocks, 
  Bot, 
  Users, 
  DollarSign, 
  Cpu 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(800px 320px at 10% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(800px 360px at 90% -20%, rgba(56,189,248,0.12), transparent 60%)'}}></div>
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-zinc-800 px-2 sm:px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-5">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Business Architects Who Build
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl/tight tracking-tight font-semibold">
                  Stop Buying Services. Start Building an Ecosystem.
                </h1>
                <p className="mt-4 sm:mt-5 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                You're trapped between consultants who deliver PDFs and agencies who build code without a strategy. We're the end-to-end growth implementation partner that actually understands you and make you grow.


                </p>
                <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2.5 sm:py-3 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-all">
                    <Hammer className="mr-2 h-4 w-4" />
                    Let&apos;s Build Together
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-zinc-200/70 dark:border-zinc-800 px-4 py-2.5 sm:py-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center sm:text-left">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">15+ years</span>
                    Founder-led experience
                  </div>
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center sm:text-left">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">Hybrid</span>
                    Agency + Innovation House
                  </div>
                  <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-3 text-center sm:text-left">
                    <span className="block text-zinc-900 dark:text-zinc-100 font-medium">International team</span>
                    Cultural fluency
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 mt-8 lg:mt-0">
                <div className="relative rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-4 sm:p-5 shadow-sm overflow-hidden">
                  {/* ElGrupito.com Animated Logo */}
                  <div className="h-48 sm:h-60 w-full rounded-md bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-950/30 dark:to-sky-950/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 animate-pulse"></div>
                    <a 
                      href="https://elgrupito.com" 
                      target="_blank" 
                      rel="follow" 
                      className="relative group cursor-pointer"
                    >
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 dark:from-indigo-400 dark:via-purple-400 dark:to-sky-400 bg-clip-text text-transparent animate-pulse group-hover:animate-none transition-all duration-300 group-hover:scale-105">
                          elgrupito.com
                        </div>
                        <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Visit our website →
                        </div>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                    </a>
                    <div className="absolute top-4 left-4 w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-sky-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-8 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3 text-xs">
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-2 sm:p-3 text-center">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base">2,500+</div>
                      <div className="text-xs">Active Users</div>
                    </div>
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-2 sm:p-3 text-center">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base">$120k+</div>
                      <div className="text-xs">ARR in 3 Months</div>
                    </div>
                    <div className="rounded-md border border-zinc-200/70 dark:border-zinc-800 p-2 sm:p-3 text-center">
                      <div className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base">+70%</div>
                      <div className="text-xs">Automated Operations</div>
                    </div>
                  </div>
                  {/* Built by ElGrupito.com */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                      Built and operated by{' '}
                      <a 
                        href="https://elgrupito.com" 
                        target="_blank" 
                        rel="follow"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                      >
                        Innovaly Services
                      </a>
                    </p>
                  </div>
                  <div className="absolute inset-x-0 -bottom-10 h-24 blur-2xl" style={{background: 'radial-gradient(50% 50% at 50% 0%, rgba(99,102,241,0.15), transparent 70%)'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="relative py-16 sm:py-20 border-t border-zinc-200/70 dark:border-zinc-800 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-amber-50/50 dark:from-red-950/20 dark:via-orange-950/10 dark:to-amber-950/20 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.15),transparent_50%)] pointer-events-none"></div>
          
          <div className="relative mx-auto max-w-5xl px-3 sm:px-4 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200/70 dark:border-red-800/50 bg-red-50/80 dark:bg-red-950/30 px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-300 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                The Problem
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 dark:from-red-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                Does This Sound Familiar?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="space-y-6">
                <div className="rounded-lg border border-red-200/70 dark:border-red-800/50 bg-white/80 dark:bg-zinc-900/60 p-5 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-950/50 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-red-600 dark:text-red-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Overpriced Silicon Valley Agencies</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">They don't get your culture, your market, or your budget constraints.</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-orange-200/70 dark:border-orange-800/50 bg-white/80 dark:bg-zinc-900/60 p-5 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-950/50 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Cheap but Shallow Offshore Shops</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Low cost, but they lack strategic depth and long-term vision.</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-amber-200/70 dark:border-amber-800/50 bg-white/80 dark:bg-zinc-900/60 p-5 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 dark:bg-amber-950/50 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Unfinished Projects & Budget Holes</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Sold on transformation, left with complexity and incomplete solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">😤</div>
                    <blockquote className="text-lg font-medium text-zinc-900 dark:text-zinc-100 italic">
                      "As a Latin-owned business, you're stuck."
                    </blockquote>
                    <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800">
                      <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        You don't need another <span className="line-through text-red-500">vendor</span>.
                        <br />
                        You need a <span className="font-semibold text-indigo-600 dark:text-indigo-400">partner</span>.
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500/20 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-orange-500/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-5 w-5 text-indigo-500" />
              <h3 className="text-xl sm:text-2xl tracking-tight font-semibold">We Don't Just Advise. We Deliver.</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                    <FileText className="h-4 w-4" />
                  </div>
                  <h4 className="font-medium">Strategic Depth</h4>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We start with your business goals, not with a menu of services. 15+ years of founder-led experience to build a strategy that works.</p>
              </div>
              <div className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                    <Wrench className="h-4 w-4" />
                  </div>
                  <h4 className="font-medium">Tactical Execution</h4>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Strategy is useless without implementation. Our AI-augmented team builds, launches, and manages the systems we design.</p>
              </div>
              <div className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                    <LandPlot className="h-4 w-4" />
                  </div>
                  <h4 className="font-medium">Cultural Fluency</h4>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We speak your language—literally and figuratively. A Latin team that understands your market, ambition, and journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 border-t border-zinc-200/70 dark:border-zinc-800">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Your Toolkit for Borderless Growth</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">Our services are complete solutions to the most critical problems growing businesses face.</p>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition p-6 bg-white/60 dark:bg-zinc-900/40">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                    <Globe2 className="h-4 w-4" />
                  </div>
                  <h4 className="font-medium">Growth-Engine Websites</h4>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Problem: "Our website is a brochure that doesn't get clients." Solution: We build websites that are your #1 salesperson, optimized for Google, AI, and conversion.</p>
                <Link href="/services/websites" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                  Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
              {/* Card 2 */}
              <div className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition p-6 bg-white/60 dark:bg-zinc-900/40">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                    <SearchCheck className="h-4 w-4" />
                  </div>
                  <h4 className="font-medium">Authority Building</h4>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Problem: "We're invisible to potential customers online." Solution: Proven SEO and backlinks to make you the definitive answer in your niche.</p>
                <Link href="/services/authority" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                  Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
              {/* Card 3 */}
              <div className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition p-6 bg-white/60 dark:bg-zinc-900/40">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                    <Blocks className="h-4 w-4" />
                  </div>
                  <h4 className="font-medium">Innovation & Platform Development</h4>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Problem: "We need a technical partner to build it." Solution: Validate, build your MVP or platform, and get your first paying customers.</p>
                <Link href="/services/innovation" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                  Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
              {/* Card 4 */}
              <div className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition p-6 bg-white/60 dark:bg-zinc-900/40">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                    <Bot className="h-4 w-4" />
                  </div>
                  <h4 className="font-medium">AI & Process Automation</h4>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Problem: "Operations are chaotic." Solution: Transform manual processes into streamlined, automated systems.</p>
                <Link href="/services/automation" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                  Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">We Aren't Just an Agency. We're an Innovation House.</h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">How do we know our systems work? Because we use them to run our own successful SaaS platforms. ElGrupito.com is our laboratory—where we perfected AI-augmented workflows, async teams, and growth strategies.</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-center gap-2"><Users className="h-4 w-4 text-indigo-500" /> 2,500+ Active Users</li>
                  <li className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-indigo-500" /> $120k+ ARR in 3 Months</li>
                  <li className="flex items-center gap-2"><Cpu className="h-4 w-4 text-indigo-500" /> Fully Automated Operations</li>
                </ul>
                <Link href="/proof" className="mt-6 inline-flex items-center rounded-md border border-zinc-200/70 dark:border-zinc-800 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900">
                  See Our Proof <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 overflow-hidden">
                <div className="h-72 w-full bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-950/30 dark:to-sky-950/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 animate-pulse"></div>
                  <a 
                    href="https://elgrupito.com" 
                    target="_blank" 
                    rel="follow" 
                    className="relative group cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 dark:from-indigo-400 dark:via-purple-400 dark:to-sky-400 bg-clip-text text-transparent animate-pulse group-hover:animate-none transition-all duration-300 group-hover:scale-105">
                        elgrupito.com
                      </div>
                      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Visit our platform →
                      </div>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  </a>
                  <div className="absolute top-4 left-4 w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-sky-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 left-8 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="py-12 sm:py-16 border-t border-zinc-200/70 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-3 sm:px-4 lg:px-8">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl tracking-tight font-semibold">Build With Us.</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">We're a distributed ecosystem of builders, strategists, and creators. We're always looking for talented people obsessed with turning ideas into reality.</p>
                </div>
                <Link href="/careers" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2.5 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}