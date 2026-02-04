import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "AI Researcher",
      category: "AI + Multi-Agent Systems",
      github: "https://github.com/ShivamMishra1603/ai-researcher",
      description: [
        "Developed an AI system using LangGraph and GPT-4 to orchestrate four specialized agents, integrated ChromaDB vector database for semantic search and multi-source RAG retrieval; reduced information retrieval time and generated 6-8 page research reports with automatic citations",
        "Deployed FastAPI backend with WebSocket streaming and Next.js 14 (TypeScript, Tailwind) frontend to AWS ECS Fargate via Terraform IaC (multi-AZ auto-scaling, ALB, RDS, Secrets Manager); built CI/CD pipeline with GitHub Actions, Docker 3-stage builds and pytest/integration tests"
      ],
      technologies: ["LangGraph", "GPT-4", "ChromaDB", "FastAPI", "Next.js", "TypeScript", "Tailwind CSS", "AWS ECS", "Terraform", "Docker", "GitHub Actions", "WebSocket"]
    },
    {
      title: "Financial Risk & Compliance Intelligence",
      category: "Fine-Tuning, PyTorch, Hugging Face, Kubernetes",
      github: "https://github.com/ShivamMishra1603/financial-risk-compliance-intelligence",
      description: [
        "Built a financial risk analysis system with an ETL pipeline to ingest SEC 10-K filings, using BeautifulSoup to transform HTML into SFT datasets; fine-tuned a Llama-3-8B LLM via PEFT/QLoRA, boosting ROUGE-L from 0.37 to 0.45 (+21%) and reducing hallucinations in generated outputs.",
        "Deployed a containerized inference microservice using FastAPI, Docker, and Kubernetes with Prometheus/Grafana monitoring; validated system reliability via Locust load testing and optimized resource quotas to sustain <200ms p95 latency under peak load."
      ],
      technologies: ["docker", "kubernetes", "grafana", "prometheus", "pytorch", "fine-tuning", "mlops", "fastapi", "huggingface", "qlora", "llama3"]
    },
    {
      title: "Distributed Transaction Processing System",
      category: "Distributed Systems",
      github: "https://github.com/ShivamMishra1603/distributed-transaction-processing-system",
      description: [
        "Architected a transaction processing system using Multi-Paxos and Two-Phase Commit (2PC) protocols, processing 9000+ accounts across 3 sharded clusters with write-ahead logging for atomic rollback and resharding to reduce cross-shard transaction overhead",
        "Built a fault-tolerant banking application with 9-node replication, implementing locking, leader election, and failure recovery to ensure ACID properties across concurrent transactions, achieving 150 txn/sec throughput and 100% transaction success rate"
      ],
      technologies: ["Go", "Multi-Paxos", "Two-Phase Commit", "Distributed Systems", "Fault Tolerance", "ACID", "Sharding", "Consensus"]
    },
    {
      title: "VideoXplore",
      category: "AI + Web Research",
      github: "https://github.com/ShivamMishra1603/video-xplore",
      description: [
        "AI-powered video analysis with Google Gemini and integrated web research via DuckDuckGo",
        "Production-ready Streamlit app with Docker, CI/CD, logging, and prompt customization",
        "Live deployment with exportable analysis reports and configurable search depth"
      ],
      technologies: ["Python", "Streamlit", "Google Gemini", "DuckDuckGo Search", "Docker", "CI/CD"]
    },
    {
      title: "RAG Bot",
      category: "Retrieval-Augmented Generation",
      github: "https://github.com/ShivamMishra1603/rag-bot/blob/main/README.md",
      description: [
        "Upload PDFs and chat with your documents using a Gemini-powered RAG pipeline",
        "Local FAISS vector store with persistent storage and conversational memory",
        "Clean Streamlit UI with real-time processing indicators"
      ],
      technologies: ["Python", "Streamlit", "FAISS", "LangChain", "HuggingFace Embeddings"]
    },
    {
      title: "GenUI",
      category: "Generative UI",
      github: "https://github.com/ShivamMishra1603/gen-ui",
      description: [
        "Wireframe-to-code generator that turns sketches into clean HTML/CSS using Gemini",
        "React frontend + Flask backend with health checks, analytics, and structured logging",
        "Dockerized deployment with Nginx and Render-ready configuration"
      ],
      technologies: ["React", "Flask", "Google Gemini", "Docker", "Nginx"]
    },
    {
      title: "Mobility-Based Resilience Analysis",
      category: "Data Science",
      github: "https://github.com/ShivamMishra1603/mobility-based-resilience-analysis/blob/main/README.md",
      description: [
        "Resilience triangle methodology over large-scale human mobility data (Port Arthur, TX)",
        "Interactive Streamlit dashboard and reproducible analysis modules",
        "Calculates resilience ratio, vulnerability, robustness, and recovery time"
      ],
      technologies: ["Python", "Pandas", "Streamlit", "Plotly", "pyreadr"]
    },
    {
      title: "NYC Neighborhood Analysis",
      category: "Geospatial Analysis",
      github: "https://github.com/ShivamMishra1603/NYC-Neighborhood-Analysis/blob/main/README.md",
      description: [
        "Comprehensive geospatial study of services and accessibility across NYC neighborhoods",
        "Spatial and statistical analysis with interactive mapping and composite indices",
        "Integrates multiple datasets: hospitals, schools, parks, transit, and bike routes"
      ],
      technologies: ["GeoPandas", "Shapely", "Folium", "Pandas", "NumPy"]
    },
    {
      title: "Reliability of Student Feedback for Ranking University Teaching Quality",
      category: "Data Science",
      github: "https://www.linkedin.com/in/shivammishra97/details/projects/1747942450165/single-media-viewer/?profileId=ACoAAElF3wQB87Xtv5NeaKllD6rAzEdn1egKrDY",
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