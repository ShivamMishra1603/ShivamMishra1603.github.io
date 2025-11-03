import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: "Stony Brook University",
      position: "Teaching Assistant",
      duration: "January 2025 – May 2025",
      location: "Stony Brook, NY",
      responsibilities: [
        "Facilitated Prof. Kevin McDonnell in the delivery of CSE 101: Computer Science Principles, Spring 2025",
        "Supporting students with course material, assignments, and lab exercises",
        "Delivered feedback and guidance during office hours, helping students grasp foundational programming concepts"
      ]
    },
    {
      company: "Barclays Bank",
      position: "Automation Developer",
      duration: "August 2021 – August 2024",
      location: "Pune, India",
      responsibilities: [
        "Built an end-to-end Appian app integrated with Microsoft Graph API to auto-create and allocate tasks from Outlook, cutting task management time 85% and improving response times 45% (Appian, MS Graph API).",
        "Designed a scalable MariaDB schema and intelligent allocation workflow with real-time dashboards, tracking 400+ tasks/month and improving accountability (MariaDB, Appian).",
        "Led cross-functional revamp of Service Outsourcing approval using Agile/SDLC, reducing turnaround 40% and manual effort 75% via an intuitive Appian UI (Appian, Agile/SDLC).",
        "Delivered a secure, production-grade payment workflow system with OAuth 2.0 and 2FA, improving reliability and access control (OAuth 2.0, 2FA).",
        "Automated reporting across Consumer, Wholesale, and Markets using Blue Prism RPA, saving 14 FTEs via improved storage, scheduling, and workflow orchestration (Blue Prism, RPA).",
        "Provided Level 3 support for large enterprise codebases—code reviews, root-cause analysis, and safe production updates to maintain uptime and system reliability (SRE practices)."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-secondary"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full"></div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-tertiary p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-secondary mb-2">{exp.company}</h3>
                  <div className="flex flex-wrap gap-4 text-textSecondary mb-4">
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-secondary" />
                      <span>{exp.position}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-secondary" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-secondary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-textSecondary">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="pl-4">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 