'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Nossa História', href: '#about' },
    { label: 'Cardápio', href: '/menu' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-barto-dark/95 backdrop-blur-md border-b border-barto-warm/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-barto-warm text-2xl font-bold font-serif">BARTÃO</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-barto-light hover:text-barto-warm transition-colors text-sm font-medium uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-sm"
          >
            Reservar
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-barto-warm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-barto-black border-t border-barto-warm/20 py-4 px-6 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-barto-light hover:text-barto-warm transition-colors text-sm font-medium uppercase"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full btn-primary text-sm">
            Reservar
          </button>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation
