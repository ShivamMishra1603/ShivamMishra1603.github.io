import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log(formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-textSecondary mb-6">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-secondary text-xl" />
                <a href="mailto:shivam.mishra@stonybrook.edu" className="text-textSecondary hover:text-secondary">
                  shivam.mishra@stonybrook.edu
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub className="text-secondary text-xl" />
                <a
                  href="https://github.com/ShivamMishra1603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary"
                >
                  github.com/ShivamMishra1603
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-secondary text-xl" />
                <a
                  href="https://www.linkedin.com/in/shivammishra97/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary"
                >
                  linkedin.com/in/shivammishra97
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textSecondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textSecondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textSecondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 