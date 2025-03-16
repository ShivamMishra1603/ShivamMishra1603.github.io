import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: "Stony Brook University",
      position: "Teaching Assistant",
      duration: "January 2025 – Present",
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
        "Developed an Appian application that automated the transformation of incoming Outlook emails into actionable tasks, reducing task creation and allocation time by 85%",
        "Integrated Graph API and Appian, leading to a 45% reduction in response time for customer inquiries",
        "Executed a Round Robin system for equitable task distribution and built a scalable database for real-time tracking of tasks",
        "Designed a dashboard for real-time reporting, managing 400+ monthly email-generated tasks per team",
        "Revamped the Service Outsourcing Request Approval Process with an intuitive Appian application, reducing case turnaround time by 40%",
        "Automated Risk Assessment Reports using Blue Prism processes, reducing manual effort equivalent to 14 FTEs",
        "Actively learned and embodied the RISES values—Respect, Integrity, Service, Excellence, and Sustainability"
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