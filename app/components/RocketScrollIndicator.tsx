'use client';

import { useState, useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  id: number;
}

export default function RocketScrollIndicator() {
  // Hide default scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      html {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      /* Fire animation keyframes */
      @keyframes particle-float-1 {
         0% { opacity: 1; transform: translateY(0px) scale(1); }
         100% { opacity: 0; transform: translateY(-20px) scale(0.3); }
       }
       
       @keyframes particle-float-2 {
         0% { opacity: 0.8; transform: translateY(0px) translateX(0px) scale(0.8); }
         100% { opacity: 0; transform: translateY(-15px) translateX(-5px) scale(0.2); }
       }
       
       @keyframes particle-float-3 {
         0% { opacity: 0.6; transform: translateY(0px) translateX(0px) scale(0.6); }
         100% { opacity: 0; transform: translateY(-18px) translateX(5px) scale(0.1); }
       }
       
       @keyframes particle-float-4 {
         0% { opacity: 0.9; transform: translateY(0px) translateX(0px) scale(0.4); }
         100% { opacity: 0; transform: translateY(-12px) translateX(-3px) scale(0.05); }
       }
       
       @keyframes particle-float-5 {
         0% { opacity: 0.7; transform: translateY(0px) translateX(0px) scale(0.5); }
         100% { opacity: 0; transform: translateY(-16px) translateX(4px) scale(0.08); }
       }
       
       .fire-particle-1 {
         animation: particle-float-1 0.8s ease-out infinite;
       }
       
       .fire-particle-2 {
         animation: particle-float-2 1s ease-out infinite 0.2s;
       }
       
       .fire-particle-3 {
         animation: particle-float-3 0.9s ease-out infinite 0.4s;
       }
       
       .fire-particle-4 {
         animation: particle-float-4 0.7s ease-out infinite 0.1s;
       }
       
       .fire-particle-5 {
         animation: particle-float-5 1.1s ease-out infinite 0.3s;
       }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRocketStyle = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    if (isMobile) {
       // Mobile: Fly across entire screen with 4 complete left-right turns
         const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
         
         // Calculate absolute pixel positions for full screen coverage
         const screenWidth = window.innerWidth;
         const screenHeight = window.innerHeight;
         
         // 4 complete sine wave cycles across the scroll
         const cycles = 4;
         const frequency = cycles * 2 * Math.PI;
         const horizontalPixels = (screenWidth / 2) + Math.sin(scrollProgress * frequency) * (screenWidth / 2);
         const verticalPixels = scrollProgress * screenHeight;
         
         // Calculate movement direction for orientation
         const horizontalVelocity = Math.cos(scrollProgress * frequency) * frequency;
         const verticalVelocity = 1; // Always moving down
         
         // Calculate angle based on movement direction (adjusted for rocket orientation)
         const movementAngle = Math.atan2(horizontalVelocity, verticalVelocity) * (180 / Math.PI);
         
         // Banking angle for turns
         const bankingAngle = Math.cos(scrollProgress * frequency) * 20;
         
         return {
           position: 'fixed',
           left: `${horizontalPixels}px`,
           top: `${verticalPixels}px`,
           transform: `translate(-50%, -50%) rotate(${movementAngle + bankingAngle + (scrollDirection === 'down' ? 0 : 180)}deg)`,
           zIndex: -1,
           transition: 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
         };
    } else {
      // Desktop: Standard positioning but behind components
      return {
        left: '8px', // Center rocket on trail line
        top: `${20 + (window.innerHeight - 140) * scrollProgress}px`,
        transform: `translateY(-50%) ${scrollDirection === 'down' ? 'rotate(180deg)' : 'rotate(0deg)'}`,
        zIndex: -1,
        transition: 'all 300ms ease-out'
      };
    }
  };

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    let lastScrollTime = 0;
    
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < 50) return; // Throttle trail generation
      lastScrollTime = now;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      
      // Determine scroll direction
      if (scrollTop > lastScrollY) {
        setScrollDirection('down');
      } else if (scrollTop < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(scrollTop);
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
      
      // Clear existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      
      // Set new timeout to hide after 2 seconds
      if (scrollTop > 100) {
        hideTimeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }

      // Trail generation removed
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  // Fade out trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => 
        prev
          .map(point => ({ ...point, opacity: point.opacity - 0.05 }))
          .filter(point => point.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const rocketY = 20 + (window.innerHeight - 140) * scrollProgress;

  return (
    <div className="fixed top-0 h-screen w-20 pointer-events-none" style={{
      opacity: 0.6,
      right: '24px',
      zIndex: -1
    }}>
      {/* Trail removed */}
      
      {/* Rocket - hidden on mobile */}
      {!isMobile && (
         <div 
           className="absolute transition-all duration-200 ease-out"
           style={getRocketStyle()}
         >
           {/* Fire particles - always positioned at bottom of rocket */}
             <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2">
             {/* Enhanced fire particles */}
             <div className="fire-particle-1 w-5 h-5 bg-red-600 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-2xl" style={{boxShadow: '0 0 20px #dc2626, 0 0 40px #dc2626'}}></div>
             <div className="fire-particle-2 w-4 h-4 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2 translate-x-1 shadow-2xl" style={{boxShadow: '0 0 16px #f97316, 0 0 32px #f97316'}}></div>
             <div className="fire-particle-3 w-3.5 h-3.5 bg-yellow-400 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-x-1 shadow-2xl" style={{boxShadow: '0 0 14px #facc15, 0 0 28px #facc15'}}></div>
             <div className="fire-particle-4 w-4 h-4 bg-red-500 rounded-full absolute left-1/2 transform -translate-x-1/2 translate-x-2 shadow-2xl" style={{boxShadow: '0 0 16px #ef4444, 0 0 32px #ef4444'}}></div>
             <div className="fire-particle-5 w-3.5 h-3.5 bg-orange-400 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-x-2 shadow-2xl" style={{boxShadow: '0 0 14px #fb923c, 0 0 28px #fb923c'}}></div>
             
             {/* Additional enhanced particles */}
             <div className="fire-particle-1 w-3 h-3 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2 translate-x-3 shadow-2xl" style={{animationDelay: '0.5s', boxShadow: '0 0 12px #eab308, 0 0 24px #eab308'}}></div>
             <div className="fire-particle-2 w-3 h-3 bg-red-400 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-x-3 shadow-2xl" style={{animationDelay: '0.7s', boxShadow: '0 0 12px #f87171, 0 0 24px #f87171'}}></div>
             <div className="fire-particle-3 w-3.5 h-3.5 bg-orange-600 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-2xl" style={{animationDelay: '0.3s', boxShadow: '0 0 14px #ea580c, 0 0 28px #ea580c'}}></div>
           </div>
           
           {/* Rocket body - using home page design */}
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-red-400 drop-shadow-lg">
             <path d="M12 2C12 2 8 6 8 12C8 14 9 16 12 16C15 16 16 14 16 12C16 6 12 2 12 2Z"/>
             <ellipse cx="12" cy="8" rx="2" ry="3" fill="#FFD700"/>
             <path d="M10 16L8 20L12 18L16 20L14 16" fill="#FF6B35"/>
             <path d="M9 20L7 22L12 20L17 22L15 20" fill="#FF4500" opacity="0.8"/>
           </svg>
         </div>
      )}
      

    </div>
  );
}