import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: "Language Understanding and Reasoning Lab, Stony Brook University",
      position: "Graduate Research Assistant",
      duration: "August 2025 – Present",
      location: "Stony Brook, NY, USA",
      responsibilities: [
        "Benchmarked and optimized LLM agents across 50+ long-horizon web tasks, improving completion rate by ~12% via structured prompting and context optimization; built Docker-based evaluation pipelines on AWS EC2."
      ]
    },
    {
      company: "Stony Brook University",
      position: "Teaching Assistant",
      duration: "January 2025 – May 2025",
      location: "Stony Brook, NY, USA",
      responsibilities: [
        "Mentored students in CSE 101, supervising lab sessions and teaching data structures, algorithms, and time–space complexity; proctored exams and upheld academic integrity."
      ]
    },
    {
      company: "Barclays",
      position: "Software Engineer",
      duration: "August 2021 – August 2024",
      location: "Pune, MH, India",
      responsibilities: [
        "Refactored an approval platform into 12 async FastAPI microservices (PostgreSQL, Redis) orchestrated on Kubernetes via Docker with Jenkins CI/CD, reducing turnaround time by 40% and manual effort by 75%.",
        "Developed a secure IAM framework for payment services (8+ microservices, 400+ users) using OAuth 2.0, 2FA, AES-256, and Spring Security to enforce role-based access control and audit logging.",
        "Engineered an event-driven reporting pipeline (Python, Kafka) persisting normalized events to PostgreSQL and exposing RESTful APIs, processing ~30K daily events across 3 divisions, saving 14 FTEs.",
        "Architected an end-to-end task allocation service integrating Microsoft Graph APIs, Spring Boot, and an Appian frontend to ingest Outlook emails and extract task intent via lightweight NLP parsing, reducing manual handling by 85%.",
        "Designed a centralized logging and monitoring solution using ELK Stack (Elasticsearch, Logstash, Kibana), reducing Mean Time to Resolution (MTTR) by 80% through automated alerting and real-time dashboarding."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 h-full w-0.5 bg-secondary"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start mb-10 pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full shrink-0"></div>

              {/* Content */}
              <div className="w-full">
                <div className="bg-tertiary p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-secondary mb-2">{exp.company}</h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-textSecondary mb-4">
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-secondary shrink-0" />
                      <span>{exp.position}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-secondary shrink-0" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-secondary shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-textSecondary">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="pl-2">{resp}</li>
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