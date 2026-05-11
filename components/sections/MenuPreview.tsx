'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChefHat } from 'lucide-react'

const MenuPreview = () => {
  const categories = [
    'Para Abrir os Caminhos',
    'Para Bater Papo',
    'Porções',
    'Clássicos de Bar',
  ]

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-container bg-barto-dark">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-px bg-barto-warm/30 w-12" />
            <ChefHat className="text-barto-warm" size={24} />
            <div className="h-px bg-barto-warm/30 w-12" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-barto-light mb-4">
            Nosso <span className="text-barto-warm">Cardápio</span>
          </h2>
          <p className="text-barto-light/70 text-lg max-w-2xl mx-auto">
            Uma seleção cuidadosa de pratos, bebidas e experiências criadas para deleitar seus sentidos
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -8 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-barto-warm/10 to-barto-warm/5 border border-barto-warm/30 rounded-lg p-6 text-center hover:border-barto-warm/60 transition-all duration-300">
                <p className="text-barto-light font-serif text-lg font-semibold">{category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Link href="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-12 py-4 text-lg"
            >
              Explorar Cardápio Completo
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default MenuPreview
