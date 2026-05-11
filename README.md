# BARTÃO Choperia - Website Premium

Uma experiência web sofisticada, moderna e emotiva para a choperia BARTÃO, criada em homenagem a um companheiro especial.

## 🎨 Características

### Design & UX
- **Estética Elegante**: Paleta de cores premium com blacks, whites, e warm amber/copper accents
- **Animações Suaves**: Transições e efeitos visuais refinados com Framer Motion
- **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Identidade Visual Coesa**: Design inspirado na identidade do logo da marca

### Seções Principais
1. **Hero** - Introdução impactante com tagline e CTA
2. **About** - História emocional da marca e seu propósito
3. **Menu** - Sistema completo de cardápio com 25 categorias
4. **Gallery** - Galeria visual interativa
5. **Footer** - Informações de contato e navegação

### Funcionalidades
- 📱 Navegação responsiva com menu mobile
- 🎯 Sistema dinâmico de categorias de menu
- 🖼️ Galeria interativa com lightbox
- ✨ Animações e transições suaves
- 🎨 Componentes reutilizáveis e fáceis de customizar

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React

## 📋 Categorias de Menu

- Para Abrir os Caminhos
- Para Bater Papo
- Porções
- Clássicos de Bar
- Chapas Quentes
- Bolinhos da Casa
- Entradas Especiais
- Lanches
- Pratos
- Especiais da Casa
- Clássicos
- Arroz de Forno
- Saladas
- Acompanhamentos
- Sobremesas
- Bebidas
- Chopp
- Cervejas 600ml
- Long Necks
- Caipirinhas
- Drinks
- Doses e Garrafas
- Sucos
- Refrigerantes
- Vinhos

## 🚀 Getting Started

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Vitorazo/bartao-choperia-website.git
cd bartao-choperia-website

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

### Build para Produção

```bash
npm run build
npm start
```

## 📝 Customização

### Cores Brand

Edite `tailwind.config.ts` para customizar a paleta de cores:

```typescript
colors: {
  'barto-dark': '#0a0a0a',      // Fundo principal
  'barto-black': '#1a1a1a',     // Fundo secundário
  'barto-warm': '#c4a574',      // Cor destaque (ouro/âmbar)
  'barto-light': '#f5f5f5',     // Texto principal
  'barto-cream': '#e8e3d8',     // Tom quente
}
```

### Menu Items

Edite `lib/menuData.ts` para adicionar, modificar ou remover itens do menu:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Nome do Prato',
    description: 'Descrição detalhada',
    price: 50,
    category: 'Nome da Categoria',
    isNew: false,
  },
  // Mais items...
]
```

### Informações de Contato

Edite `components/Footer.tsx` para atualizar:
- Telefone
- Email
- Endereço
- Horário de funcionamento
- Links de redes sociais

### Textos e Conteúdo

Todos os textos das seções podem ser editados diretamente nos arquivos dos componentes em `components/sections/`

## 📂 Estrutura do Projeto

```
bartao-choperia-website/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home
│   ├── menu/
│   │   └── page.tsx        # Página de cardápio
│   └── globals.css         # Estilos globais
├── components/
│   ├── Navigation.tsx      # Barra de navegação
│   ├── Footer.tsx          # Rodapé
│   ├── MenuCard.tsx        # Card de item do menu
│   └── sections/           # Seções da página
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── MenuPreview.tsx
│       └── Gallery.tsx
├── lib/
│   └── menuData.ts         # Dados do menu (fácil de editar)
└── public/                 # Arquivos estáticos
```

## 🎯 Próximos Passos

- [ ] Adicionar imagens reais dos pratos
- [ ] Integrar sistema de reservas
- [ ] Adicionar formulário de contato
- [ ] Implementar dark/light mode toggle
- [ ] Adicionar blog/notícias
- [ ] Integrar com sistema de pagamento

## 📧 Suporte

Para dúvidas ou sugestões sobre o website, entre em contato.

## 📄 License

Todos os direitos reservados © 2026 BARTÃO Choperia
