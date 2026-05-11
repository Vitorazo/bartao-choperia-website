'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-container bg-barto-black" ref={ref}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Left - Image Placeholder */}
        <motion.div variants={itemVariants} className="relative">
          <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-barto-warm/20 to-barto-warm/5 border border-barto-warm/30">
            <div className="w-full h-full flex items-center justify-center text-barto-warm/30 text-6xl font-serif font-bold">
              BARTÃO
            </div>
          </div>
        </motion.div>

        {/* Right - Text Content */}
        <motion.div variants={containerVariants} className="space-y-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-barto-light mb-6">
              Nossa <span className="text-barto-warm">História</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-barto-light/80 text-lg leading-relaxed"
          >
            BARTÃO nasceu de uma inspiração especial: a homenagem a um companheiro querido que representa muito mais que um animal de estimação. Ele simboliza lealdade, estilo de vida e aquela energia que torna cada dia mais especial.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-barto-light/80 text-lg leading-relaxed"
          >
            Cada detalhe do nosso espaço, cada bebida cuidadosamente selecionada, cada prato preparado com atenção ao detalhe — tudo foi pensado para criar momentos inesquecíveis. Aqui, você não é apenas um cliente. Você faz parte da nossa família.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-barto-light/80 text-lg leading-relaxed"
          >
            Somos um espaço premium onde autenticidade encontra sofisticação. Donde a qualidade das nossas bebidas, a criatividade dos nossos pratos e o carinho no atendimento refletem a paixão que nos move todos os dias.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block mt-4"
          >
            Nossa História Completa
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
