'use client'

import { motion } from 'framer-motion'
import { Code, Lightbulb, TrendingUp, Users } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Desarrollo de Software',
    description: 'Creamos soluciones tecnológicas robustas y escalables utilizando las últimas tecnologías y mejores prácticas de la industria.',
    features: ['Aplicaciones Web', 'Apps Móviles', 'APIs & Backend', 'Cloud Solutions'],
  },
  {
    icon: Lightbulb,
    title: 'Consultoría de Innovación',
    description: 'Ayudamos a empresas a identificar oportunidades de innovación y desarrollar estrategias tecnológicas efectivas.',
    features: ['Análisis de Mercado', 'Estrategia Digital', 'Transformación Digital', 'R&D'],
  },
  {
    icon: TrendingUp,
    title: 'Aceleración de Startups',
    description: 'Acompañamos a startups desde la ideación hasta el lanzamiento, proporcionando recursos, mentoría y tecnología.',
    features: ['Validación de Ideas', 'MVP Development', 'Go-to-Market', 'Fundraising'],
  },
  {
    icon: Users,
    title: 'Equipos Dedicados',
    description: 'Formamos equipos de desarrollo especializados que se integran con tu organización para impulsar tus proyectos.',
    features: ['Staff Augmentation', 'Team Building', 'Agile Teams', 'Tech Leadership'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para llevar tu negocio al siguiente nivel
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 h-full">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
