import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Eye, Target, Zap, Award, Users, Globe, Clock } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Eye,
      title: "Visão Cristalina",
      description: "Tecnologia avançada de lentes para imagens nítidas e detalhadas do cosmos"
    },
    {
      icon: Target,
      title: "Precisão Extrema",
      description: "Sistema de rastreamento automático para acompanhar objetos celestes com perfeição"
    },
    {
      icon: Zap,
      title: "Configuração Rápida",
      description: "Montagem intuitiva que permite começar a observar em poucos minutos"
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Materiais de primeira linha testados em condições extremas"
    }
  ]

  const stats = [
    { icon: Users, number: "5000+", label: "Astrônomos Satisfeitos" },
    { icon: Globe, number: "50+", label: "Países Atendidos" },
    { icon: Telescope, number: "100+", label: "Modelos Únicos" },
    { icon: Clock, number: "15+", label: "Anos de Experiência" }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            <span className="text-sm font-semibold uppercase tracking-wider">Sobre a Austronaaaut</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Pioneiros em 
            <span className="gradient-text"> Observação Espacial</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de uma década, transformamos a paixão pela astronomia em equipamentos 
            de precisão que conectam você ao universo. Cada telescópio é uma janela para 
            as maravilhas do cosmos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-900">
                Nossa Missão: Democratizar o Universo
              </h3>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                Acreditamos que todos devem ter acesso às maravilhas do cosmos. Por isso, 
                desenvolvemos telescópios que combinam tecnologia avançada com facilidade 
                de uso, tornando a astronomia acessível tanto para iniciantes quanto para 
                profissionais experientes.
              </p>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                Nossos equipamentos são meticulosamente projetados e testados para 
                garantir que cada observação seja uma experiência transformadora, 
                revelando detalhes impressionantes de planetas, estrelas e galáxias distantes.
              </p>
            </div>

            <div className="bg-primary-50 rounded-2xl p-6 border-l-4 border-primary-600">
              <blockquote className="text-lg text-secondary-700 italic">
                "A astronomia nos ensina humildade e paciência. Cada telescópio Austronaaaut 
                é construído para inspirar essa mesma reverência pelo cosmos infinito."
              </blockquote>
              <div className="mt-4 text-primary-600 font-semibold">
                — Equipe Austronaaaut
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 border border-white/20 rounded-full"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-16 -left-16 w-32 h-32 border border-white/10 rounded-full"
              />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Telescope className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold">Tecnologia de Ponta</h4>
                
                <p className="text-white/90 leading-relaxed">
                  Utilizamos os mais avançados sistemas ópticos e eletrônicos para 
                  garantir imagens de qualidade profissional em todos os nossos telescópios.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-white/80">Precisão Óptica</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-white/80">Suporte Técnico</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-secondary-900 mb-3">
                {feature.title}
              </h4>
              
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-secondary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-space-pattern opacity-30" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Números que Impressionam
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Nossa paixão pela astronomia se reflete em cada conquista alcançada
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}