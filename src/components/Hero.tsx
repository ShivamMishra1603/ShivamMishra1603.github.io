import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary">Shivam Mishra</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-textSecondary mb-6">
              Master's Student in Computer Science
            </h2>
            <p className="text-lg text-textSecondary mb-8 text-justify">
              I am a graduate student specializing in Machine Learning, Data Science, and AI-driven solutions 🤖📊. With a strong foundation in software engineering and hands-on experience in automation, computer vision, and full-stack development, I thrive in building intelligent systems that address real-world challenges 🌍✨.
            </p>
            <p className="text-lg text-textSecondary mb-8 text-justify">
              🎯 My goal is to contribute to cutting-edge projects while continuously growing as an AI/ML & Data Science professional. I am eager to apply my expertise in AI-driven technologies to solve complex problems, drive innovation, and make data-driven decisions that create a meaningful impact. 💡🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="/resume.pdf"
                className="btn-primary whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <div className="flex gap-4 items-center">
                <a
                  href="https://github.com/ShivamMishra1603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-secondary transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivammishra97/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-secondary transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-end items-center"
          >
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
              <img
                src="/profile.jpg"
                alt="Shivam Mishra"
                className="rounded-full object-cover w-full h-full border-4 border-secondary shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-4 border-secondary opacity-20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 