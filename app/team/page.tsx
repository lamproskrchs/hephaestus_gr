import Link from 'next/link';

export default function Team() {
  const teamMembers = {
    heads: [
      {
        name: "Fotis Rentzis",
        role: "Team Director",
        department: "Electrical & Computer Engineering",
        expertise: "Embedded Systems, Robotics, Digital Technologies",
        email: "fotis@hephaestus.gr",
        image: "/boy.png",
        social: {
          linkedin: "https://linkedin.com/in/fotis-rentzis",
          twitter: "https://twitter.com/fotis_r",
          github: "https://github.com/fotis-r",
          researchgate: "https://researchgate.net/profile/Fotis-Rentzis",
          instagram: "https://instagram.com/fotis_r",
          youtube: "https://youtube.com/@fotis-r"
        }
      },
      {
        name: "Lampros Karachristos",
        role: "Head of informatics",
        department: "Electrical & Computer Engineering",
        expertise: "Software Engineering, Full-stack Development",
        email: "lampros@hephaestus.gr",
        image: "/boy.png",
        social: {
          linkedin: "https://linkedin.com/in/lampros-karachristos",
          twitter: "https://twitter.com/lampros_k",
          github: "https://github.com/lampros-k",
          researchgate: "https://researchgate.net/profile/Lampros-Karachristos",
          instagram: "https://instagram.com/lampros_k",
          youtube: "https://youtube.com/@lampros-k"
        }
      },
      {
        name: "Prof. Michael Rodriguez",
        role: "Research Coordinator",
        department: "Computer Science",
        expertise: "AI, Computer Vision, Data Science",
        email: "m.rodriguez@university.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/michael-rodriguez",
          researchgate: "https://researchgate.net/profile/Michael-Rodriguez"
        }
      }
    ],
    professionals: [
      {
        name: "Dr. Sarah Johnson",
        role: "Industry Liaison",
        department: "Automation Systems",
        expertise: "Industrial Automation, IoT",
        email: "s.johnson@university.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/sarah-johnson",
          twitter: "https://twitter.com/sarahj_iot"
        }
      },
      {
        name: "Dr. David Kim",
        role: "Technical Advisor",
        department: "Mechanical Engineering",
        expertise: "Robotics Hardware, Control Systems",
        email: "d.kim@university.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/david-kim-robotics",
          github: "https://github.com/davidkim",
          researchgate: "https://researchgate.net/profile/David-Kim"
        }
      },
      {
        name: "Dr. Emily Watson",
        role: "Research Mentor",
        department: "Informatics",
        expertise: "Data Analytics, Machine Learning",
        email: "e.watson@university.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/emily-watson",
          twitter: "https://twitter.com/emilyw_data"
        }
      }
    ],
    students: [
      {
        name: "Alex Thompson",
        role: "Lead Developer",
        year: "PhD Student",
        expertise: "ROS, Python, Computer Vision",
        email: "alex.thompson@student.edu",
        image: "/api/placeholder/300/300",
        social: {
          github: "https://github.com/alexthompson",
          linkedin: "https://linkedin.com/in/alex-thompson"
        }
      },
      {
        name: "Maria Garcia",
        role: "Robotics Engineer",
        year: "Master's Student",
        expertise: "Mechanical Design, CAD, Prototyping",
        email: "maria.garcia@student.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/maria-garcia",
          instagram: "https://instagram.com/maria_robotics"
        }
      },
      {
        name: "James Wilson",
        role: "Software Developer",
        year: "Undergraduate",
        expertise: "Web Development, Database Design",
        email: "james.wilson@student.edu",
        image: "/api/placeholder/300/300",
        social: {
          github: "https://github.com/jameswilson",
          twitter: "https://twitter.com/jamesw_dev",
          linkedin: "https://linkedin.com/in/james-wilson"
        }
      },
      {
        name: "Lisa Chang",
        role: "Data Scientist",
        year: "PhD Student",
        expertise: "Machine Learning, Statistical Analysis",
        email: "lisa.chang@student.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/lisa-chang",
          github: "https://github.com/lisachang"
        }
      },
      {
        name: "Robert Brown",
        role: "Hardware Engineer",
        year: "Master's Student",
        expertise: "Electronics, Embedded Systems",
        email: "robert.brown@student.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/robert-brown",
          youtube: "https://youtube.com/@robertb_electronics"
        }
      },
      {
        name: "Sophie Miller",
        role: "Research Assistant",
        year: "Undergraduate",
        expertise: "Research, Documentation, Testing",
        email: "sophie.miller@student.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/sophie-miller",
          twitter: "https://twitter.com/sophie_research"
        }
      }
    ]
  };

  const categories = [
    {
      title: "Team Leadership",
      key: "heads",
      description: "Our experienced leaders who guide the team's vision and strategic direction.",
      members: teamMembers.heads
    },
    {
      title: "Professional Advisors",
      key: "professionals",
      description: "Industry experts and academic professionals who provide guidance and mentorship.",
      members: teamMembers.professionals
    },
    {
      title: "Student Members",
      key: "students",
      description: "Talented students from various disciplines contributing to our innovative projects.",
      members: teamMembers.students
    }
  ];

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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Our diverse team brings together expertise from robotics, automation, and informatics. 
            We combine academic excellence with practical innovation to push the boundaries of technology.
          </p>
        </div>

        {/* Team Categories */}
        <div className="mt-16 space-y-20">
          {categories.map((category) => (
            <div key={category.key}>
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                  {category.description}
                </p>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.members.map((member, index) => (
                  <div key={index} className="group h-full">
                    <Link href={`/cv/${member.name.toLowerCase().replace(/\s+/g, '_')}`} className="block h-full">
                      <div className="relative overflow-hidden rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 border border-white/20 dark:border-gray-800/20 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 h-full flex flex-col cursor-pointer">
                      {/* Member Image */}
                      <div className="aspect-[3/2] sm:aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                        <div className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm transition-colors duration-300">Photo</div>
                         </div>
                      
                      {/* Member Info */}
                      <div className="p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
                        <h4 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium mb-1 sm:mb-2 transition-colors duration-300">
                          {member.role}
                        </p>
                        
                        {/* Department/Year */}
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1 sm:mb-2 transition-colors duration-300">
                          {'department' in member ? member.department : member.year}
                        </p>
                        
                        {/* Expertise */}
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 sm:mb-4 transition-colors duration-300">
                          <span className="font-medium">Expertise:</span> {member.expertise}
                        </p>
                        
                        {/* Contact & Social */}
                         <div className="mt-auto">
                           {/* Email and Social Media Icons in Same Row */}
                           <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                             {/* Contact Icons */}
                             <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                             </svg>
                             
                             {/* Social Media Icons */}
                             <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                             </svg>
                             <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                             </svg>
                             <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                             </svg>
                           </div>
                         </div>
                       </div>
                     </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Want to Join Our Team?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
            We're always looking for passionate individuals who want to contribute to 
            cutting-edge research and development in robotics, automation, and informatics. 
            Whether you're a student looking to gain experience or a professional wanting 
            to share your expertise, we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-200"
            >
              Apply Now
            </a>
            <a
              href="/projects"
              className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              View Our Projects
            </a>
          </div>
          
          {/* Team Stats */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">{teamMembers.heads.length + teamMembers.professionals.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Faculty & Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">{teamMembers.students.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Student Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Active Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}