import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-tertiary p-6 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-semibold text-secondary">Stony Brook University</h4>
            <p className="text-textSecondary">Master of Science in Computer Science</p>
            <p className="text-textSecondary">August 2024 - May 2026</p>
            <p className="text-textSecondary">GPA: 3.83/4</p>
            {/* <p className="text-textSecondary mt-2">Relevant Coursework:</p>
            <ul className="list-disc list-inside text-textSecondary mt-1">
              <li>Analysis of Algorithms</li>
              <li>Data Science Fundamentals</li>
              <li>Probability and Statistics for Data Science</li>
              <li>Natural Language Processing</li>
              <li>Human-Computer Interaction</li>
            </ul> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-tertiary p-6 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-semibold text-secondary">KJ Somaiya College of Engineering</h4>
            <p className="text-textSecondary">BTech in Computer Engineering</p>
            <p className="text-textSecondary">August 2017 - May 2021</p>
            <p className="text-textSecondary">GPA: 9.06/10</p>
            {/* <p className="text-textSecondary mt-2">Relevant Coursework:</p>
            <ul className="list-disc list-inside text-textSecondary mt-1">
              <li>Data Structures</li>
              <li>Operating Systems</li>
              <li>Database Management</li>
              <li>Software Engineering</li>
            </ul> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education 