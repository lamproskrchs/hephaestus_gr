export default function Projects() {
  const projects = {
    athena: [
      {
        title: "Smart Campus Infrastructure",
        description: "IoT-enabled campus monitoring system integrating civil engineering sensors with automated data collection.",
        technologies: ["IoT", "Python", "LoRaWAN", "PostgreSQL"],
        status: "In Progress",
        github: "https://github.com/hephaestus-gr/smart-campus"
      },
      {
        title: "Building Automation Framework",
        description: "Comprehensive building management system for energy optimization and environmental control.",
        technologies: ["Node.js", "MQTT", "React", "InfluxDB"],
        status: "In Progress",
        github: "https://github.com/hephaestus-gr/building-automation"
      },
      {
        title: "Structural Health Monitoring",
        description: "Real-time monitoring system for structural integrity using advanced sensor networks.",
        technologies: ["C++", "Arduino", "Machine Learning", "MongoDB"],
        status: "Completed",
        github: "https://github.com/hephaestus-gr/structural-monitoring"
      }
    ],
    zephir: [
      {
        title: "Autonomous Weather Station Network",
        description: "Distributed weather monitoring system with real-time data collection and analysis.",
        technologies: ["Python", "Raspberry Pi", "LoRa", "OpenWeatherAPI"],
        status: "In Progress",
        github: "https://github.com/hephaestus-gr/weather-station-network"
      },
      {
        title: "Climate Data Analytics Platform",
        description: "Advanced analytics platform for weather pattern prediction and climate monitoring.",
        technologies: ["Python", "TensorFlow", "FastAPI", "TimescaleDB"],
        status: "Completed",
        github: "https://github.com/hephaestus-gr/climate-analytics"
      }
    ],
    hermes: [
      {
        title: "Model Rocket Flight Computer",
        description: "Advanced flight computer system for model rockets with telemetry and recovery systems.",
        technologies: ["C++", "Arduino", "GPS", "Accelerometer"],
        status: "In Progress",
        github: "https://github.com/hephaestus-gr/rocket-flight-computer"
      },
      {
        title: "Rocket Propulsion Testing Rig",
        description: "Automated testing system for solid rocket motor performance analysis and data collection.",
        technologies: ["LabVIEW", "DAQ", "Python", "MATLAB"],
        status: "In Progress",
        github: "https://github.com/hephaestus-gr/propulsion-testing"
      },
      {
        title: "Ground Station Communication",
        description: "Radio communication system for real-time telemetry and command transmission to rockets.",
        technologies: ["RF Design", "Arduino", "LoRa", "Qt"],
        status: "Completed",
        github: "https://github.com/hephaestus-gr/ground-station"
      },
      {
        title: "Rocket Trajectory Simulation",
        description: "Comprehensive simulation software for rocket flight path prediction and optimization.",
        technologies: ["Python", "NumPy", "Matplotlib", "OpenRocket"],
        status: "In Progress",
        github: "https://github.com/hephaestus-gr/trajectory-simulation"
      }
    ],
    heron: [
      {
        title: "Industrial PLC Control System",
        description: "Advanced PLC programming framework for industrial automation and process control applications.",
        technologies: ["Ladder Logic", "SCADA", "HMI", "Modbus"],
        status: "In Progress",
        github: "https://github.com/hephaestus-gr/plc-control-system"
      }
    ]
  };

  const subTeams = [
    {
      name: "Athena",
      key: "athena",
      description: "Smart campus solutions combining civil engineering expertise with informatics automation for intelligent infrastructure.",
      logo: null // Placeholder for team logo
    },
    {
      name: "Zephir",
      key: "zephir",
      description: "Advanced weather monitoring systems and meteorological data analysis for environmental intelligence.",
      logo: null // Placeholder for team logo
    },
    {
      name: "Hermes",
      key: "hermes",
      description: "Rocket engineering and aerospace technology development for next-generation space exploration.",
      logo: null // Placeholder for team logo
    },
    {
      name: "Heron",
      key: "heron",
      description: "Industrial automation and PLC programming solutions for advanced manufacturing processes.",
      logo: null // Placeholder for team logo
    }
  ];

  return (
    <div className="relative isolate py-24 sm:py-32 transition-colors duration-300">
      {/* Purple gradient blur - top right */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[-30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%+20rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Our Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Explore the innovative projects developed by our specialized sub-teams: Athena (Smart Campus), 
            Zephir (Weather Systems), Hermes (Rocket Engineering), and Heron (Industrial Automation). 
            Each project represents our commitment to advancing technology and solving real-world challenges.
          </p>
        </div>

        {/* Sub-teams and Projects */}
        <div className="mt-16 space-y-20">
          {subTeams.map((subTeam) => (
            <div key={subTeam.key} className="">
              {/* Sub-team Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 border border-white/20 dark:border-gray-800/20 transition-all duration-300">
                  {subTeam.logo ? (
                    <img src={subTeam.logo} alt={`${subTeam.name} logo`} className="h-10 w-10 rounded-lg" />
                  ) : (
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {subTeam.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{subTeam.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{subTeam.description}</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects[subTeam.key as keyof typeof projects].map((project, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl border border-white/20 dark:border-gray-800/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 flex flex-col h-full">
                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                      <div className="text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">Project Preview</div>
                    </div>
                    
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 leading-tight">{project.title}</h4>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ml-2 flex-shrink-0 ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed transition-colors duration-300 flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10 dark:ring-gray-600/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10 dark:ring-gray-600/20 transition-colors duration-300">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center rounded-lg bg-gray-900 dark:bg-white px-3 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 mt-auto"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Purple gradient blur - middle left */}
        <div className="absolute inset-x-0 top-[calc(50%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-20rem)]">
          <div className="relative left-[calc(50%-35rem)] aspect-[1155/678] w-[28.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 dark:opacity-12 sm:left-[calc(50%-45rem)] sm:w-[56.1875rem] transition-opacity duration-300"></div>
        </div>

        {/* Purple gradient blur - middle right */}
        <div className="absolute inset-x-0 top-[calc(60%-5rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(60%-15rem)]">
          <div className="relative left-[calc(50%+15rem)] aspect-[1155/678] w-[32.125rem] -translate-x-1/2 rotate-[-45deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-18 dark:opacity-10 sm:left-[calc(50%+25rem)] sm:w-[64.1875rem] transition-opacity duration-300"></div>
        </div>

        {/* Purple gradient blur - bottom left */}
        <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]">
          <div className="relative left-[calc(50%-25rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[45deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-25 dark:opacity-15 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
        </div>

        {/* Purple gradient blur - bottom right */}
        <div className="absolute inset-x-0 top-[calc(90%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(90%-25rem)]">
          <div className="relative left-[calc(50%+20rem)] aspect-[1155/678] w-[30.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-22 dark:opacity-13 sm:left-[calc(50%+30rem)] sm:w-[60.1875rem] transition-opacity duration-300"></div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Interested in Our Work?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
            We're always looking for passionate individuals to join our team and contribute 
            to cutting-edge projects. Whether you're a student or professional, there's a 
            place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-200"
            >
              Join Our Team
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-white/20 dark:border-gray-800/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white shadow-lg shadow-black/5 hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}