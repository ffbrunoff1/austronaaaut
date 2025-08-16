import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Eye, Star } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Telescópios', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <Eye 
                className={`h-8 w-8 transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`} 
              />
              <Star 
                className={`h-4 w-4 absolute -top-1 -right-1 transition-colors duration-300 ${
                  isScrolled ? 'text-accent-500' : 'text-accent-300'
                } animate-pulse`} 
              />
            </div>
            <div className="text-2xl font-bold">
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                Astrona
              </span>
              <span className="gradient-text">aaut</span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-accent-300'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className={`hidden md:block font-semibold py-2 px-6 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-white hover:bg-gray-100 text-primary-600'
            }`}
          >
            Explorar Agora
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-secondary-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 bg-primary-600 text-white rounded-lg mx-4 hover:bg-primary-700 transition-colors"
              >
                Explorar Agora
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}