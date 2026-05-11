'use client'

import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-barto-black border-t border-barto-warm/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-barto-warm text-2xl font-bold font-serif mb-4">BARTÃO</h3>
            <p className="text-barto-light/70 text-sm leading-relaxed">
              Experiência premium em gastronomia e bebidas, criada com paixão e autenticidade.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-barto-warm font-serif text-lg mb-4">Horário</h4>
            <ul className="text-barto-light/70 text-sm space-y-2">
              <li>Seg - Qui: 11:00 - 23:00</li>
              <li>Sex - Sab: 11:00 - 01:00</li>
              <li>Domingo: 11:00 - 22:00</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-barto-warm font-serif text-lg mb-4">Contato</h4>
            <ul className="text-barto-light/70 text-sm space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-barto-warm" />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-barto-warm" />
                <span>contato@bartao.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-barto-warm mt-1" />
                <span>Rua Principal, 123<br />São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-barto-warm font-serif text-lg mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-barto-light/70 hover:text-barto-warm transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-barto-light/70 hover:text-barto-warm transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-barto-warm/20 pt-8 flex flex-col md:flex-row justify-between items-center text-barto-light/50 text-sm">
          <p>&copy; {currentYear} BARTÃO Choperia. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-barto-warm transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-barto-warm transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
