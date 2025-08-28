'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, HomeIcon, RectangleStackIcon, UserGroupIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeProvider';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Projects', href: '/projects', icon: RectangleStackIcon },
    { name: 'Team', href: '/team', icon: UserGroupIcon },
    { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
  ];

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always render with default state initially to prevent hydration mismatch
    const shouldShrink = isMounted && isScrolled;
    
    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMounted && shouldShrink ? 'mx-6 mt-3' : 'mx-4 mt-4'}`}>
         <nav className={`mx-auto flex items-center justify-between bg-white/10 dark:bg-black/10 backdrop-blur-xl backdrop-saturate-150 shadow-2xl shadow-black/5 rounded-3xl border border-white/20 dark:border-white/10 transition-all duration-300 ${isMounted && shouldShrink ? 'max-w-2xl p-5 lg:px-10 h-16' : 'max-w-7xl p-8 lg:px-10 h-auto'}`} aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hephaestus</span>
            <h1 className={`font-bold text-gray-900 dark:text-white transition-all duration-300 ${
              isMounted && shouldShrink ? 'text-lg' : 'text-2xl'
            }`}>
              Hephaestus
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 relative z-10"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className={`hidden lg:flex transition-all duration-300 ${isMounted && shouldShrink ? 'lg:gap-x-2' : 'lg:gap-x-12'}`}>
          {navigation.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`px-3 py-2 rounded-xl text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-300 relative z-10 flex items-center gap-2 ${isMounted && shouldShrink ? 'justify-center' : ''}`}
                 title={isMounted && shouldShrink ? item.name : undefined}
              >
                <IconComponent className={`h-5 w-5 transition-all duration-300 ${isMounted && shouldShrink ? 'h-4 w-4' : ''}`} />
                 <span className={`transition-all duration-300 ${isMounted && shouldShrink ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className={`hidden lg:flex lg:flex-1 lg:justify-end lg:items-center transition-all duration-300 ${isMounted && shouldShrink ? 'lg:gap-x-2' : 'lg:gap-x-4'}`}>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-300 relative z-10`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className={`transition-all duration-300 ${isMounted && shouldShrink ? 'h-4 w-4' : 'h-5 w-5'}`} />
             ) : (
               <SunIcon className={`transition-all duration-300 ${isMounted && shouldShrink ? 'h-4 w-4' : 'h-5 w-5'}`} />
            )}
          </button>
          <Link 
            href="/careers" 
            className={`transition-all duration-300 relative z-10 flex items-center gap-2 ${
                isMounted && shouldShrink 
                  ? 'text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 justify-center' 
                  : 'px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
              }`}
             title={isMounted && shouldShrink ? 'Join Us' : undefined}
          >
            <EnvelopeIcon className={`transition-all duration-300 ${isMounted && shouldShrink ? 'h-4 w-4' : 'h-5 w-5'}`} />
             <span className={`transition-all duration-300 ${isMounted && shouldShrink ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              Join Us <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/10 dark:bg-black/10 backdrop-blur-xl backdrop-saturate-150 px-6 py-6 sm:max-w-sm border-l border-white/20 dark:border-white/10 shadow-2xl shadow-black/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsMenuOpen(false)}>
                <span className="sr-only">Hephaestus</span>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Hephaestus</h1>
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-200 relative z-10"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <MoonIcon className="h-5 w-5" />
                  ) : (
                    <SunIcon className="h-5 w-5" />
                  )}
                </button>
                <button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-200 relative z-10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-white/10 hover:text-purple-600 dark:hover:text-purple-400 backdrop-blur-sm transition-all duration-200 relative z-10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/careers"
                    className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-white/10 hover:text-purple-600 dark:hover:text-purple-400 backdrop-blur-sm transition-all duration-200 relative z-10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}