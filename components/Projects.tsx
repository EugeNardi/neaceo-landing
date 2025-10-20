'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Newspaper, Beef, Brain } from 'lucide-react'

const projects = [
  {
    icon: Newspaper,
    title: 'Noticias X',
    description: 'Plataforma de noticias moderna y actualizada con las últimas tendencias y acontecimientos.',
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Noticias', 'Web', 'Media'],
    link: 'https://noticias-x.netlify.app',
  },
  {
    icon: Beef,
    title: 'Vacuno',
    description: 'Sistema integral para la gestión y seguimiento del sector ganadero vacuno.',
    gradient: 'from-green-500 to-emerald-500',
    tags: ['Ganadería', 'Gestión', 'Agro'],
    link: 'https://vacuno.netlify.app',
  },
  {
    icon: Brain,
    title: 'IA Solucions',
    description: 'Soluciones innovadoras impulsadas por inteligencia artificial para empresas modernas.',
    gradient: 'from-purple-500 to-pink-500',
    tags: ['IA', 'Soluciones', 'Tech'],
    link: 'https://iasolucions.netlify.app',
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-24 bg-white">
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
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovaciones que están transformando industrias y creando nuevas oportunidades
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group cursor-pointer">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
