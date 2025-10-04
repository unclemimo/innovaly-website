'use client';

import { useForm, ValidationError } from '@formspree/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Apply() {
  const [state, handleSubmit] = useForm('mdkwgwjq');

  if (state.succeeded) {
    return (
      <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
        <Header />
        
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-green-600 dark:text-green-400">Application Submitted!</h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
                Thank you for your interest in joining our team! We&apos;ve received your application and will review it carefully.
              </p>
            </div>
            
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">What happens next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">1</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">We&apos;ll review your application and portfolio within 3-5 business days</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">2</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">If selected, we&apos;ll schedule an initial interview to discuss your experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">3</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">We&apos;ll conduct a technical assessment and team fit evaluation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">4</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">Final decision and offer discussion</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/careers" 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View Other Positions
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <main className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Ready to build something extraordinary? We&apos;re looking for talented developers who share our passion for execution and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Company Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-indigo-900 dark:text-indigo-100">Why Innovaly?</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Cutting-Edge Technology</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">Work with AI-augmented workflows, modern tech stacks, and the latest development tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Remote-First Culture</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">Work from anywhere with a globally distributed team of talented builders</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Real Impact</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">Build products that matter and see the direct impact of your work on real businesses</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 text-purple-900 dark:text-purple-100">What We&apos;re Looking For</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Problem-solvers who prefer building over attending meetings</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Developers obsessed with execution and quality</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Team players who thrive in startup environments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Passionate about cutting-edge technology and AI tools</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Apply Now</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Fill out the application form below and let us know why you&apos;d be a great fit for our team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors"
                        placeholder="John Doe"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors"
                        placeholder="john@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors"
                        placeholder="Da Nang, Vietnam"
                      />
                      <ValidationError prefix="Location" field="location" errors={state.errors} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="position" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Position Applying For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors"
                    >
                      <option value="">Select a position</option>
                      <option value="technical-lead">Technical Lead & Strategic Architect</option>
                      <option value="backend-developer">Senior Full Stack Developer (Backend Focus)</option>
                      <option value="frontend-developer">Senior Full Stack Developer (Frontend Focus)</option>
                      <option value="quality-engineer">Quality Engineer (Part-Time)</option>
                      <option value="other">Other Position</option>
                    </select>
                    <ValidationError prefix="Position" field="position" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Years of Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-3">2-3 years</option>
                      <option value="4-5">4-5 years</option>
                      <option value="6-8">6-8 years</option>
                      <option value="9+">9+ years</option>
                    </select>
                    <ValidationError prefix="Experience" field="experience" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="portfolio" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Portfolio/GitHub/LinkedIn *
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      required
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors"
                      placeholder="https://github.com/yourusername or https://yourportfolio.com"
                    />
                    <ValidationError prefix="Portfolio" field="portfolio" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ai_tools" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      AI Development Tools Experience *
                    </label>
                    <textarea
                      id="ai_tools"
                      name="ai_tools"
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors resize-none"
                      placeholder="Please describe your experience with AI development tools like Cursor.ai, GitHub Copilot, Claude Code, Factory, Onlook, v0.dev, Magic UI MCP, etc. Include specific examples of how you've used these tools in your development workflow."
                    />
                    <ValidationError prefix="AI Tools" field="ai_tools" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cover_letter" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Cover Letter *
                    </label>
                    <textarea
                      id="cover_letter"
                      name="cover_letter"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors resize-none"
                      placeholder="Tell us about yourself, your experience with startup environments, why you want to join Innovaly, and what makes you a great fit for this specific role. Please mention any experience with AI-augmented development workflows and your approach to building products from concept to production."
                    />
                    <ValidationError prefix="Cover Letter" field="cover_letter" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="availability" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Availability *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 transition-colors"
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate (within 2 weeks)</option>
                      <option value="1-month">1 month notice</option>
                      <option value="2-months">2 months notice</option>
                      <option value="3-months">3+ months notice</option>
                    </select>
                    <ValidationError prefix="Availability" field="availability" errors={state.errors} />
                  </div>


                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      {state.submitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Submitting Application...</span>
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                    <ValidationError errors={state.errors} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
