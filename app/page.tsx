'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    let currentSlide = 0;
    const totalSlides = 7;
    
    // Make functions available globally
    (window as any).nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlideshow();
    };
    
    (window as any).previousSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlideshow();
    };
    
    (window as any).goToSlide = (index: number) => {
      currentSlide = index;
      updateSlideshow();
    };
    
    const updateSlideshow = () => {
      const slideshow = document.getElementById('slideshow');
      if (slideshow) {
        slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
      
      // Update indicators with water-like animation
      for (let i = 0; i < totalSlides; i++) {
        const indicator = document.getElementById(`indicator-${i}`);
        if (indicator) {
          if (i === currentSlide) {
            // Active indicator with water-like animation
            indicator.className = 'relative w-8 h-2 rounded-full bg-purple-600 overflow-hidden transition-all duration-500';
            indicator.innerHTML = `
              <div class="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-pulse"></div>
              <div class="absolute inset-0 bg-purple-300 opacity-30 animate-ping"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-200 via-transparent to-purple-200 animate-bounce opacity-50"></div>
            `;
          } else {
            // Inactive indicator
            indicator.className = 'relative w-8 h-2 rounded-full bg-gray-500/50 hover:bg-purple-400/70 overflow-hidden transition-all duration-500 hover:scale-110';
            indicator.innerHTML = `
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-700 opacity-0 hover:opacity-100"></div>
            `;
          }
        }
      }
    };
    
    // Auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      (window as any).nextSlide();
    }, 5000);
    
    return () => {
      clearInterval(interval);
      delete (window as any).nextSlide;
      delete (window as any).previousSlide;
      delete (window as any).goToSlide;
    };
  }, []);
  return (
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl transition-colors duration-300">
              Hephaestus Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              University Robotics and Automation & Informatics Team dedicated to innovation, 
              research, and pushing the boundaries of technology through cutting-edge projects 
              and collaborative learning.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-200"
              >
                View Projects
              </Link>
              <Link href="/team" className="group text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                Meet the Team <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 ease-out" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400 transition-colors duration-300">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
              Innovating the Future of Technology
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              We are a passionate team of students and researchers working on cutting-edge robotics, 
              automation, and informatics projects. Our mission is to bridge the gap between 
              theoretical knowledge and practical applications.
            </p>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      {/* Image Slideshow Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Animated Background with Image Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Camera Icons */}
          <div className="absolute top-20 left-20 w-12 h-12 opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-purple-400">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97L2.46 14.6c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.63Z"/>
            </svg>
          </div>
          
          {/* Floating Image Icons */}
          <div className="absolute top-40 right-32 w-10 h-10 opacity-25 animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-indigo-400">
              <path d="M8.5 13.5L11 16.5L14.5 12L19 18H5M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 19.1 19 21 19Z"/>
            </svg>
          </div>
          
          {/* Floating Gallery Icons */}
          <div className="absolute bottom-32 left-1/3 w-14 h-14 opacity-15 animate-bounce" style={{animationDelay: '2s', animationDuration: '4.5s'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
              <path d="M22 16V4C22 2.9 21.1 2 20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16M11 12L13.03 14.71L16 11L20 16H8M2 6V20C2 21.1 2.9 22 4 22H18V20H4V6H2Z"/>
            </svg>
          </div>
          
          {/* Floating Video Icons */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 opacity-30 animate-ping" style={{animationDelay: '0.5s'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-purple-500">
              <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z"/>
            </svg>
          </div>
          
          {/* Floating Photo Icons */}
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 opacity-35 animate-ping" style={{animationDelay: '1.5s'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-emerald-500">
              <path d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5H16.83L15 3H9M12 18C8.69 18 6 15.31 6 12S8.69 6 12 6S18 8.69 18 12S15.31 18 12 18M12 8C9.79 8 8 9.79 8 12S9.79 16 12 16S16 14.21 16 12S14.21 8 12 8Z"/>
            </svg>
          </div>
          
          {/* Floating Album Icons */}
          <div className="absolute top-2/3 right-1/3 w-10 h-10 opacity-25 animate-ping" style={{animationDelay: '2.5s'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-cyan-500">
              <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2M18 20H6V4H11V12L13.5 10.5L16 12V4H18V20Z"/>
            </svg>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-purple-300 transition-colors duration-300">Gallery</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl transition-colors duration-300">
              Our Journey in Pictures
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-200 transition-colors duration-300">
              Explore our projects, achievements, and team moments through our visual story
            </p>
          </div>
          
          {/* Slideshow Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 shadow-2xl transition-colors duration-300">
            <div className="flex transition-transform duration-500 ease-in-out" id="slideshow">
              {/* Slide 1 */}
              <div className="w-full flex-shrink-0">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 flex items-center justify-center transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">1</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Project Image 1</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div className="w-full flex-shrink-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-blue-200 dark:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">2</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Project Image 2</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 3 */}
              <div className="w-full flex-shrink-0">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-emerald-200 dark:bg-emerald-700 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">3</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Project Image 3</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 4 */}
              <div className="w-full flex-shrink-0">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-amber-200 dark:bg-amber-700 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-2xl font-bold text-amber-600 dark:text-amber-300">4</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Project Image 4</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 5 */}
              <div className="w-full flex-shrink-0">
                <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 flex items-center justify-center transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-rose-200 dark:bg-rose-700 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-2xl font-bold text-rose-600 dark:text-rose-300">5</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Project Image 5</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 6 */}
              <div className="w-full flex-shrink-0">
                <div className="aspect-video bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 flex items-center justify-center transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-violet-200 dark:bg-violet-700 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-2xl font-bold text-violet-600 dark:text-violet-300">6</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Project Image 6</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 7 */}
              <div className="w-full flex-shrink-0">
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 flex items-center justify-center transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-indigo-200 dark:bg-indigo-700 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">7</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Project Image 7</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110" onClick={() => (window as any).previousSlide()}>
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110" onClick={() => (window as any).nextSlide()}>
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
              <button className="relative w-8 h-2 rounded-full bg-purple-600 overflow-hidden transition-all duration-500" onClick={() => (window as any).goToSlide(0)} id="indicator-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-pulse"></div>
                <div className="absolute inset-0 bg-purple-300 opacity-30 animate-ping"></div>
              </button>
              <button className="relative w-8 h-2 rounded-full bg-gray-500/50 hover:bg-purple-400/70 overflow-hidden transition-all duration-500 hover:scale-110" onClick={() => (window as any).goToSlide(1)} id="indicator-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-700 opacity-0 hover:opacity-100"></div>
              </button>
              <button className="relative w-8 h-2 rounded-full bg-gray-500/50 hover:bg-purple-400/70 overflow-hidden transition-all duration-500 hover:scale-110" onClick={() => (window as any).goToSlide(2)} id="indicator-2">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-700 opacity-0 hover:opacity-100"></div>
              </button>
              <button className="relative w-8 h-2 rounded-full bg-gray-500/50 hover:bg-purple-400/70 overflow-hidden transition-all duration-500 hover:scale-110" onClick={() => (window as any).goToSlide(3)} id="indicator-3">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-700 opacity-0 hover:opacity-100"></div>
              </button>
              <button className="relative w-8 h-2 rounded-full bg-gray-500/50 hover:bg-purple-400/70 overflow-hidden transition-all duration-500 hover:scale-110" onClick={() => (window as any).goToSlide(4)} id="indicator-4">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-700 opacity-0 hover:opacity-100"></div>
              </button>
              <button className="relative w-8 h-2 rounded-full bg-gray-500/50 hover:bg-purple-400/70 overflow-hidden transition-all duration-500 hover:scale-110" onClick={() => (window as any).goToSlide(5)} id="indicator-5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-700 opacity-0 hover:opacity-100"></div>
              </button>
              <button className="relative w-8 h-2 rounded-full bg-gray-500/50 hover:bg-purple-400/70 overflow-hidden transition-all duration-500 hover:scale-110" onClick={() => (window as any).goToSlide(6)} id="indicator-6">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-700 opacity-0 hover:opacity-100"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      {/* Projects Overview Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Animated Tech Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Moving Cables */}
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1200 800">
            <path d="M0,400 Q300,200 600,400 T1200,400" stroke="#a855f7" strokeWidth="2" fill="none" className="animate-pulse">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,400 Q300,200 600,400 T1200,400;M0,400 Q300,600 600,400 T1200,400;M0,400 Q300,200 600,400 T1200,400" />
            </path>
            <path d="M0,300 Q400,100 800,300 T1200,300" stroke="#3b82f6" strokeWidth="1.5" fill="none" className="animate-pulse">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,300 Q400,100 800,300 T1200,300;M0,300 Q400,500 800,300 T1200,300;M0,300 Q400,100 800,300 T1200,300" />
            </path>
          </svg>
          
          {/* Floating Laptops */}
          <div className="absolute top-20 left-20 w-16 h-12 bg-purple-600 rounded opacity-30 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-32 w-12 h-8 bg-indigo-600 rounded opacity-25 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-14 h-10 bg-blue-600 rounded opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
          
          {/* Floating Tools */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-purple-500 rounded-full opacity-40 animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-indigo-500 rounded-full opacity-35 animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-blue-500 rounded-full opacity-30 animate-ping" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-300 transition-colors duration-300">Our Projects</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl transition-colors duration-300">
              Cutting-Edge Innovation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-200 transition-colors duration-300">
              Explore our diverse portfolio of robotics, automation, and informatics projects 
              that are shaping the future of technology.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600 hover:rotate-12 hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold">A</span>
                  </div>
                  Athena - Smart Campus
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-gray-200">
                    AI-powered campus management system with IoT integration for optimized resource allocation and enhanced student experience.
                  </p>
                  <p className="mt-6">
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mr-2">AI/ML</span>
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mr-2">IoT</span>
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">Cloud</span>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-green-500/20 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-600 hover:rotate-12 hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold">Z</span>
                  </div>
                  Zephir - Weather Systems
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-gray-200">
                    Advanced weather monitoring and prediction system using machine learning algorithms and distributed sensor networks.
                  </p>
                  <p className="mt-6">
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mr-2">Sensors</span>
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mr-2">ML</span>
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">Data</span>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-orange-500/20 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-orange-600 hover:rotate-12 hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold">H</span>
                  </div>
                  Hermes - Communication Hub
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-gray-200">
                    Secure, decentralized communication platform for emergency response and disaster management coordination.
                  </p>
                  <p className="mt-6">
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mr-2">Security</span>
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mr-2">Network</span>
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">Mobile</span>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-teal-500/20 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-teal-600 hover:rotate-12 hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold">H</span>
                  </div>
                  Heron - Autonomous Drones
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-gray-200">
                    Swarm robotics project featuring autonomous drones for search and rescue operations with real-time coordination.
                  </p>
                  <p className="mt-6">
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mr-2">Robotics</span>
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mr-2">AI</span>
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">Swarm</span>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-purple-500/30 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View All Projects
              <span className="ml-2 hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      
      {/* Team Statistics Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Animated Avatar Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Moving Avatar Circles */}
          <div className="absolute top-20 left-20 w-12 h-12 bg-emerald-500 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-32 right-32 w-8 h-8 bg-teal-500 rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-cyan-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-emerald-400 rounded-full opacity-35 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-teal-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s', animationDuration: '2.8s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2.5s', animationDuration: '3.2s'}}></div>
          <div className="absolute top-1/4 left-2/3 w-18 h-18 bg-emerald-600 rounded-full opacity-25 animate-bounce" style={{animationDelay: '3s', animationDuration: '4.5s'}}></div>
          <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-teal-600 rounded-full opacity-30 animate-bounce" style={{animationDelay: '3.5s', animationDuration: '2.2s'}}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-300 transition-colors duration-300">Our Team</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl transition-colors duration-300">
              Passionate Innovators
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-200 transition-colors duration-300">
              Meet the brilliant minds behind our groundbreaking projects. Our diverse team 
              brings together expertise from multiple disciplines.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center hover:scale-110 hover:text-emerald-300 transition-all duration-300 cursor-default">
                <dt className="text-4xl font-bold text-white hover:animate-pulse">25+</dt>
                <dd className="mt-2 text-base leading-7 text-gray-200">Active Members</dd>
              </div>
              <div className="flex flex-col items-center text-center hover:scale-110 hover:text-emerald-300 transition-all duration-300 cursor-default">
                <dt className="text-4xl font-bold text-white hover:animate-pulse">12</dt>
                <dd className="mt-2 text-base leading-7 text-gray-200">Ongoing Projects</dd>
              </div>
              <div className="flex flex-col items-center text-center hover:scale-110 hover:text-emerald-300 transition-all duration-300 cursor-default">
                <dt className="text-4xl font-bold text-white hover:animate-pulse">5</dt>
                <dd className="mt-2 text-base leading-7 text-gray-200">Research Areas</dd>
              </div>
            </dl>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/team"
              className="group inline-flex items-center rounded-md bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-teal-500/30 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
            >
              Meet Our Team
              <span className="ml-2 group-hover:translate-x-2 group-hover:animate-bounce transition-all duration-300" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
      
      {/* Social Media & Contact Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Animated Social Media Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating GitHub Icons */}
          <svg className="absolute top-20 left-20 w-8 h-8 opacity-20 animate-bounce text-indigo-400" style={{animationDelay: '0s', animationDuration: '3s'}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          
          {/* Floating LinkedIn Icons */}
          <svg className="absolute top-40 right-32 w-6 h-6 opacity-25 animate-bounce text-purple-400" style={{animationDelay: '1s', animationDuration: '4s'}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          
          {/* Floating Instagram Icons */}
          <svg className="absolute bottom-32 left-1/3 w-10 h-10 opacity-30 animate-bounce text-pink-400" style={{animationDelay: '2s', animationDuration: '3.5s'}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          
          {/* Floating Email Icons */}
          <svg className="absolute top-1/4 right-1/4 w-7 h-7 opacity-35 animate-bounce text-indigo-500" style={{animationDelay: '3s', animationDuration: '2.8s'}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-pink-300 transition-colors duration-300">Connect With Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl transition-colors duration-300">
              Stay Connected
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-200 transition-colors duration-300">
              Follow our journey, get updates on our latest projects, and connect with our community 
              across various social media platforms.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              <a href="https://github.com/hephaestus-team" className="group flex flex-col items-center text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <svg className="h-6 w-6 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="mt-4 text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-300">GitHub</span>
              </a>
              
              <a href="https://linkedin.com/company/hephaestus-team" className="group flex flex-col items-center text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-500 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
                  <svg className="h-6 w-6 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="mt-4 text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-300">LinkedIn</span>
              </a>
              
              <a href="https://instagram.com/hephaestus.team" className="group flex flex-col items-center text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-pink-600 group-hover:bg-pink-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <svg className="h-6 w-6 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.80-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="mt-4 text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-300">Instagram</span>
              </a>
              
              <a href="mailto:contact@hephaestus.gr" className="group flex flex-col items-center text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-500 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
                  <svg className="h-6 w-6 text-white group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="mt-4 text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-300">Email</span>
              </a>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-200 transition-colors duration-300">
                Have questions or want to collaborate? 
                <a href="mailto:contact@hephaestus.gr" className="font-medium text-purple-300 hover:text-purple-200 hover:translate-x-1 transition-all duration-200">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
