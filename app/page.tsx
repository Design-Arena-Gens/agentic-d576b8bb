'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const skills = {
  frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  tools: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Vercel']
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory and payment processing',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard with real-time data visualization and user engagement metrics',
    tags: ['React', 'Python', 'MongoDB', 'D3.js'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI Content Generator',
    description: 'Machine learning powered content generation tool with custom fine-tuning',
    tags: ['Vue.js', 'FastAPI', 'Redis', 'OpenAI'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Real-time Collaboration Tool',
    description: 'WebSocket-based collaborative workspace with document editing and chat',
    tags: ['Next.js', 'WebSockets', 'Redis', 'AWS'],
    gradient: 'from-green-500 to-emerald-500'
  }
]

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-950/70 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gradient"
          >
            &lt;Dev /&gt;
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-8"
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 glow">
              <span className="text-gradient">Fullstack</span>
              <br />
              Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Crafting exceptional digital experiences with modern technologies.
              Specializing in scalable web applications and elegant user interfaces.
            </p>
            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gradient">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate fullstack developer with a keen eye for design and a love for creating
                  seamless digital experiences. With expertise spanning both frontend and backend development,
                  I bring ideas to life through clean, efficient code.
                </p>
                <p>
                  My approach combines technical excellence with creative problem-solving, ensuring every
                  project not only functions flawlessly but also delivers an exceptional user experience.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="relative">
                <div className="card-gradient rounded-2xl p-8 border border-gray-800 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                        5+
                      </div>
                      <div>
                        <p className="text-gray-400">Years of</p>
                        <p className="text-xl font-semibold">Experience</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-2xl">
                        50+
                      </div>
                      <div>
                        <p className="text-gray-400">Projects</p>
                        <p className="text-xl font-semibold">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-2xl">
                        30+
                      </div>
                      <div>
                        <p className="text-gray-400">Happy</p>
                        <p className="text-xl font-semibold">Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gradient">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="card-gradient rounded-2xl p-8 border border-gray-800 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-6 capitalize text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-gray-900 rounded-full text-sm font-medium border border-gray-700 hover:border-primary transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gradient">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative card-gradient rounded-2xl p-8 border border-gray-800 backdrop-blur-sm overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-900 rounded-full text-xs font-medium border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <button className="text-primary hover:underline font-medium">View Details →</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">Let's Work Together</h2>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind? Let's create something amazing together.
            </p>
            <div className="card-gradient rounded-2xl p-12 border border-gray-800 backdrop-blur-sm">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                    ✉
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">hello@developer.com</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-2xl">
                    💼
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-400">@fullstackdev</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-2xl">
                    🐙
                  </div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-400">@fullstackdev</p>
                </div>
              </div>
              <motion.a
                href="mailto:hello@developer.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Send Message
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Fullstack Developer. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
