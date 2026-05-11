'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryItems = [
    { id: 1, title: 'Ambiente Premium', category: 'Espaço' },
    { id: 2, title: 'Seleção de Bebidas', category: 'Bebidas' },
    { id: 3, title: 'Pratos Especiais', category: 'Gastronomia' },
    { id: 4, title: 'Detalhe da Decoração', category: 'Ambiente' },
    { id: 5, title: 'Vista Noturna', category: 'Espaço' },
    { id: 6, title: 'Momento Special', category: 'Experiência' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="gallery" className="section-container bg-barto-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-barto-light mb-4">
            Galeria <span className="text-barto-warm">Visual</span>
          </h2>
          <p className="text-barto-light/70 text-lg max-w-2xl mx-auto">
            Explore os momentos, sabores e atmosfera que fazem BARTÃO especial
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-barto-warm/20 to-barto-warm/5 border border-barto-warm/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-barto-warm/50 text-4xl font-serif font-bold mb-2">◊</div>
                  <p className="text-barto-light/70 font-serif text-lg">{item.title}</p>
                  <p className="text-barto-warm/60 text-sm mt-2">{item.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-barto-warm/0 group-hover:bg-barto-warm/10 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-barto-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-barto-warm hover:text-barto-light transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-gradient-to-br from-barto-warm/20 to-barto-warm/5 border border-barto-warm/30 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-barto-light font-serif text-2xl mb-2">
                  {galleryItems[selectedImage].title}
                </p>
                <p className="text-barto-warm/70">{galleryItems[selectedImage].category}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery
