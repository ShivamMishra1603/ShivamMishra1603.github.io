import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const education = [
  {
    institution: "Stony Brook University",
    degree: "Master of Science in Computer Science",
    duration: "August 2024 – May 2026",
    location: "Stony Brook, NY, USA",
    gpa: "3.78 / 4.0",
  },
  {
    institution: "KJ Somaiya College of Engineering",
    degree: "BTech in Computer Engineering",
    duration: "August 2017 – May 2021",
    location: "Mumbai, MH, India",
    gpa: "9.06 / 10",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 h-full w-0.5 bg-secondary"></div>

          {education.map((edu, index) => (
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

              {/* Card */}
              <div className="w-full bg-tertiary p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-secondary mb-2">{edu.institution}</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-textSecondary">
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-secondary shrink-0" />
                    <span>{edu.degree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-secondary shrink-0" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-medium">GPA:</span>
                    <span>{edu.gpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 