'use client'

import { motion } from 'framer-motion'

interface MenuCardProps {
  name: string
  description: string
  price: string
  image?: string
  isNew?: boolean
}

const MenuCard = ({
  name,
  description,
  price,
  image,
  isNew = false,
}: MenuCardProps) => {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      className="group relative bg-gradient-to-br from-barto-charcoal to-barto-black border border-barto-warm/20 rounded-lg overflow-hidden hover:border-barto-warm/50 transition-all duration-300"
    >
      {/* Image Container */}
      {image && (
        <div className="relative h-48 bg-gradient-to-br from-barto-warm/10 to-barto-warm/5 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-barto-warm/30 text-4xl font-serif font-bold">
            ◊
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-barto-light font-serif text-xl font-bold flex-1 group-hover:text-barto-warm transition-colors">
            {name}
          </h3>
          {isNew && (
            <span className="ml-2 px-3 py-1 bg-barto-warm/20 border border-barto-warm/50 text-barto-warm text-xs font-semibold rounded-full whitespace-nowrap">
              Novo
            </span>
          )}
        </div>

        <p className="text-barto-light/60 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-barto-warm/10">
          <span className="text-barto-warm font-serif text-lg font-bold">
            R$ {price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-xs font-semibold text-barto-dark bg-barto-warm rounded hover:bg-barto-amber transition-colors"
          >
            Adicionar
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default MenuCard
