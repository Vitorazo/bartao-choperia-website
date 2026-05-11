'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import MenuCard from '@/components/MenuCard'
import { getItemsByCategory, getCategories } from '@/lib/menuData'
import { ChefHat } from 'lucide-react'

const MenuPage = () => {
  const categories = getCategories()
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const items = getItemsByCategory(selectedCategory)

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
    <main className="min-h-screen bg-barto-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-px bg-barto-warm/30 w-12" />
            <ChefHat className="text-barto-warm" size={28} />
            <div className="h-px bg-barto-warm/30 w-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-barto-light mb-4">
            Cardápio <span className="text-barto-warm">Completo</span>
          </h1>
          <p className="text-barto-light/70 text-lg max-w-2xl mx-auto">
            Descubra uma seleção cuidadosa de pratos, bebidas e experiências
          </p>
        </motion.div>

        {/* Categories Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-barto-warm text-barto-dark border border-barto-warm'
                    : 'bg-barto-charcoal text-barto-light border border-barto-warm/20 hover:border-barto-warm/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        {items.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {items.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <MenuCard
                  name={item.name}
                  description={item.description}
                  price={item.price.toString()}
                  isNew={item.isNew}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-barto-light/50 text-lg">Nenhum item nesta categoria ainda.</p>
          </motion.div>
        )}
      </div>
    </main>
  )
}

export default MenuPage
