"use client";

import Link from "next/link";

export default function Team() {
  const teamMembers = {
    teachers: [
      {
        name: "Paraskevas Kitsos",
        role: "Professor",
        department: "Electrical & Computer Engineering",
        expertise:
          "Hardware Security, Cryptography, VLSI Design, Machine Learning Algorithms",
        email: "pkitsos@uop.gr",
        image: "/api/placeholder/300/300",
        externalUrl: "https://www.ece.uop.gr/staff/kitsos-paraskevas/",
        social: {},
      },
    ],
    heads: [
      {
        name: "Fotis Rentzis",
        role: "Team Director",
        department: "Electrical & Computer Engineering",
        expertise: "Embedded Systems, Robotics, Digital Technologies",
        email: "fotis@hephaestus.gr",
        image: "/boy.png",
        social: {},
      },
    ],
    informatics: [
      {
        name: "Lampros Karachristos",
        role: "Head of informatics",
        department: "Electrical & Computer Engineering",
        expertise: "Software Engineering, Full-stack Development",
        email: "lampros@hephaestus.gr",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Andreas Zikos",
        role: "Game Developer",
        year: "Electrical & Computer Engineering",
        expertise: "2D/3D Game Development, Django Web Applications",
        email: "andreas.zikos@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Charalampos Fotou",
        role: "Team Collaborator",
        year: "Electrical & Computer Engineering",
        expertise: "Customer Service, Interpersonal Communication",
        email: "charalampos.fotou@student.edu",
        image: "/boy.png",
        social: {},
      },

        {
            name: "Stratos Choropoulos",
            role: "Electrical & Computer Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {},
        },
    ],
    athena: [
      {
        name: "Maria Pitta",
        role: "Civil Engineering",
        year: "",
        expertise: "Autocad Design, 3D Model design",
        email: "maria.pitta@student.edu",
        image: "/girl.png",
        social: {},
      },
      {
        name: "Panagiota Vavouli",
        role: "Civil Engineering",
        year: "",
        expertise: "Autocad Design, 3D Modeling, Data Analysis",
        email: "panagiota.vavouli@student.edu",
        image: "/girl.png",
        social: {},
      },
      {
        name: "Theodora Papanteliou",
        role: "Civil Engineering",
        year: "",
        expertise: "Autocad Design, Architectural Sketching",
        email: "theodora.papanteliou@student.edu",
        image: "/girl.png",
        social: {},
      },
      {
        name: "Epameinondas Tagkalis",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise: "Python, C, JavaScript, IoT, Photovoltaic Systems",
        email: "epameinondas.tagkalis@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Christos Rampavilas",
        role: "Embedded Systems Engineer",
        year: "Electrical & Computer Engineering",
        expertise:
          "FPGA Programming, Integrated Circuit Design, Computer Architecture, Embedded Systems",
        email: "christos.rampavilas@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Georgios Gidiotris",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise:
          "Embedded Systems, Microcontrollers, C Programming, Arduino, Raspberry Pi, IoT, Hardware Development",
        email: "georgios.gidiotris@student.edu",
        image: "/boy.png",
        social: {
          linkedin: "",
          github: "",
          instagram: "",
          twitter: "",
        },
      },
      {
        name: "Kostas Pigadas",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise:
          "Embedded Systems, Microcontrollers, Arduino, C/C++ Programming, IoT, Circuit Design, Digital Electronics",
        email: "kostas.pigadas@student.edu",
        image: "/boy.png",
        social: {
          linkedin: "",
          github: "",
          instagram: "",
          twitter: "",
        },
      },
      {
        name: "Stavros Ioannidis",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise:
          "Embedded Systems, Microcontrollers, C Programming, Arduino, Raspberry Pi, IoT, Sensors & Automation",
        email: "stavros.ioannidis@student.edu",
        image: "/boy.png",
        social: {
          linkedin: "",
          github: "",
          instagram: "",
          twitter: "",
        },
      },


        {
            name: "Giorgos Dimos",
            role: "Electrical & Computer Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {},
        },
        {
            name: "Eirini Psarra",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/girl.png",
            social: {},
        },
        {
            name: "Konstantinos Tasios",
            role: "",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {},
        }


    ],

    hermes: [
      {
        name: "Evripidis Mavrommatis",
        role: "Electrical and Computer Engineering Student",
        year: "",
        expertise: "Arduino, DIY Electronics, Hardware",
        email: "evripidis.mavrommatis@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "George Mountzouroulias",
        role: "Mechanical Engineering",
        year: "",
        expertise: "3Dcad design, Autodesk Fusion, OpenRocket",
        email: "george.mountzouroulias@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Panagiotis Adam",
        role: "Mechanical Engineering",
        year: "",
        expertise: "AutoCAD, SolidWorks, SimScale, Structural Design",
        email: "panagiotis.adam@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Konstantinos Chasouras",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise: "Circuit Design, Arduino, ESP, Sensors",
        email: "konstantinos.chasouras@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Ilias Varelis",
        role: "Mechanical Engineering",
        year: "",
        expertise:
          "Aerodynamic Analysis, Static Simulations, MATLAB, SolidWorks, Fusion 360, AutoCAD",
        email: "ilias.varelis@student.edu",
        image: "/boy.png",
        social: {
          linkedin: "",
          github: "",
          instagram: "",
          twitter: "",
        },
      },
      {
        name: "Georgios Kousanas",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise:
          "Electronics Repair, Soldering, Circuit Diagnostics, Schematics Reading, Hardware Maintenance",
        email: "georgios.kousanas@student.edu",
        image: "/boy.png",
        social: {
          linkedin: "",
          github: "",
          instagram: "https://instagram.com/g.kousanas",
          twitter: "",
        },
      },
      {
        name: "Giannis Delis",
        role: "Mechanical Engineering",
        year: "",
        expertise:
          "Mechanical Design, 3D Modeling, CAD Tools, Project Collaboration, Teamwork, Problem Solving",
        email: "giannis.delis@student.edu",
        image: "/boy.png",
        social: {
          linkedin: "",
          github: "",
          instagram: "",
          twitter: "",
        },
      },
      {
        name: "Stratos Andriotis",
        role: "Mechanical Engineering",
        year: "Undergraduate (since 2021)",
        expertise:
          "Mathematics, Physics, Fortran Programming, Mechanical Analysis, Problem Solving, Team Collaboration",
        email: "stratos.andriotis@student.edu",
        image: "/boy.png",
        social: {
          linkedin: "",
          github: "",
          instagram: "",
          twitter: "",
        },
      },


        {
            name: "Antonia Kranitsa",
            role: "Mechanical/Aerospace Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/girl.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Stella Papastamou",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/girl.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Sotiris Bisias",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Konstantinos Michelakos",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Panagiotis Metaxas",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Giorgos Tsogas",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Afroditi Gkonia",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/girl.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Angelos Morakis",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Nikolas-Ilias Vouros",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        },
        {
            name: "Giorgos Zafiropoulos",
            role: "Engineering Student",
            year: "",
            expertise: "",
            email: "",
            image: "/boy.png",
            social: {
                linkedin: "",
                github: "",
                instagram: "",
                twitter: "",
            },
        }
    ],
    heron: [
       {
        name: "Athanassios Daoulas",
        role: "Head of PLC / Industrial Automation",
        department: "Electrical & Computer Engineering",
        expertise:
          "Electrical Installations, Automation Systems, PLC Programming",
        email: "athanassios@hephaestus.gr",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Nikolaos Vlachavas",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise: "PLC Programming, Automation Systems",
        email: "nikolaos.vlachavas@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Ioannis Asproulis",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise: "Electrical Installations, PLC Programming",
        email: "ioannis.asproulis@student.edu",
        image: "/boy.png",
        social: {},
      },
      {
        name: "Iasonas Mantas",
        role: "Electrical & Computer Engineering Student",
        year: "",
        expertise: "PLC Programming, Industrial Automation",
        email: "iasonas.mantas@student.edu",
        image: "/boy.png",
        social: {},
      },
        {
            name: "Vasilis Papakonstantinou",
            role: "Electrical & Computer Engineering Student",
            year: "",
            expertise: "PLC Programming, Industrial Automation",
            email: "",
            image: "/boy.png",
            social: {},
        }
    ],

      marketing: [
          {
              name: "Marilia Venetsanou",
              role: "Marketing & Communications",
              year: "",
              expertise: "",
              email: "",
              image: "/girl.png",
              social: {},
          },
          {
              name: "Evangelos Mykoniatis",
              role: "Marketing & Communications",
              year: "",
              expertise: "",
              email: "",
              image: "/boy.png",
              social: {},
          },
          {
              name: "Giannis Tokmakidis",
              role: "Marketing & Communications",
              year: "",
              expertise: "",
              email: "",
              image: "/boy.png",
              social: {},
          },
          {
              name: "Konstantina K.",
              role: "Marketing & Communications",
              year: "",
              expertise: "",
              email: "",
              image: "/girl.png",
              social: {},
          },
      ]
  };

  const categories = [
    {
      title: "Team Leadership",
      key: "heads",
      description:
        "Our experienced leaders who guide the team's vision and strategic direction.",
      members: teamMembers.heads,
    },
    {
      title: "Informatics Team",
      key: "informatics",
      description:
        "Our technical specialists focused on software development, game design, and digital solutions.",
      members: teamMembers.informatics,
    },
    {
      title: "Smart Campus",
      key: "athena",
      description:
        "Team members working on smart campus and architectural design solutions.",
      members: teamMembers.athena,
    },
    {
      title: "Rocketry",
      key: "hermes",
      description:
        "Team members developing rocketry and aerospace engineering solutions.",
      members: teamMembers.hermes,
    },
    {
      title: "PLC / Industrial Automation",
      key: "heron",
      description:
        "Team members creating building automation and energy management systems.",
      members: teamMembers.heron,
    },

      {
          title: "Marketing",
          key: "marketing",
          description:
              "Marketing team of hephaestus",
          members: teamMembers.marketing,
      },

    {
      title: "Faculty Advisors",
      key: "teachers",
      description:
        "University professors who provide academic guidance and support to our team.",
      members: teamMembers.teachers,
    },
  ];

  return (
    <div className="relative isolate py-24 sm:py-32 transition-colors duration-300">
      {/* Purple gradient blur - top left */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-15 sm:left-[calc(50%-35rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
      </div>

      {/* Purple gradient blur - upper middle left */}
      <div className="absolute inset-x-0 top-[calc(30%-5rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(30%-15rem)]">
        <div className="relative left-[calc(50%-30rem)] aspect-[1155/678] w-[30.125rem] -translate-x-1/2 rotate-[75deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-11 sm:left-[calc(50%-40rem)] sm:w-[60.1875rem] transition-opacity duration-300"></div>
      </div>

      {/* Purple gradient blur - middle right */}
      <div className="absolute inset-x-0 top-[calc(50%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-20rem)]">
        <div className="relative left-[calc(50%+15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[-45deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%+25rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
      </div>

      {/* Purple gradient blur - lower middle left */}
      <div className="absolute inset-x-0 top-[calc(70%-8rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-18rem)]">
        <div className="relative left-[calc(50%-25rem)] aspect-[1155/678] w-[32.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-13 sm:left-[calc(50%-35rem)] sm:w-[64.1875rem] transition-opacity duration-300"></div>
      </div>

      {/* Purple gradient blur - bottom right */}
      <div className="absolute inset-x-0 top-[calc(85%-5rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(85%-15rem)]">
        <div className="relative left-[calc(50%+20rem)] aspect-[1155/678] w-[28.125rem] -translate-x-1/2 rotate-[-60deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-9 sm:left-[calc(50%+30rem)] sm:w-[56.1875rem] transition-opacity duration-300"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl transition-colors duration-300">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 transition-colors duration-300">
            Our diverse team brings together expertise from robotics,
            automation, and informatics. We combine academic excellence with
            practical innovation to push the boundaries of technology.
          </p>
        </div>

        {/* Team Categories */}
        <div className="mt-16 space-y-20">
          {categories.map((category) => (
            <div key={category.key}>
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                  {category.description}
                </p>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.members.map((member, index) => (
                  <div key={index} className="group h-full">
                    <Link
                      href={
                        "externalUrl" in member && member.externalUrl
                          ? member.externalUrl
                          : `/cv/${member.name
                              .toLowerCase()
                              .replace(/\s+/g, "_")}`
                      }
                      target={"externalUrl" in member ? "_blank" : "_self"}
                      rel={"externalUrl" in member ? "noopener noreferrer" : ""}
                      className="block h-full"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 border border-gray-800/20 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 h-full flex flex-col cursor-pointer">
                        {/* Member Image */}
                        <div className="aspect-[3/2] sm:aspect-square bg-gray-700 flex items-center justify-center transition-colors duration-300">
                          <div className="text-gray-500 text-xs sm:text-sm transition-colors duration-300">
                            Photo
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
                          <h4 className="text-sm sm:text-lg lg:text-xl font-semibold text-white mb-1 transition-colors duration-300">
                            {member.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-purple-400 font-medium mb-1 sm:mb-2 transition-colors duration-300">
                            {member.role}
                          </p>

                          {/* Department/Year */}
                          <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2 transition-colors duration-300">
                            {"department" in member
                              ? member.department
                              : member.year}
                          </p>

                          {/* Expertise */}
                          <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4 transition-colors duration-300">
                            <span className="font-medium">Expertise:</span>{" "}
                            {member.expertise}
                          </p>

                          {/* Contact & Social */}
                          <div className="mt-auto">
                            {/* Email and Social Media Icons in Same Row */}
                            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                              {/* Contact Icons */}
                              <svg
                                className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
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
        <div className="mt-20 bg-gray-800 rounded-2xl p-8 text-center transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300">
            Want to Join Our Team?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
            We're always looking for passionate individuals who want to
            contribute to cutting-edge research and development in robotics,
            automation, and informatics. Whether you're a student looking to
            gain experience or a professional wanting to share your expertise,
            we'd love to hear from you.
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
              className="rounded-md border border-gray-600 bg-gray-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 transition-colors duration-200"
            >
              View Our Projects
            </a>
          </div>

          {/* Team Stats */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-purple-400 transition-colors duration-300">
                1
              </div>
              <div className="text-sm text-gray-300 transition-colors duration-300">
                Faculty & Professionals
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 transition-colors duration-300">
                20+
              </div>
              <div className="text-sm text-gray-300 transition-colors duration-300">
                Student Members
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 transition-colors duration-300">
                5+
              </div>
              <div className="text-sm text-gray-300 transition-colors duration-300">
                Active Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
