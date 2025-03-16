import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiAdobexd,
  SiCplusplus,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPostgresql,
  SiJquery,
  SiJson,
  SiAppian,
  SiAmazon
} from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> }
      ]
    },
    {
      title: "Web Technology",
      skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "jQuery", icon: <SiJquery /> },
        { name: "JSON", icon: <SiJson /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "Express.js", icon: <SiExpress /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> }
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Github", icon: <SiGithub /> },
        { name: "AWS", icon: <SiAmazon /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Adobe XD", icon: <SiAdobexd /> },
        { name: "Appian", icon: <SiAppian /> }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-tertiary text-textPrimary rounded-full text-sm hover:bg-secondary hover:text-primary transition-colors group"
                  >
                    <span className="text-xl group-hover:text-primary">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 