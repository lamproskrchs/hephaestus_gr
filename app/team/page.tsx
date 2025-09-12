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
    informatics: [
      {
        name: "Andreas Zikos",
        role: "Game Developer",
        year: "Undergraduate",
        expertise: "2D/3D Game Development, Django Web Applications",
        email: "andreas.zikos@student.edu",
        image: "/boy.png",
        social: {}
      },
      {
        name: "Charalampos Fotou",
        role: "Team Collaborator",
        year: "Undergraduate",
        expertise: "Customer Service, Interpersonal Communication",
        email: "charalampos.fotou@student.edu",
        image: "/boy.png",
        social: {}
      }
    ],
    athena: [
      {
        name: "Maria Pitta",
        role: "Civil Engineering Student",
        year: "Undergraduate",
        expertise: "Autocad Design, 3D Model design",
        email: "maria.pitta@student.edu",
        image: "/girl.png",
        social: {}
      },
      {
        name: "Panagiota Vavouli",
        role: "Civil Engineering Student",
        year: "Undergraduate",
        expertise: "Autocad Design, 3D Modeling, Data Analysis",
        email: "panagiota.vavouli@student.edu",
        image: "/girl.png",
        social: {}
      },
      {
        name: "Theodora Papanteliou",
        role: "Civil Engineering Student",
        year: "Undergraduate",
        expertise: "Autocad Design, Architectural Sketching",
        email: "theodora.papanteliou@student.edu",
        image: "/girl.png",
        social: {}
      },
      {
        name: "Katerina Tempelis",
        role: "Civil Engineering Student",
        year: "Undergraduate",
        expertise: "Autocad Design, Architectural Model Design",
        email: "katerina.tempelis@student.edu",
        image: "/girl.png",
        social: {}
      },
      {
        name: "Epameinondas Tagkalis",
        role: "Electrical & Computer Engineering Student",
        year: "Undergraduate",
        expertise: "Python, C, JavaScript, IoT, Photovoltaic Systems",
        email: "epameinondas.tagkalis@student.edu",
        image: "/boy.png",
        social: {}
      },
    ],
    hermes: [
      {
        name: "Evripidis Mavrommatis",
        role: "Electrical and Computer Engineering Student",
        year: "Undergraduate",
        expertise: "Arduino, DIY Electronics, Hardware",
        email: "evripidis.mavrommatis@student.edu",
        image: "/boy.png",
        social: {}
      },
      {
        name: "George Mountzouroulias",
        role: "Mechanical Engineering Student",
        year: "Undergraduate",
        expertise: "3Dcad design, Autodesk Fusion, OpenRocket",
        email: "george.mountzouroulias@student.edu",
        image: "/boy.png",
        social: {}
      },
      {
        name: "Christos Dimakopoulos",
        role: "ECE Student",
        year: "Undergraduate",
        expertise: "Arduino, LoRa, ESP32, IoT Systems",
        email: "christos.dimakopoulos@student.edu",
        image: "/photo.png",
        social: {}
      },
      {
        name: "Panagiotis Adam",
        role: "Mechanical Engineering Student",
        year: "Undergraduate",
        expertise: "AutoCAD, SolidWorks, SimScale, Structural Design",
        email: "panagiotis.adam@student.edu",
        image: "/boy.png",
        social: {}
      },
      {
        name: "Konstantinos Chasouras",
        role: "Electrical & Computer Engineering Student",
        year: "Undergraduate",
        expertise: "Circuit Design, Arduino, ESP, Sensors",
        email: "konstantinos.chasouras@student.edu",
        image: "/boy.png",
        social: {}
      },
      {
        name: "Sofia Christodoulaki",
        role: "Mechanical Engineering Student",
        year: "Undergraduate",
        expertise: "Mechanical Engineering",
        email: "sofia.christodoulaki@student.edu",
        image: "/girl.png",
        social: {}
      },
      {
        name: "Stefanos Sikalos",
        role: "Mechanical Engineering Student",
        year: "Undergraduate",
        expertise: "3D Design, Fusion 360, SolidWorks, 3D Printing",
        email: "stefanos.sikalos@student.edu",
        image: "/boy.png",
        social: {}
      },
    ],
    zephyr: [
      {
        name: "TEST 1",
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
        name: "TEST 2",
        role: "Hardware Engineer",
        year: "Master's Student",
        expertise: "Electronics, Embedded Systems",
        email: "robert.brown@student.edu",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "https://linkedin.com/in/robert-brown",
          youtube: "https://youtube.com/@robertb_electronics"
        }
      }
    ],
    heron: [
      {
        name: "TEST1",
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
      title: "Informatics Team",
      key: "informatics",
      description: "Our technical specialists focused on software development, game design, and digital solutions.",
      members: teamMembers.informatics
    },
    {
      title: "Project Athena",
      key: "athena",
      description: "Team members working on smart campus and architectural design solutions.",
      members: teamMembers.athena
    },
    {
      title: "Project Hermes",
      key: "hermes",
      description: "Team members developing rocketry and aerospace engineering solutions.",
      members: teamMembers.hermes
    },
    {
      title: "Project Zephyr",
      key: "zephyr",
      description: "Team members focused on smart city technologies and urban infrastructure.",
      members: teamMembers.zephyr
    },
    {
      title: "Project Heron",
      key: "heron",
      description: "Team members creating building automation and energy management systems.",
      members: teamMembers.heron
    },
    {
      title: "Professional Advisors",
      key: "professionals",
      description: "Industry experts and academic professionals who provide guidance and mentorship.",
      members: teamMembers.professionals
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
                             
                             {/* Social Media Icons - Only show if available */}
                             {member.social.linkedin && (
                               <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                               </svg>
                             )}
                             {member.social.github && (
                               <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                               </svg>
                             )}
                             {member.social.twitter && (
                               <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                               </svg>
                             )}
                             {member.social.instagram && (
                               <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                               </svg>
                             )}
                             {member.social.youtube && (
                               <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                               </svg>
                             )}
                             {member.social.researchgate && (
                               <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.323-.306-.174-.517-.4-.663-.645-.145-.244-.23-.424-.275-.645-.047-.22-.07-.419-.07-.648v-1.997a2.742 2.742 0 0 1 .071-.648 2.31 2.31 0 0 1 .276-.645c.146-.244.357-.47.662-.644.309-.175.664-.325 1.21-.325.497 0 .887.11 1.18.244.292.134.501.258.633.408.132.15.218.244.327.432.11.188.2.375.236.554.005.02.023.04.05.04h1.414c.047 0 .07-.023.065-.07-.024-.244-.096-.518-.188-.812-.092-.293-.25-.587-.463-.873-.211-.286-.496-.553-.847-.777C21.288.227 20.799.07 20.245.019a9.886 9.886 0 0 0-.66 0zm-8.183.142c-.093 0-.14.047-.14.141v4.663c.012.096.058.142.151.142h1.645c.094 0 .14-.046.14-.141V.283c0-.094-.046-.141-.14-.141h-1.656zm-7.98 0c-.093 0-.14.047-.14.141v4.663c.012.096.058.142.15.142h1.656c.094 0 .14-.046.14-.141V2.446c0-.056.029-.084.085-.084h.245c.12 0 .211.023.273.07.063.047.116.125.163.235l1.446 2.376c.047.078.101.141.164.19a.504.504 0 0 0 .245.07h1.847c.118 0 .166-.047.14-.142a.175.175 0 0 0-.056-.084L7.948 2.752a1.111 1.111 0 0 0-.287-.235 1.072 1.072 0 0 0 .287-.236l1.503-2.089a.175.175 0 0 0 .055-.084c.026-.094-.021-.142-.14-.142H7.504a.498.498 0 0 0-.246.071.622.622 0 0 0-.163.19L5.65 2.602c-.047.11-.1.188-.164.235a.681.681 0 0 1-.273.07h-.245c-.056 0-.085-.028-.085-.084V.283c0-.094-.046-.141-.14-.141H3.423zm12.328 9.603c-.083-.006-.151.039-.151.131v1.135c0 .094.05.141.15.141h1.361c.094 0 .141-.047.141-.14v-1.136c0-.092-.047-.138-.14-.138h-1.361v.007zm-9.288.149c-.093 0-.14.047-.14.141v6.805c.01.094.057.141.15.141h1.645c.094 0 .141-.047.141-.14v-6.806c0-.094-.047-.141-.14-.141H6.463zm-3.039 2.294c-.093 0-.14.047-.14.14v4.521c.012.094.058.141.15.141h1.656c.094 0 .14-.047.14-.14v-2.732c0-.056.029-.084.085-.084h.245c.12 0 .211.023.273.07.063.047.116.125.163.235l1.446 2.376c.047.078.101.141.164.19a.504.504 0 0 0 .245.07h1.847c.118 0 .166-.047.14-.142a.175.175 0 0 0-.056-.084l-1.825-2.325a1.111 1.111 0 0 0-.287-.235 1.072 1.072 0 0 0 .287-.236l1.503-2.089a.175.175 0 0 0 .055-.084c.026-.094-.021-.142-.14-.142H7.504a.498.498 0 0 0-.246.071.622.622 0 0 0-.163.19L5.65 14.747c-.047.11-.1.188-.164.235a.681.681 0 0 1-.273.07h-.245c-.056 0-.085-.028-.085-.084v-2.09c0-.094-.046-.141-.14-.141H3.424zm9.288 2.038c-.093 0-.14.047-.14.141v2.325c.01.094.057.141.15.141h1.645c.094 0 .141-.047.141-.14v-2.326c0-.094-.047-.141-.14-.141h-1.646zm4.104.131c-.697 0-1.271.188-1.695.47-.424.282-.714.659-.867 1.13-.152.47-.196.94-.196 1.41v.376c0 .47.044.94.196 1.41.153.47.443.848.867 1.13.424.282.998.47 1.695.47.696 0 1.27-.188 1.695-.47.423-.282.713-.66.866-1.13.153-.47.197-.94.197-1.41v-.376c0-.47-.044-.94-.197-1.41-.153-.47-.443-.848-.866-1.13-.424-.282-.999-.47-1.695-.47zm0 1.269c.282 0 .516.07.695.197.18.129.282.259.353.423.07.165.102.33.102.47v.752c0 .14-.032.306-.102.47-.07.165-.173.295-.353.423-.18.128-.413.197-.695.197-.283 0-.516-.07-.695-.197-.18-.128-.282-.258-.353-.423-.07-.164-.102-.33-.102-.47v-.752c0-.14.032-.305.102-.47.07-.164.173-.294.353-.423.179-.128.412-.197.695-.197z"/>
                               </svg>
                             )}
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
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">{teamMembers.athena.length + teamMembers.zephyr.length + teamMembers.hermes.length + teamMembers.heron.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Student Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Active Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}