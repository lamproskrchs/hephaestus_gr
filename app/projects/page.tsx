'use client';

import { useState } from 'react';

export default function Projects() {
  const [expandedTags, setExpandedTags] = useState<string | null>(null);
  const projects = {
    athena: [
      {
        title: "raspberrypi_people_detection",
        description: "Real-time people detection on Raspberry Pi using OpenCV and MQTT. 🚀 ",
        technologies: ["Rust", "RaspberryPi", "IoT", "library"],
        status: "Completed",
        github: "https://github.com/hyphestusrobotics/raspberrypi_people_detection"
      },
      {
        title: "UniVerse3D",
        description: "A Demo 3D visualization of the main amphitheater of out campus",
        technologies: ["Demo", "C#", "Unity", "Game"],
        status: "Completed",
        github: "https://github.com/hyphestusrobotics/UniVerse3D"
      },
      {
        title: "engineering_campus_uop_model",
        description: "Demo of our main campus building represented in AutoCAD",
        technologies: ["AutoCAD", "3D", "civil"],
        status: "In Progress",
        github: "https://github.com/hyphestusrobotics/engineering_campus_uop_model"
      },
      {
        title: "campus_architectural_model",
        description: "Real life architectural representation of our main campus building",
        technologies: ["3D"],
        status: "In Progress",
        github: "https://github.com/hyphestusrobotics/campus_architectural_model"
      },
      {
        title: "smart_campus_iot",
        description: "IoT hardware research for smart rooms and smart campus",
        technologies: ["IoT", "Arduino", "RaspberryPi"],
        status: "In Progress",
        github: "https://github.com/hyphestusrobotics/smart_campus_iot"
      },
      {
        title: "smart_campus_service",
        description: "Back-end for our smart campus IoT for room automatation",
        technologies: ["Quarkus", "Kotlin", "Reactive"],
        status: "In Progress",
        github: "https://github.com/hyphestusrobotics/smart_campus_service"
      },

    ],
    zephyr: [
      {
        title: "weather_station_sensors",
        description: "Sensor code for the sensor of our weather station",
        technologies: ["C", "Raspberry Pi", "Arduino", "Python"],
        status: "In Progress",
        github: "https://github.com/hyphestusrobotics/weather_station_sensors"
      },
      {
        title: "weatherstation_service",
        description: "Back-end code for our weather station",
        technologies: ["SpringBoot", "Kotlin", "imperative"],
        status: "Completed",
        github: "https://github.com/hyphestusrobotics/weatherstation_service"
      },
      {
        title: "station_hardware_assembly",
        description: "Hardware reasearch and assembly quide for our weather station",
        technologies: ["Arduino", "Sensors", "Hardware"],
        status: "Completed",
        github: "https://github.com/hyphestusrobotics/station_hardware_assembly"
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
    ],
    heron: [
      {
        title: "water_control_hardware_assembly",
        description: "Mathematical and electrical research for our industrial water control system",
        technologies: ["PLC", "Automation", "Electrical"],
        status: "In Progress",
        github: "https://github.com/hyphestusrobotics/water_control_hardware_assembly"
      },
      {
        title: "water_control_plc_code",
        description: "PLC code for our industrial water automation system",
        technologies: ["PLC", "Software"],
        status: "In Progress",
        github: "https://github.com/hyphestusrobotics/water_control_plc_code"
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
      name: "Zephyr",
      key: "zephyr",
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
              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
                {projects[subTeam.key as keyof typeof projects].map((project, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl border border-white/20 dark:border-gray-800/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 flex flex-col h-full">
                    <div className="aspect-[3/2] sm:aspect-[4/3] bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                      <div className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm transition-colors duration-300">Project Preview</div>
                    </div>
                    
                    <div className="p-2 sm:p-4 flex flex-col flex-grow">
                      <div className="mb-2 sm:mb-3">
                        <h4 className="text-xs sm:text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 leading-tight mb-1">{project.title}</h4>
                        <span className={`inline-flex items-center rounded-full px-2 sm:px-3 py-1 text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed transition-colors duration-300 flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {(expandedTags === project.title ? project.technologies : project.technologies.slice(0, 2)).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10 dark:ring-gray-600/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && expandedTags !== project.title && (
                          <span 
                            onClick={() => setExpandedTags(project.title)}
                            onMouseEnter={() => setExpandedTags(project.title)}
                            className="inline-flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700 h-6 w-6 text-xs font-medium text-gray-500 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10 dark:ring-gray-600/20 transition-colors duration-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                            title="Click to show all tags"
                          >
                            +{project.technologies.length - 2}
                          </span>
                        )}
                        {expandedTags === project.title && (
                          <span 
                            onClick={() => setExpandedTags(null)}
                            className="inline-flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700 h-6 w-6 text-xs font-medium text-gray-500 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10 dark:ring-gray-600/20 transition-colors duration-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                            title="Click to collapse tags"
                          >
                            -
                          </span>
                        )}
                      </div>
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-2 w-full justify-center rounded-lg bg-gray-900 dark:bg-white px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 mt-auto"
                      >
                        <svg className="h-2 w-2 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="hidden sm:inline">View on GitHub</span>
                        <span className="sm:hidden text-xs">GitHub</span>
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