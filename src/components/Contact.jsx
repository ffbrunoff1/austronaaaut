import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Star, Clock, Users } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: 'Enviando mensagem...', isError: false })

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 9999-9999",
      description: "Atendimento de segunda à sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@austronaaaut.com",
      description: "Resposta em até 24 horas"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      description: "Atendemos todo o Brasil"
    }
  ]

  const features = [
    {
      icon: Star,
      title: "Consulta Gratuita",
      description: "Orientação personalizada para escolher o telescópio ideal"
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Assistência técnica disponível a qualquer hora"
    },
    {
      icon: Users,
      title: "Especialistas",
      description: "Equipe com mais de 15 anos de experiência em astronomia"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
            <Star className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Entre em Contato</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Pronto para 
            <span className="gradient-text"> Explorar o Cosmos?</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para ajudar você a escolher 
            o telescópio perfeito e começar sua jornada astronômica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-900">
                Fale Conosco
              </h3>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                Estamos aqui para tornar sua experiência com a astronomia inesquecível. 
                Entre em contato e descubra como podemos ajudar você a explorar o universo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-secondary-900">
                      {item.title}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      {item.info}
                    </p>
                    <p className="text-sm text-secondary-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-center space-x-3 p-4 bg-primary-50 rounded-xl">
                  <feature.icon className="h-5 w-5 text-primary-600" />
                  <div>
                    <span className="font-semibold text-secondary-900">{feature.title}:</span>
                    <span className="text-secondary-600 ml-2">{feature.description}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-secondary-900 mb-2">
                    Solicite uma Consulta
                  </h4>
                  <p className="text-secondary-600">
                    Preencha o formulário e nossa equipe entrará em contato
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Conte-nos sobre seu interesse em astronomia e qual tipo de telescópio você está procurando..."
                    />
                  </div>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center ${
                      status.isError 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </motion.button>

                <p className="text-sm text-secondary-500 text-center">
                  * Campos obrigatórios. Seus dados estão seguros conosco.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-space-pattern opacity-20" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Embarque Nesta Jornada Cósmica
            </h3>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Junte-se a milhares de astrônomos que já descobriram as maravilhas 
              do universo com nossos telescópios de alta qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-accent-300">
                <Star className="h-5 w-5" />
                <span>Consulta gratuita inclusa</span>
              </div>
              <div className="flex items-center space-x-2 text-accent-300">
                <Clock className="h-5 w-5" />
                <span>Suporte técnico vitalício</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}