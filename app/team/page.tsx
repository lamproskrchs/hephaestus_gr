export default function Team() {
  const teamMembers = {
    heads: [
      {
        name: "Dr. Alexandra Chen",
        role: "Team Director",
        department: "Robotics Engineering",
        expertise: "Autonomous Systems, Machine Learning",
        email: "a.chen@university.edu",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Prof. Michael Rodriguez",
        role: "Research Coordinator",
        department: "Computer Science",
        expertise: "AI, Computer Vision, Data Science",
        email: "m.rodriguez@university.edu",
        image: "/api/placeholder/300/300"
      }
    ],
    professionals: [
      {
        name: "Dr. Sarah Johnson",
        role: "Industry Liaison",
        department: "Automation Systems",
        expertise: "Industrial Automation, IoT",
        email: "s.johnson@university.edu",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Dr. David Kim",
        role: "Technical Advisor",
        department: "Mechanical Engineering",
        expertise: "Robotics Hardware, Control Systems",
        email: "d.kim@university.edu",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Dr. Emily Watson",
        role: "Research Mentor",
        department: "Informatics",
        expertise: "Data Analytics, Machine Learning",
        email: "e.watson@university.edu",
        image: "/api/placeholder/300/300"
      }
    ],
    students: [
      {
        name: "Alex Thompson",
        role: "Lead Developer",
        year: "PhD Student",
        expertise: "ROS, Python, Computer Vision",
        email: "alex.thompson@student.edu",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Maria Garcia",
        role: "Robotics Engineer",
        year: "Master's Student",
        expertise: "Mechanical Design, CAD, Prototyping",
        email: "maria.garcia@student.edu",
        image: "/api/placeholder/300/300"
      },
      {
        name: "James Wilson",
        role: "Software Developer",
        year: "Undergraduate",
        expertise: "Web Development, Database Design",
        email: "james.wilson@student.edu",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Lisa Chang",
        role: "Data Scientist",
        year: "PhD Student",
        expertise: "Machine Learning, Statistical Analysis",
        email: "lisa.chang@student.edu",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Robert Brown",
        role: "Hardware Engineer",
        year: "Master's Student",
        expertise: "Electronics, Embedded Systems",
        email: "robert.brown@student.edu",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Sophie Miller",
        role: "Research Assistant",
        year: "Undergraduate",
        expertise: "Research, Documentation, Testing",
        email: "sophie.miller@student.edu",
        image: "/api/placeholder/300/300"
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
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.members.map((member, index) => (
                  <div key={index} className="group">
                    <div className="relative overflow-hidden rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 border border-white/20 dark:border-gray-800/20 hover:shadow-xl hover:shadow-black/10 transition-all duration-300">
                      {/* Member Image */}
                      <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                        <div className="text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">Photo</div>
                      </div>
                      
                      {/* Member Info */}
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2 transition-colors duration-300">
                          {member.role}
                        </p>
                        
                        {/* Department/Year */}
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">
                          {'department' in member ? member.department : member.year}
                        </p>
                        
                        {/* Expertise */}
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                          <span className="font-medium">Expertise:</span> {member.expertise}
                        </p>
                        
                        {/* Contact */}
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                          <a href={`mailto:${member.email}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
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