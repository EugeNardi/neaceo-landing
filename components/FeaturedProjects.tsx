'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Newspaper, Beef, Brain } from 'lucide-react'

const featuredProjects = [
  {
    icon: Beef,
    title: 'Vacuno',
    description: 'Sistema Ganadero',
    fullDescription: 'Plataforma integral para la gestión y control del sector ganadero vacuno.',
    gradient: 'from-green-500 to-emerald-500',
    link: 'https://vacuno.netlify.app',
  },
  {
    icon: Brain,
    title: 'IA Solutions',
    description: 'Inteligencia Artificial para Finanzas Empresariales',
    fullDescription: 'Soluciones de IA especializadas en optimización financiera y análisis empresarial.',
    gradient: 'from-purple-500 to-pink-500',
    link: 'https://iasolucions.netlify.app',
  },
  {
    icon: Newspaper,
    title: 'Noticias-X',
    description: 'Periódico Online',
    fullDescription: 'Portal de noticias digital con cobertura actualizada de eventos y tendencias.',
    gradient: 'from-blue-500 to-cyan-500',
    link: 'https://noticias-x.netlify.app',
  },
]

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce nuestras soluciones innovadoras en diferentes sectores
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                      {project.title}
                    </h3>
                    <p className={`text-lg font-semibold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.description}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {project.fullDescription}
                    </p>

                    {/* Link Indicator */}
                    <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                      <span>Visitar proyecto</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full`} />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
