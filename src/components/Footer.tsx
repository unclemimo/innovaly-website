import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-200/70 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 grid place-items-center ring-1 ring-zinc-200 dark:ring-zinc-800">
                <span className="text-[13px] font-semibold tracking-tight">I</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">Innovaly</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Business Architects who build—web, growth, platforms, and automation.</p>
            <a href="mailto:weare@innovaly.services" className="mt-3 inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
              <Mail className="mr-2 h-4 w-4" />
              weare@innovaly.services
            </a>
          </div>
          <div>
            <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link className="hover:underline" href="/about">Our Philosophy</Link></li>
              <li><Link className="hover:underline" href="/ecosystem">Our Ecosystem</Link></li>
              <li><Link className="hover:underline" href="/reviews">Reviews</Link></li>
              <li><Link className="hover:underline" href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Services</h5>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link className="hover:underline" href="/services/websites">Growth-Engine Websites</Link></li>
              <li><Link className="hover:underline" href="/services/authority">Authority Building</Link></li>
              <li><Link className="hover:underline" href="/services/innovation">Innovation & Platform Dev</Link></li>
              <li><Link className="hover:underline" href="/services/automation">AI & Process Automation</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Resources</h5>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link className="hover:underline" href="/proof">Case Studies</Link></li>
              <li><Link className="hover:underline" href="/blog">Insights</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-zinc-200/70 dark:border-zinc-800 pt-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Innovaly Services. Remote-first.</span>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="mailto:weare@innovaly.services" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
