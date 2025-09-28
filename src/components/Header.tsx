'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Rocket } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(shouldDark);
    document.body.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.classList.toggle('dark', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-zinc-950/50 border-b border-zinc-200/70 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 grid place-items-center ring-1 ring-zinc-200 dark:ring-zinc-800">
              <span className="text-[13px] font-semibold tracking-tight">I</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Innovaly</span>
            <span className="ml-2 hidden rounded-full border border-zinc-200/70 dark:border-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-400 sm:inline">Latin-founded</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/about" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">Our Philosophy</Link>
            <Link href="/services" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Services</Link>
            <Link href="/proof" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Our Proof</Link>
            <Link href="/ecosystem" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Our Ecosystem</Link>
            <Link href="/reviews" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Reviews</Link>
            <Link href="/careers" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Careers</Link>
            <Link href="/blog" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Insights</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden sm:inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium hover:opacity-95 active:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60">
              <Rocket className="mr-2 h-4 w-4" />
                Let&apos;s Build Together
            </Link>
            <button 
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60" 
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-zinc-200/70 dark:border-zinc-800 py-2`}>
          <div className="flex flex-col gap-1 py-2">
            <Link href="/about" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Our Philosophy</Link>
            <Link href="/services" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Services</Link>
            <Link href="/proof" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Our Proof</Link>
            <Link href="/ecosystem" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Our Ecosystem</Link>
            <Link href="/reviews" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Reviews</Link>
            <Link href="/careers" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Careers</Link>
            <Link href="/blog" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Insights</Link>
            <Link href="/contact" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
