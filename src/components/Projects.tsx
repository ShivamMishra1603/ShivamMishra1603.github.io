import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "Reliability of Student Feedback for Ranking University Teaching Quality",
      category: "Data Science",
      description: [
        "Formulated a university ranking metric based on teaching quality using sentiment analysis and professor ratings",
        "Scraped 10,000+ professor reviews from 38 universities using GraphQL",
        "Applied sentiment analysis with TextBlob, achieving 0.71 correlation between sentiment scores and ratings"
      ],
      technologies: ["Python", "GraphQL", "TextBlob", "Data Analysis"]
    },
    {
      title: "Llama Cure",
      category: "Large Language Models",
      github: "https://github.com/ShivamMishra1603/llama-cure",
      description: [
        "LlamaCure is a modern medical chatbot application that leverages the powerful Llama 3.2 90B Vision model through Groq's API to provide medical information and assistance.",
        "The application features a full-stack implementation with a React TypeScript frontend and FastAPI Python backend."
      ],
      technologies: ["Python", "React", "FastAPI", "Llama 3.2 90B Vision", "LLM", "Tailwind CSS"]
    },
    {
      title: "Gesture Controlled Presentation",
      category: "Computer Vision",
      github: "https://github.com/ShivamMishra1603/Gesture-Controlled-Presentation",
      description: [
        "Created a gesture-based presentation system using webcam input",
        "Implemented hand gesture recognition for slide navigation and annotation",
        "Achieved 98% accuracy under diverse lighting conditions"
      ],
      technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"]
    },
    {
      title: "Shakespeare Poetry Generator",
      category: "Natural Language Processing",
      description: [
        "Built an LSTM-based RNN architecture using PyTorch for generating Shakespearean-style text",
        "Processed 100,000+ word dataset with character-level tokenization",
        "Achieved 87% training accuracy and generated coherent poetry with perplexity of 25"
      ],
      technologies: ["PyTorch", "LSTM", "NLP", "Deep Learning"]
    },
    {
      title: "Swifty Scribe",
      category: "Natural Language Processing",
      github: "https://github.com/ShivamMishra1603/swifty-scribe",
      description: [
        "Developed an AI-driven lyrics generation application inspired by Taylor Swift's songwriting style, utilizing a recurrent neural network (RNN) with GRU cells, trained on a comprehensive dataset of her song lyrics.",
        "Designed and implemented a sophisticated NLP pipeline with tokenization, word embeddings, and temperature-controlled text generation, ensuring contextually rich and creative lyrics with an authentic Taylor Swift-inspired feel"
      ],
      technologies: [ "GRU-RNN", "NLP", "Deep Learning", "Flask", "Transformers (Hugging Face)", "React"]
    },
    {
      title: "POS Tagging",
      category: "Natural Language Processing",
      github: "https://github.com/ShivamMishra1603/POS-Tagging",
      description: [
        "Implemented Part-of-Speech (POS) tagging using logistic regression",
        "Built a pipeline for preprocessing text data and training the model",
        "Performed hyperparameter tuning to optimize model performance",
        "Achieved accurate labeling of words with grammatical tags"
      ],
      technologies: ["Python", "NLTK", "Scikit-learn", "NLP"]
    },
    {
      title: "Autonomous Car Prototype",
      category: "IoT & Computer Vision",
      description: [
        "Led team of 4 to build self-driving car prototype using Raspberry Pi and Arduino",
        "Implemented real-time lane detection and obstacle avoidance with 95% accuracy",
        "Added self-parking feature using LiDAR sensors with 90% success rate"
      ],
      technologies: ["Raspberry Pi", "Arduino", "OpenCV", "YOLO", "IoT"]
    },
    {
      title: "Tokenization Techniques",
      category: "Natural Language Processing",
      github: "https://github.com/ShivamMishra1603/Tokenization",
      description: [
        "Implemented RegEx-based Word Tokenizer and Byte Pair Encoding (BPE)",
        "Created modular and reusable tokenization components",
        "Designed for integration with various NLP tasks",
        "Optimized for performance and accuracy"
      ],
      technologies: ["Python", "RegEx", "BPE", "NLP"]
    },
    {
      title: "Human Performance Modeling",
      category: "Human-Computer Interaction",
      github: "https://github.com/ShivamMishra1603/Human-Performance-Modeling",
      description: [
        "Modeled human performance using Fitts' Law and Steering Law",
        "Implemented linear regression for movement time prediction",
        "Analyzed input data and computed index of difficulty (ID)",
        "Evaluated model performance with real user data"
      ],
      technologies: ["Python", "NumPy", "Pandas", "Statistics"]
    },
    {
      title: "Statistical Testing Using T-Test",
      category: "Data Analysis",
      github: "https://github.com/ShivamMishra1603/Statistical-Testing-Using-T-Test",
      description: [
        "Investigated menu type performance differences using t-tests",
        "Analyzed Tool Palette vs Flow Menu navigation tasks",
        "Implemented both between-subjects and within-subjects designs",
        "Provided statistical insights for UI/UX improvements"
      ],
      technologies: ["Python", "SciPy", "Statistics", "Data Analysis"]
    }
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 4
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  )

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <div className="relative">
          {/* Previous button */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-3 rounded-full bg-secondary text-primary hover:bg-opacity-80 transition-colors z-10"
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>

          {/* Next button */}
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-3 rounded-full bg-secondary text-primary hover:bg-opacity-80 transition-colors z-10"
            aria-label="Next page"
          >
            <FaChevronRight />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary p-6 rounded-lg shadow-lg flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-secondary">{project.title}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-secondary transition-colors"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
                <div className="mb-4">
                  <span className="text-textSecondary">{project.category}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-textSecondary mb-4 flex-grow">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="pl-4">{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === i ? 'bg-secondary w-4' : 'bg-textSecondary'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects 