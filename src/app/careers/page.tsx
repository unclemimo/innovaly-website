import Link from 'next/link';
import { ArrowRight, Code, Palette, Bug, MapPin, Clock, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Careers() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 350px at 10% -10%, rgba(99,102,241,0.18), transparent 60%)'}}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">We&apos;re Not Hiring Employees. We&apos;re Looking for Fellow Builders.</h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400 text-lg">
            Innovaly is a place for people who are obsessed with execution. If you&apos;re a problem-solver who prefers building solutions over attending meetings, you might be a fit.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-8">Current Openings</h2>
          
          {/* Job 1: Head of Technology */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Head of Technology</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Remote
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Full-time
                  </div>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                <Code className="h-6 w-6" />
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">The Role:</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                We are looking for a builder, not just a manager. As our Head of Technology, you will be the architectural and execution leader for both client platforms and our internal ventures. You are a seasoned engineer with deep startup experience, comfortable working cross-functionally with product, design, and marketing. You live and breathe modern development, are highly organized, and have a bias for action. Your mission is to lead a distributed team in building high-quality, scalable products, fast.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Lead the technical strategy and architecture for all projects</li>
                  <li>• Mentor and manage a team of in-house developers and contractors</li>
                  <li>• Be hands-on, writing code and solving complex technical challenges</li>
                  <li>• Implement and refine our AI-augmented development workflows</li>
                  <li>• Ensure the highest standards of code quality and performance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Experienced in leading engineering teams in a startup environment</li>
                  <li>• A &quot;builder&quot; at heart, with a portfolio of products you&apos;ve shipped</li>
                  <li>• Highly organized and skilled in cross-functional collaboration</li>
                  <li>• Up-to-date with the modern tech stack (Next.js, Supabase, AI tools)</li>
                  <li>• Bonus: You&apos;ve founded a startup before. You know the journey</li>
                </ul>
              </div>
            </div>
            
            <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-95">
              Apply for this position
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Job 2: Mid-Senior Full Stack Developer */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mid-Senior Full Stack Developer (Frontend Focus)</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Remote
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Full-time
                  </div>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                <Code className="h-6 w-6" />
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">The Role:</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                You are a skilled developer who loves crafting beautiful, high-performance user interfaces. While you&apos;re comfortable across the stack, your passion lies in the frontend. You&apos;ll work within our ecosystem to build dynamic, responsive, and engaging web applications for our clients and our own SaaS products. You are proficient in our tech stack and are always eager to learn and implement new tools.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Develop, test, and deploy user-facing features using Next.js and modern frontend frameworks</li>
                  <li>• Collaborate with designers to translate Figma mockups into pixel-perfect, functional components</li>
                  <li>• Integrate with backend services and databases (like Supabase)</li>
                  <li>• Optimize applications for maximum speed and scalability</li>
                  <li>• Participate in code reviews and contribute to our high-quality standards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Proven experience as a Full Stack Developer with a strong emphasis on the frontend</li>
                  <li>• Expertise in React, Next.js, TypeScript, and modern CSS</li>
                  <li>• Familiarity with backend development and database integration</li>
                  <li>• A keen eye for detail and a commitment to creating exceptional user experiences</li>
                </ul>
              </div>
            </div>
            
            <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-95">
              Apply for this position
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Job 3: QA Engineer */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">QA Engineer (Part-Time)</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Remote
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Part-time
                  </div>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20">
                <Bug className="h-6 w-6" />
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">The Role:</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Quality is our flagship value. We are seeking a meticulous Part-Time QA Engineer to be the guardian of that value. You will be responsible for ensuring that every product we ship is robust, bug-free, and delivers an exceptional user experience. You will work hand-in-hand with our developers, contractors, and AI agents, implementing a comprehensive quality assurance process from start to finish.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Develop and execute detailed test plans and test cases</li>
                  <li>• Perform manual and automated testing for web applications</li>
                  <li>• Identify, document, and track bugs through to resolution</li>
                  <li>• Collaborate with the development team to integrate QA into the entire development lifecycle</li>
                  <li>• Leverage modern debugging and QA tools, including AI-powered solutions like CodeRabbit and Cursor</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Proven experience in a QA role, with a strong understanding of software testing methodologies</li>
                  <li>• Detail-oriented with a passion for finding and fixing problems</li>
                  <li>• Experience with both manual and automated testing</li>
                  <li>• An excellent communicator who can work effectively with a distributed team</li>
                </ul>
              </div>
            </div>
            
            <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-95">
              Apply for this position
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-8 text-center">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Remote-First Culture</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Work from anywhere in the world with a globally distributed team of talented builders and creators.
              </p>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 mx-auto mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Cutting-Edge Technology</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Work with the latest tools, AI-augmented workflows, and modern tech stacks that keep you at the forefront of development.
              </p>
            </div>
            
            <div className="rounded-lg border border-zinc-200/70 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center ring-1 ring-indigo-500/20 mx-auto mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Real Impact</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Build products that matter, work on our own successful ventures, and see the direct impact of your work on real businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">Don&apos;t See the Perfect Role?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            We&apos;re always looking for talented people who share our passion for building. If you think you&apos;d be a great fit for our team, we&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-base font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}