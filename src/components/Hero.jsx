import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Sparkles, ArrowDown, ChevronRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-star-field">
      <div className="absolute inset-0 bg-space-pattern opacity-60"></div>
      
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2 text-accent-300">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Descubra o Universo
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">Explore o</span>
                <span className="block gradient-text">Cosmos</span>
                <span className="block">com Precisão</span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl"
            >
              Telescópios de alta qualidade para observação astronômica profissional e amadora. 
              Transforme sua paixão pelo espaço em descobertas extraordinárias.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="btn-primary flex items-center justify-center space-x-2 text-lg"
              >
                <Telescope className="h-5 w-5" />
                <span>Ver Telescópios</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="btn-secondary text-lg"
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1000+</div>
                <div className="text-sm text-gray-400">Estrelas Observadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-400">Modelos Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400">Suporte Técnico</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-3xl p-8 border border-primary-400/30">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-20 h-20 border-2 border-accent-400 rounded-full flex items-center justify-center"
              >
                <Star className="h-8 w-8 text-accent-400" />
              </motion.div>
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-center space-y-6"
              >
                <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center">
                  <Telescope className="h-16 w-16 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Telescópio Profissional</h3>
                  <p className="text-gray-300">Alta resolução e precisão para exploração espacial</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-accent-300 font-semibold">Ampliação</div>
                    <div className="text-white">200x - 500x</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-accent-300 font-semibold">Abertura</div>
                    <div className="text-white">150mm</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}