'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Phone } from 'lucide-react'
import { Button } from './ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const form = e.currentTarget
      const formDataToSend = new FormData(form)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        throw new Error('Error al enviar')
      }
    } catch (error) {
      setSubmitStatus('error')
      // Fallback a mailto si falla Netlify Forms
      const mailtoLink = `mailto:neaceotechnologies@gmail.com?subject=Contacto desde NeaCeo Technologies - ${formData.name}&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AEmpresa: ${formData.company}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`
      window.location.href = mailtoLink
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Hablemos de tu Proyecto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ¿Tienes una idea innovadora? Estamos aquí para ayudarte a hacerla realidad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                <form 
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <input name="bot-field" />
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Tu empresa (opcional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white py-6 text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href="mailto:neaceotechnologies@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        neaceotechnologies@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Teléfonos</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Eugenio</p>
                          <a 
                            href="tel:+5493467412501"
                            className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                          >
                            +54 9 3467 41 2501
                          </a>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Franco</p>
                          <a 
                            href="tel:+5493515637053"
                            className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                          >
                            +54 9 351 56 37053
                          </a>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Ignacio</p>
                          <a 
                            href="tel:+5493472587090"
                            className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                          >
                            +54 9 3472 58 70 90
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Listo para comenzar?
                </h3>
                <p className="mb-6 opacity-90">
                  Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
                </p>
                <a href="mailto:neaceotechnologies@gmail.com">
                  <Button
                    variant="outline"
                    className="bg-white text-blue-600 hover:bg-gray-100 border-0 w-full"
                  >
                    Enviar Email
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
