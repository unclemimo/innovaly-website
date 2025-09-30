import Link from 'next/link';
import { ArrowRight, Code, Bug, MapPin, Clock, Users, Zap } from 'lucide-react';
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
          
          {/* Job 1: Principal Engineer */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer & Technical Lead</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Remote (Da Nang office space available)
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Full-time (Async with some Vietnam timezone overlap)
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
                We're seeking a Senior Full Stack Developer & Technical Lead who embodies the startup builder mindset. This isn't just a technical role—it's for someone who has been in the trenches of building products from scratch, who understands the intersection of technology and business, and who thrives in environments where the roadmap is shaped by vision rather than rigid specifications. You'll work directly with our CEO to translate vision into technical strategy, build alongside a mid-senior frontend-focused developer, and have significant autonomy to shape our engineering direction. Your expertise in AI and cutting-edge development tools will be crucial as we establish advanced workflows using Factory, Cursor.ai, Onlook, and other AI agents; and spec-driven design systems like BMAD-Method.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Architect and build scalable products from concept to deployment</li>
                  <li>• Lead technical strategy and make key technology decisions</li>
                  <li>• Mentor and collaborate with our frontend-focused developer</li>
                  <li>• Establish AI-augmented development workflows and best practices</li>
                  <li>• Manage multiple projects in parallel with complete autonomy</li>
                  <li>• Help shape and organize our growing engineering team</li>
                  <li>• Stay current with latest AI tools and development practices (September 2025+)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• <strong>Startup founder or builder experience</strong> - you've built businesses before</li>
                  <li>• Full-stack engineer with strong backend expertise and frontend capabilities</li>
                  <li>• Comfortable working with minimal detailed roadmaps, driven by vision</li>
                  <li>• Experienced in leading technical teams and making architectural decisions</li>
                  <li>• Up-to-date with AI tools: Factory, Cursor.ai, Onlook, Agno, and similar platforms</li>
                  <li>• Proven ability to ship products and work cross-functionally</li>
                  <li>• Located in Vietnam (Da Nang preferred)</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">Why This Role is Different:</h4>
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                This is a senior technical role with significant autonomy and growth potential. You'll work directly with leadership to shape our technology direction and have the opportunity to grow into a more senior position as we scale. We're looking for someone who thinks like a builder and is excited about joining an early-stage startup.
              </p>
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
                    Remote (Da Nang preferred)
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Full-time (Async with some Vietnam timezone overlap)
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
                You are a detail-obsessed frontend specialist who thrives on building pixel-perfect, high-performance user interfaces. Your expertise spans modern web frameworks like Next.js and TypeScript, plus native mobile development with Expo. You&apos;re passionate about leveraging AI tools for frontend development, working with design systems, and optimizing time-to-market while maintaining exceptional quality. You&apos;ll work within our ecosystem using cutting-edge tools like 21st.dev (Magic MCP), shadcn/ui, and other AI-augmented development platforms to build dynamic, responsive applications for our clients and internal products.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Build responsive web applications using Next.js, TypeScript, and modern frontend frameworks</li>
                  <li>• Develop native mobile applications using Expo and React Native</li>
                  <li>• Leverage AI tools and platforms like 21st.dev (Magic MCP) for rapid frontend development</li>
                  <li>• Work with design systems using shadcn/ui and other component libraries</li>
                  <li>• Translate Figma designs into pixel-perfect, functional components</li>
                  <li>• Optimize applications for maximum performance and user experience</li>
                  <li>• Maintain high code quality through systematic development practices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• <strong>Portfolio required:</strong> Please share links to your previous work</li>
                  <li>• 3+ years experience with React, Next.js, TypeScript, and modern CSS</li>
                  <li>• Experience with Expo and React Native for native mobile development</li>
                  <li>• Familiarity with AI-powered development tools and workflows</li>
                  <li>• Experience with design systems and component libraries (shadcn/ui preferred)</li>
                  <li>• Detail-obsessed with a systematic approach to development</li>
                  <li>• Located in Vietnam (Da Nang preferred)</li>
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
                <h3 className="text-xl font-semibold mb-2">Quality Engineer (Part-Time)</h3>
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
                Quality is our flagship value. We are seeking a strategic Part-Time Quality Engineer to be the guardian of that value across our entire development process. You will go beyond traditional testing to establish quality standards, processes, and culture. You will work hand-in-hand with our developers, contractors, and AI agents to ensure that every product we ship not only meets technical requirements but delivers exceptional user experience and maintains our high standards throughout the development lifecycle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Establish and maintain quality standards and processes across all projects</li>
                  <li>• Design and implement comprehensive testing strategies (manual and automated)</li>
                  <li>• Conduct code reviews and quality audits to ensure best practices</li>
                  <li>• Monitor and analyze quality metrics to identify improvement opportunities</li>
                  <li>• Collaborate with developers to integrate quality practices into the development workflow</li>
                  <li>• Leverage AI-powered tools like CodeRabbit and Cursor for enhanced quality assurance</li>
                  <li>• Document and communicate quality standards and processes to the team</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• 3+ years experience in Quality Engineering or QA with a focus on process improvement</li>
                  <li>• Strong understanding of software testing methodologies and quality assurance principles</li>
                  <li>• Experience with both manual and automated testing frameworks</li>
                  <li>• Ability to establish quality standards and processes from scratch</li>
                  <li>• Excellent communication skills for working with distributed teams</li>
                  <li>• Detail-oriented with a strategic mindset for quality improvement</li>
                  <li>• Familiarity with modern development tools and AI-powered quality solutions</li>
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

      {/* Growth & Benefits */}
      <section className="py-10 sm:py-14 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-8 text-center">Growth & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="text-xl font-semibold mb-4">We Invest in Our People</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                We don't see our team members as numbers on a payroll. We believe in fair treatment and direct correlation between company growth and your personal development. As an early-stage startup, we're committed to growing together.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• <strong>Progressive Growth Plan:</strong> Unlock bonuses and salary increases based on milestones</li>
                <li>• <strong>Regular Performance Reviews:</strong> Quarterly progress assessments with clear growth paths</li>
                <li>• <strong>Direct Impact:</strong> Your contributions directly influence company success and your rewards</li>
                <li>• <strong>Long-term Vision:</strong> We're building for the next level, and you'll be part of that journey</li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Benefits</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                After your initial months with us, our solid team members receive comprehensive benefits that grow with the company.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• <strong>Health Insurance:</strong> Comprehensive medical coverage for you and your family</li>
                <li>• <strong>Wellness Stipends:</strong> Gym memberships and wellness activities</li>
                <li>• <strong>Equipment & Tools:</strong> Latest work computers and professional development tools</li>
                <li>• <strong>Learning Budget:</strong> Courses, conferences, and skill development opportunities</li>
                <li>• <strong>Flexible Benefits:</strong> Customizable benefits package based on your needs</li>
              </ul>
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