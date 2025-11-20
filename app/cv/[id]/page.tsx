'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ResumeSection {
  section_title: string;
  icon: string;
  description: string;
}

interface Member {
  id: string;
  name: string;
  head: string;
  photoUrl: string;
  departmentImageUrl: string;
  small_description: string;
  technical_skills: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    researchgate?: string;
    instagram?: string;
    youtube?: string;
  };
  resume: ResumeSection[];
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'IconSchool':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case 'IconTools':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'IconBriefcase':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'IconUser':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
  }
};

export default function CVPage() {
  const params = useParams();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch('/data/members.json');
        if (!response.ok) {
          throw new Error('Failed to fetch member data');
        }
        const members: Member[] = await response.json();
        const foundMember = members.find(m => m.id === params.id);
        
        if (!foundMember) {
          throw new Error('Member not found');
        }
        
        setMember(foundMember);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchMember();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl transition-colors duration-300">Loading...</div>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl transition-colors duration-300">{error || 'Member not found'}</div>
      </div>
    );
  }

  return (
    <div className="relative isolate py-24 sm:py-32 transition-colors duration-300">
      
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

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Header Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 mb-8 hover:bg-white/15 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center border-2 border-gray-200 dark:border-gray-600">
                  <div className="text-gray-400 dark:text-gray-500 text-xs text-center">Profile<br/>Photo</div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center border border-gray-300 dark:border-gray-500">
                  <div className="text-gray-400 dark:text-gray-500 text-xs">Dept</div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2 transition-colors duration-300">{member.name}</h1>
                <h2 className="text-lg text-purple-300 mb-3 transition-colors duration-300">{member.head}</h2>
                <p className="text-white/80 leading-relaxed mb-4 transition-colors duration-300">{member.small_description}</p>
                
                {/* Technical Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.technical_skills.map((skill, index) => {
                    const colors = [
                      'bg-purple-500/20 ring-purple-300/30 hover:bg-purple-500/30',
                      'bg-blue-500/20 ring-blue-300/30 hover:bg-blue-500/30',
                      'bg-emerald-500/20 ring-emerald-300/30 hover:bg-emerald-500/30',
                      'bg-amber-500/20 ring-amber-300/30 hover:bg-amber-500/30',
                      'bg-rose-500/20 ring-rose-300/30 hover:bg-rose-500/30',
                      'bg-cyan-500/20 ring-cyan-300/30 hover:bg-cyan-500/30',
                      'bg-indigo-500/20 ring-indigo-300/30 hover:bg-indigo-500/30',
                      'bg-teal-500/20 ring-teal-300/30 hover:bg-teal-500/30',
                      'bg-orange-500/20 ring-orange-300/30 hover:bg-orange-500/30',
                      'bg-pink-500/20 ring-pink-300/30 hover:bg-pink-500/30'
                    ];
                    const colorClass = colors[index % colors.length];
                    
                    return (
                      <span 
                        key={index}
                        className={`inline-flex items-center rounded-md ${colorClass} px-2 py-1 text-xs font-medium text-white ring-1 ring-inset backdrop-blur-sm transition-all duration-200`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          {member.social && (
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 hover:scale-105 hover:shadow-lg transition-all duration-300 mb-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-colors duration-300 border border-white/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-3 transition-colors duration-300">Connect with me</h3>
                  <div className="flex flex-wrap gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-white rounded-lg transition-all duration-200 border border-blue-400/30">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-gray-600/20 hover:bg-gray-600/30 text-white rounded-lg transition-all duration-200 border border-gray-400/30">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-blue-400/20 hover:bg-blue-400/30 text-white rounded-lg transition-all duration-200 border border-blue-300/30">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        Twitter
                      </a>
                    )}
                    {member.social.researchgate && (
                      <a href={member.social.researchgate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 text-white rounded-lg transition-all duration-200 border border-green-400/30">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68l-2.424 7.279c-.26.78-.544 1.365-.853 1.754-.308.39-.639.585-.991.585-.43 0-.783-.196-1.06-.585-.276-.39-.415-.975-.415-1.754V5.482c0-.818-.196-1.508-.585-2.073C9.595.844 9.037.437 8.294.194 7.55-.05 6.663 0 5.634 0H0v24h5.634c1.029 0 1.916-.05 2.66-.194.743-.243 1.301-.65 1.678-1.215.389-.565.585-1.255.585-2.073v-4.042c0-.779.139-1.364.415-1.754.277-.389.63-.585 1.06-.585.352 0 .683.195.991.585.309.389.593.974.853 1.754l2.424 7.279c.243.744.65 1.303 1.213 1.68.565.375 1.255.565 2.073.565H24V0h-4.414z"/>
                        </svg>
                        ResearchGate
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-pink-600/20 hover:bg-pink-600/30 text-white rounded-lg transition-all duration-200 border border-pink-400/30">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                      </a>
                    )}
                    {member.social.youtube && (
                      <a href={member.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-white rounded-lg transition-all duration-200 border border-red-400/30">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resume Sections */}
          <div className="space-y-4">
            {member.resume.map((section, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-colors duration-300 border border-white/20">
                    {getIconComponent(section.icon)}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">{section.section_title}</h3>
                    <p className="text-white/80 leading-relaxed transition-colors duration-300">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Back Button */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          </div>
        </div>
      </div>
  );
}