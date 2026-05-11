'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-barto-dark via-barto-black to-barto-dark z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-barto-warm/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-barto-warm/5 rounded-full blur-3xl translate-y-1/2" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block">
            <div className="text-barto-warm font-serif text-5xl md:text-6xl font-bold mb-2">BARTÃO</div>
            <div className="h-1 bg-gradient-to-r from-transparent via-barto-warm to-transparent" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-barto-light/80 text-lg md:text-xl font-light mb-8 tracking-wide"
        >
          Experiência Premium em Gastronomia e Bebidas
        </motion.p>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="mb-8">
          <span className="block text-4xl md:text-6xl font-serif font-bold text-barto-light mb-4">
            Onde a Qualidade
          </span>
          <span className="block text-4xl md:text-6xl font-serif font-bold text-barto-warm">
            Encontra a Autenticidade
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-barto-light/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Criada em homenagem ao nosso querido companheiro, BARTÃO é muito mais que um espaço. É um convite para uma experiência sensorial única, onde cada momento é cuidadosamente elaborado.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-10 py-4 text-lg"
          >
            Visualizar Cardápio
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary px-10 py-4 text-lg"
          >
            Reservar Mesa
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-barto-warm/50" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
