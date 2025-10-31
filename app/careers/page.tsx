'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  PhotoIcon, 
  CubeIcon, 
  PaintBrushIcon,
} from '@heroicons/react/24/outline';
import {UsersIcon} from "@heroicons/react/16/solid";

const positions = [
    {
        id: 1,
        title: 'Join Our Team',
        icon: UsersIcon,
        description: 'Apply once to be considered for roles such as Developer, Mechanical Engineer, 3D Designer, and more. We’ll match you with the best fit based on your skills.',
        requirements: ['Developer', 'Mechanical Engineer', '3D Designer', 'UI/UX Designer', 'Project Manager'],
        formLink: 'https://forms.gle/u9pKNXPD3B9gSECX9'
    }

];



export default function CareersPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative isolate min-h-screen py-24 sm:py-32 transition-colors duration-300">
      {/* Purple gradient blur - top left */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-25 dark:opacity-15 sm:left-[calc(50%-35rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
      </div>
      
      {/* Purple gradient blur - upper middle left */}
      <div className="absolute inset-x-0 top-[calc(30%-5rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(30%-15rem)]">
        <div className="relative left-[calc(50%-30rem)] aspect-[1155/678] w-[30.125rem] -translate-x-1/2 rotate-[75deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-18 dark:opacity-11 sm:left-[calc(50%-40rem)] sm:w-[60.1875rem] transition-opacity duration-300"></div>
      </div>

      {/* Purple gradient blur - middle right */}
      <div className="absolute inset-x-0 top-[calc(50%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-20rem)]">
        <div className="relative left-[calc(50%+15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[-45deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 dark:opacity-10 sm:left-[calc(50%+25rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
      </div>

      {/* Purple gradient blur - lower middle left */}
      <div className="absolute inset-x-0 top-[calc(70%-8rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-18rem)]">
        <div className="relative left-[calc(50%-25rem)] aspect-[1155/678] w-[32.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-22 dark:opacity-13 sm:left-[calc(50%-35rem)] sm:w-[64.1875rem] transition-opacity duration-300"></div>
      </div>

      {/* Purple gradient blur - bottom right */}
      <div className="absolute inset-x-0 top-[calc(85%-5rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(85%-15rem)]">
        <div className="relative left-[calc(50%+20rem)] aspect-[1155/678] w-[28.125rem] -translate-x-1/2 rotate-[-60deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-16 dark:opacity-9 sm:left-[calc(50%+30rem)] sm:w-[56.1875rem] transition-opacity duration-300"></div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're looking for passionate individuals to help us build the future of digital experiences. 
            Find your perfect role and become part of our innovative team.
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {positions.map((position, index) => {
            const IconComponent = position.icon;
            return (
              <div
                key={position.id}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:transform hover:scale-105 hover:bg-white/10 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{position.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  {position.description}
                </p>

                {/* Requirements Tags */}
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {position.requirements.map((req, reqIndex) => (
                    <span
                      key={reqIndex}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-200"
                    >
                      {req}
                    </span>
                  ))}
                </div>

                {/* Apply Button */}
                <Link
                  href={position.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Apply Now
                  <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
}