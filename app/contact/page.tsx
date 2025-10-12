'use client';

export default function Contact() {

  return (
    <div className="relative isolate py-24 sm:py-32 transition-colors duration-300">
      {/* Purple gradient blur - center top */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[15deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-35 dark:opacity-25 sm:left-[calc(50%)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
      </div>
      
      {/* Purple gradient blur - bottom right */}
      <div className="absolute inset-x-0 top-[calc(100%-15rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]">
        <div className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[-60deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 dark:opacity-20 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem] transition-opacity duration-300"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Have questions about our projects, want to collaborate, or interested in joining our team? 
            We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {/* Contact Information */}
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              {/* Interactive Map */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group">
                <a 
                  href="https://www.google.com/maps/place/%CE%A0%CF%84%CE%AD%CF%81%CF%85%CE%B3%CE%B1+%CE%96,+%CE%A3%CF%87%CE%BF%CE%BB%CE%AE+%CE%9C%CE%B7%CF%87%CE%B1%CE%BD%CE%B9%CE%BA%CF%8E%CE%BD,+%CE%A0%CE%B1%CE%BD%CE%B5%CF%80%CE%B9%CF%83%CF%84%CE%AE%CE%BC%CE%B9%CE%BF+%CE%A0%CE%B5%CE%BB%CE%BF%CF%80%CE%BF%CE%BD%CE%BD%CE%AE%https://www.google.com/maps/place/%CE%A0%CF%84%CE%AD%CF%81%CF%85%CE%B3%CE%B1+%CE%96,+%CE%A3%CF%87%CE%BF%CE%BB%CE%AE+%CE%9C%CE%B7%CF%87%CE%B1%CE%BD%CE%B9%CE%BA%CF%8E%CE%BD,+%CE%A0%CE%B1%CE%BD%CE%B5%CF%80%CE%B9%CF%83%CF%84%CE%AE%CE%BC%CE%B9%CE%BF+%CE%A0%CE%B5%CE%BB%CE%BF%CF%80%CE%BF%CE%BD%CE%BD%CE%AE%CF%83%CE%BF%CF%85/@38.2189945,21.745513,19z/data=!4m9!1m2!2m1!1sUniversity+of+Peloponnese+Engineering+Department+Patra+Greece!3m5!1s0x135e37b031a33bb1:0x71769a1fe17a1e15!8m2!3d38.2188996!4d21.7461841!16s%2Fg%2F11kqczlgh1?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D%83%CE%BF%CF%85/@38.2188997,21.745167,19z/data=!4m9!1m2!2m1!1sUniversity+of+Peloponnese+Engineering+Department+Patra+Greece!3m5!1s0x135e37b031a33bb1:0x71769a1fe17a1e15!8m2!3d38.2188996!4d21.7461841!16s%2Fg%2F11kqczlgh1?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src="/map.png" 
                      alt="Location Map" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Click to view in Google Maps</span>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Contact Details - Grouped */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Address */}
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Address</h4>
                    <p className="text-white/80">
                      University of Peloponnese<br />
                      Engineering Department<br />
                      Patra, Greece
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Email</h4>
                    <p className="text-white/80">
                      <a href="mailto:hephaestus@uth.gr" className="hover:text-purple-400 transition-colors duration-200">
                        hephaestus@go.uop.gr
                      </a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Office Hours</h4>
                    <p className="text-white/80">
                      Mon-Fri: 9AM-5PM<br />
                      Sat: 10AM-2PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            </div>
            
            {/* Social Links */}
            <div className="mt-8 text-center">
              <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/hyphestusrobotics" className="text-white/70 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/hephaestusteam" className="text-white/70 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/hephaestus_uop/" className="text-white/70 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-medium text-white mb-3">
                  How can I join the team?
                </h4>
                <p className="text-white/80">
                  We welcome students and professionals from all backgrounds. Contact us with your interests and experience, and we'll help you find the right fit within our team.
                </p>
              </div>
              
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-medium text-white mb-3">
                  Do you offer internships?
                </h4>
                <p className="text-white/80">
                  Yes! We offer various internship opportunities throughout the year. Reach out to learn about current openings and application requirements.
                </p>
              </div>
              
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-medium text-white mb-3">
                  Can industry partners collaborate with you?
                </h4>
                <p className="text-white/80">
                  Absolutely! We're always interested in industry partnerships and collaborative research projects. Contact us to discuss potential opportunities.
                </p>
              </div>
              
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-medium text-white mb-3">
                  What equipment and facilities do you have?
                </h4>
                <p className="text-white/80">
                  Our lab is equipped with state-of-the-art robotics hardware, 3D printers, electronics workstations, and high-performance computing resources.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}