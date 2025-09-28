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
    
    // Ensure the theme is applied
    if (shouldDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Apply the new theme
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-zinc-950/50 border-b border-zinc-200/70 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={closeMobileMenu}>
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 grid place-items-center ring-1 ring-zinc-200 dark:ring-zinc-800">
              <span className="text-[11px] sm:text-[13px] font-semibold tracking-tight">I</span>
            </div>
            <span className="text-base sm:text-lg font-semibold tracking-tight">Innovaly</span>
            <span className="ml-1 sm:ml-2 hidden xs:inline-flex rounded-full border border-zinc-200/70 dark:border-zinc-800 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-zinc-600 dark:text-zinc-400">Latin-founded</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/about" className="px-2 xl:px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors">Our Philosophy</Link>
            <Link href="/services" className="px-2 xl:px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors">Services</Link>
            <Link href="/proof" className="px-2 xl:px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors">Our Proof</Link>
            <Link href="/ecosystem" className="px-2 xl:px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors">Our Ecosystem</Link>
            <Link href="/reviews" className="px-2 xl:px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors">Reviews</Link>
            <Link href="/careers" className="px-2 xl:px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors">Careers</Link>
            <Link href="/blog" className="px-2 xl:px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors">Insights</Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* CTA Button - Hidden on mobile, visible on tablet+ */}
            <Link href="/contact" className="hidden md:inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-2 lg:px-3 py-1.5 lg:py-2 text-xs lg:text-sm font-medium hover:opacity-95 active:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-all">
              <Rocket className="mr-1 lg:mr-2 h-3.5 lg:h-4 w-3.5 lg:w-4" />
              <span className="hidden lg:inline">Let&apos;s Build Together</span>
              <span className="lg:hidden">Build</span>
            </Link>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-md border border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors" 
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-md border border-zinc-200/70 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-zinc-200/70 dark:border-zinc-800`}>
          <div className="py-3 space-y-1">
            <Link 
              href="/about" 
              className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" 
              onClick={closeMobileMenu}
            >
              Our Philosophy
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" 
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/proof" 
              className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" 
              onClick={closeMobileMenu}
            >
              Our Proof
            </Link>
            <Link 
              href="/ecosystem" 
              className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" 
              onClick={closeMobileMenu}
            >
              Our Ecosystem
            </Link>
            <Link 
              href="/reviews" 
              className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" 
              onClick={closeMobileMenu}
            >
              Reviews
            </Link>
            <Link 
              href="/careers" 
              className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" 
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
            <Link 
              href="/blog" 
              className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" 
              onClick={closeMobileMenu}
            >
              Insights
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors md:hidden" 
              onClick={closeMobileMenu}
            >
              <div className="flex items-center">
                <Rocket className="mr-2 h-4 w-4" />
                Let&apos;s Build Together
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
