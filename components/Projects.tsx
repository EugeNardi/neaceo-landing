'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Rocket, Brain, Smartphone, Globe, Zap, Database } from 'lucide-react'

const projects = [
  {
    icon: Rocket,
    title: 'LaunchPad AI',
    description: 'Plataforma de aceleración de startups impulsada por inteligencia artificial que ayuda a emprendedores a validar y escalar sus ideas.',
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['AI', 'SaaS', 'Analytics'],
  },
  {
    icon: Brain,
    title: 'MindFlow',
    description: 'Herramienta de productividad que combina gestión de tareas con técnicas de neurociencia para maximizar el rendimiento.',
    gradient: 'from-purple-500 to-pink-500',
    tags: ['Productivity', 'Mobile', 'Web'],
  },
  {
    icon: Smartphone,
    title: 'ConnectHub',
    description: 'Red social empresarial de próxima generación diseñada para facilitar colaboraciones significativas entre profesionales.',
    gradient: 'from-green-500 to-emerald-500',
    tags: ['Social', 'Networking', 'B2B'],
  },
  {
    icon: Globe,
    title: 'GlobalTrade',
    description: 'Marketplace internacional que conecta pequeñas empresas con mercados globales mediante tecnología blockchain.',
    gradient: 'from-orange-500 to-red-500',
    tags: ['Blockchain', 'E-commerce', 'Fintech'],
  },
  {
    icon: Zap,
    title: 'QuickDeploy',
    description: 'Plataforma de deployment y hosting que permite a desarrolladores lanzar aplicaciones en segundos con infraestructura optimizada.',
    gradient: 'from-yellow-500 to-orange-500',
    tags: ['DevOps', 'Cloud', 'Infrastructure'],
  },
  {
    icon: Database,
    title: 'DataVault',
    description: 'Solución de almacenamiento y análisis de datos empresariales con encriptación de nivel militar y compliance automático.',
    gradient: 'from-indigo-500 to-purple-500',
    tags: ['Security', 'Data', 'Enterprise'],
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
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
