import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Telescópios', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const contactInfo = [
    { icon: Phone, text: '(11) 9999-9999' },
    { icon: Mail, text: 'contato@austronaaaut.com' },
    { icon: MapPin, text: 'São Paulo, SP - Brasil' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-space-pattern opacity-20" />
      
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative">
                <Telescope className="h-8 w-8 text-primary-400" />
                <Star className="h-4 w-4 absolute -top-1 -right-1 text-accent-400 animate-pulse" />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">Astrona</span>
                <span className="gradient-text">aaut</span>
              </div>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Transformando a paixão pela astronomia em experiências inesquecíveis 
              através de telescópios de alta qualidade e tecnologia avançada.
            </p>
            
            <div className="flex items-center space-x-2 text-accent-300">
              <Star className="h-4 w-4" />
              <span className="text-sm">Explorando o cosmos desde 2009</span>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Links Rápidos
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-accent-300 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-accent-400 rounded-full" />
                    <span>{link.name}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Contato
            </h3>
            
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary-400" />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Newsletter
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Receba dicas de astronomia, novidades sobre telescópios e ofertas especiais.
            </p>
            
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-secondary-800 border border-secondary-700 rounded-l-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-r-lg hover:from-primary-600 hover:to-accent-600 transition-all"
                >
                  <Mail className="h-4 w-4" />
                </motion.button>
              </div>
              
              <p className="text-xs text-gray-400">
                Respeitamos sua privacidade. Cancele a qualquer momento.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-secondary-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Austronaaaut. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>para exploradores do cosmos</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Criado com</span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 transition-colors italic"
              >
                Papum
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-20 h-20 border border-primary-400/20 rounded-full flex items-center justify-center"
        >
          <Star className="h-8 w-8 text-primary-400/50" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-16 h-16 border border-accent-400/20 rounded-full flex items-center justify-center"
        >
          <Telescope className="h-6 w-6 text-accent-400/50" />
        </motion.div>
      </div>
    </footer>
  )
}