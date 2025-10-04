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
          
          {/* Job 1: Technical Lead */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Lead & Strategic Architect</h3>
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
                We&apos;re seeking a Technical Lead & Strategic Architect who embodies the startup builder mindset. This is a strategic leadership role for someone who has been in the trenches of building products from scratch, understands the intersection of technology and business, and thrives in environments where the roadmap is shaped by vision rather than rigid specifications. You&apos;ll work directly with our CEO to translate vision into technical strategy, lead our growing engineering team, and have significant autonomy to shape our engineering direction. Your expertise in AI and cutting-edge development tools will be crucial as we establish advanced workflows using Factory, Cursor.ai, Onlook, and other AI agents; and spec-driven design systems like BMAD-Method.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Lead technical strategy and make critical architectural decisions</li>
                  <li>• Mentor and manage our backend and frontend development teams</li>
                  <li>• Establish AI-augmented development workflows and best practices</li>
                  <li>• Drive technical roadmap and technology choices alongside the CEO</li>
                  <li>• Recruit and onboard engineering talent for our Vietnam team</li>
                  <li>• Ensure quality standards and technical excellence across all projects</li>
                  <li>• Stay current with latest AI tools and development practices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• <strong>Startup founder or builder experience</strong> - you&apos;ve built businesses before</li>
                  <li>• 5+ years full-stack experience with strong leadership capabilities</li>
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
                This is a strategic technical leadership role with significant autonomy and growth potential. You&apos;ll work directly with leadership to shape our technology direction, lead our engineering team, and have the opportunity to grow into a more senior position as we scale. We&apos;re looking for someone who thinks like a builder and is excited about joining an early-stage startup.
              </p>
            </div>
            
            <Link href="/apply" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-95">
              Apply for this position
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Job 2: Backend Developer */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer (Backend Focus)</h3>
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
                We&apos;re looking for a passionate Senior Full Stack Developer with deep backend expertise to become a cornerstone of our technical team. You will partner directly with our founder to architect and build the backbone for a variety of our in-house digital platforms and for external agency clients. This is your opportunity to shape a complex, multi-cloud, composable architecture, establish next-generation AI-augmented workflows, and play a pivotal role in building our engineering team in Vietnam.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Design and develop scalable backend systems using headless, multi-cloud architecture</li>
                  <li>
                    • Operate from a spec-driven design process following&nbsp;
                    <a
                      href="https://github.com/bmad-code-org/BMAD-METHOD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100"
                    >
                      BMAD-METHOD
                    </a>
                    &nbsp;for Agile Development
                  </li>
                  <li>• Drive technical strategy and make critical decisions on architecture and technology</li>
                  <li>• Collaborate with and mentor other developers and external contractors</li>
                  <li>• Champion AI-augmented development processes using Cursor.ai, Claude Code, GitHub Copilot</li>
                  <li>• Manage multiple projects in parallel with high autonomy using Linear.app/Notion</li>
                  <li>• Play a foundational role in recruiting and onboarding our engineering team</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• <strong>4+ years full-stack experience</strong> with strong backend emphasis</li>
                  <li>• Deep expertise in Node.js, TypeScript, and serverless APIs (Next.js API Routes)</li>
                  <li>• Strong command of PostgreSQL and Supabase with Row Level Security (RLS)</li>
                  <li>• Cybersecurity awareness and defensive mindset</li>
                  <li>• Experience with Docker and deploying on Railway, Vercel, AWS</li>
                  <li>• Familiarity with event-driven architecture and complex third-party API integrations</li>
                  <li>• Located in Vietnam (Da Nang preferred)</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Compensation & Growth:</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Starting salary: $650-$950 USD/month based on experience, with performance-based growth, bonuses from month three, and comprehensive benefits for top contributors.
              </p>
            </div>
            
            <Link href="/apply" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-95">
              Apply for this position
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Job 3: Frontend Developer */}
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-8 bg-white/60 dark:bg-zinc-900/40 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer (Frontend Focus)</h3>
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
                We&apos;re looking for a passionate Senior Full Stack Developer (Frontend Focus) to craft the exceptional user interfaces that power our diverse portfolio, from brand-new platforms to complex client solutions. You will partner directly with our founder to build pixel-perfect, high-performance user interfaces and experiences. This is your opportunity to shape exceptional user experiences, establish next-generation AI-augmented workflows, and play a pivotal role in building our engineering team in Vietnam.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">What you&apos;ll do:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Design and develop responsive web applications (Next.js, TypeScript) and native mobile apps (React Native, Expo)</li>
                  <li>• Operate from a spec-driven design process following <a
                      href="https://github.com/bmad-code-org/BMAD-METHOD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100"
                    >
                      BMAD-METHOD
                    </a> for Agile Development</li>
                  <li>• Translate Figma designs into production-ready, high-fidelity components</li>
                  <li>• Champion AI-augmented frontend workflows using Magic UI MCP (21st.dev), v0.dev, and other AI-powered platforms</li>
                  <li>• Own the end-user experience by optimizing for performance (Core Web Vitals) and accessibility (WCAG 2.1 AA)</li>
                  <li>• Manage multiple projects in parallel with high autonomy using Linear.app/Notion</li>
                  <li>• Occasionally develop custom solutions for clients on platforms like WordPress with Elementor</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Who you are:</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• <strong>Portfolio required:</strong> Please share links to your previous work</li>
                  <li>• 3+ years frontend-focused experience with React, Next.js, TypeScript, and modern CSS</li>
                  <li>• Experience with React Native (with Expo) for native mobile development</li>
                  <li>• Proven experience building and maintaining design systems using shadcn/ui</li>
                  <li>• Experience with frontend testing frameworks (Jest, React Testing Library, Playwright)</li>
                  <li>• An obsessive attention to detail and passion for creating beautiful, intuitive user experiences</li>
                  <li>• Located in Vietnam (Da Nang preferred)</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Compensation & Growth:</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Starting salary: $500-$850 USD/month based on experience, with performance-based growth, bonuses from month three, and comprehensive benefits for top contributors.
              </p>
            </div>
            
            <Link href="/apply" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-95">
              Apply for this position
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Job 4: QA Engineer */}
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
            
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Compensation & Growth:</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Competitive part-time compensation based on experience, with performance-based growth opportunities and potential for increased hours as our team expands.
              </p>
            </div>
            
            <Link href="/apply" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-95">
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
                We don&apos;t see our team members as numbers on a payroll. We believe in fair treatment and direct correlation between company growth and your personal development. As an early-stage startup, we&apos;re committed to growing together.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• <strong>Progressive Growth Plan:</strong> Unlock bonuses and salary increases based on milestones</li>
                <li>• <strong>Regular Performance Reviews:</strong> Quarterly progress assessments with clear growth paths</li>
                <li>• <strong>Direct Impact:</strong> Your contributions directly influence company success and your rewards</li>
                <li>• <strong>Long-term Vision:</strong> We&apos;re building for the next level, and you&apos;ll be part of that journey</li>
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
          <Link href="/apply" className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 text-base font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}