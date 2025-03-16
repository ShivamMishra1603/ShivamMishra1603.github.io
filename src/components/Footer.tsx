import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-textSecondary mb-4 md:mb-0">
            © {new Date().getFullYear()} Shivam Mishra. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/ShivamMishra1603"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivammishra97/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 