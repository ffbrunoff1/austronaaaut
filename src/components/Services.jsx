import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Eye, Zap, Award, Star, ArrowRight, Check, Sparkles } from 'lucide-react'

export default function Services() {
  const telescopes = [
    {
      name: "Astro Starter",
      category: "Iniciante",
      price: "R$ 899",
      image: "🔭",
      features: [
        "Abertura: 70mm",
        "Ampliação: 50x - 150x",
        "Montagem Altazimutal",
        "Oculares incluídas",
        "Manual em português",
        "Suporte técnico 24/7"
      ],
      highlight: false,
      description: "Perfeito para quem está começando na astronomia"
    },
    {
      name: "Cosmic Pro",
      category: "Profissional",
      price: "R$ 2.499",
      image: "🌟",
      features: [
        "Abertura: 150mm",
        "Ampliação: 100x - 400x",
        "Montagem Equatorial",
        "Rastreamento automático",
        "Controle por smartphone",
        "Kit de filtros premium",
        "Suporte vitalício"
      ],
      highlight: true,
      description: "Para observadores experientes que buscam qualidade superior"
    },
    {
      name: "Galaxy Master",
      category: "Ultra Premium",
      price: "R$ 4.999",
      image: "✨",
      features: [
        "Abertura: 200mm",
        "Ampliação: 150x - 600x",
        "Montagem GoTo",
        "GPS integrado",
        "Câmera digital inclusa",
        "Software astronomia",
        "Maleta de transporte",
        "Garantia estendida"
      ],
      highlight: false,
      description: "O máximo em tecnologia astronômica para profissionais"
    }
  ]

  const benefits = [
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Todos os telescópios passam por rigorosos testes de qualidade"
    },
    {
      icon: Zap,
      title: "Configuração Simples",
      description: "Montagem rápida e intuitiva, mesmo para iniciantes"
    },
    {
      icon: Eye,
      title: "Imagens Nítidas",
      description: "Óptica de precisão para observações cristalinas"
    },
    {
      icon: Star,
      title: "Suporte Completo",
      description: "Assistência técnica especializada sempre disponível"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
            <Telescope className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Nossos Telescópios</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Explore o Universo com
            <span className="gradient-text"> Tecnologia Avançada</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossa linha completa de telescópios, desde modelos para iniciantes 
            até equipamentos profissionais de última geração.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {telescopes.map((telescope, index) => (
            <motion.div
              key={telescope.name}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 ${
                telescope.highlight 
                  ? 'ring-2 ring-primary-500 shadow-2xl shadow-primary-500/20' 
                  : 'shadow-lg hover:shadow-xl border border-gray-100'
              }`}
            >
              {telescope.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center py-2 text-sm font-semibold">
                  ⭐ MAIS POPULAR ⭐
                </div>
              )}
              
              <div className={`p-8 ${telescope.highlight ? 'pt-16' : ''}`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{telescope.image}</div>
                  <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    {telescope.category}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {telescope.name}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {telescope.description}
                  </p>
                  <div className="text-3xl font-bold gradient-text">
                    {telescope.price}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {telescope.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    telescope.highlight
                      ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:shadow-lg'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  <span>Escolher Este Modelo</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-space-pattern opacity-20" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Por Que Escolher a Austronaaaut?
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Mais de uma década de experiência em astronomia e tecnologia óptica
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2 text-primary-600">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Oferta Especial</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900">
              Não Sabe Qual Escolher?
            </h3>
            
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar 
              o telescópio perfeito para suas necessidades e orçamento.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary text-lg inline-flex items-center space-x-2"
            >
              <Telescope className="h-5 w-5" />
              <span>Falar com Especialista</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}