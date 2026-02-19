import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiNginx,
  SiHuggingface,
  SiGithubactions,
  SiGo,
  SiFastapi,
  SiApachekafka,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiElasticsearch,
  SiSpringboot,
  SiNextdotjs,
} from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Go", icon: <SiGo /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ]
    },
    {
      title: "Cloud & Backend",
      skills: [
        { name: "AWS", icon: <SiAmazon /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Apache Kafka", icon: <SiApachekafka /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
      ]
    },
    {
      title: "Infrastructure & DevOps",
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Nginx", icon: <SiNginx /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "ELK Stack", icon: <SiElasticsearch /> },
      ]
    },
    {
      title: "AI/ML & Frameworks",
      skills: [
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "LangGraph", icon: <FaCode /> },
        { name: "LangChain", icon: <FaCode /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Hugging Face", icon: <SiHuggingface /> },
        { name: "ChromaDB", icon: <FaCode /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "GitHub", icon: <SiGithub /> },
      ]
    },
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