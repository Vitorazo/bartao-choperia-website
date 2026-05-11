export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  isNew?: boolean
  image?: string
}

export const menuCategories = [
  'Para Abrir os Caminhos',
  'Para Bater Papo',
  'Porções',
  'Clássicos de Bar',
  'Chapas Quentes',
  'Bolinhos da Casa',
  'Entradas Especiais',
  'Lanches',
  'Pratos',
  'Especiais da Casa',
  'Clássicos',
  'Arroz de Forno',
  'Saladas',
  'Acompanhamentos',
  'Sobremesas',
  'Bebidas',
  'Chopp',
  'Cervejas 600ml',
  'Long Necks',
  'Caipirinhas',
  'Drinks',
  'Doses e Garrafas',
  'Sucos',
  'Refrigerantes',
  'Vinhos',
]

// Sample menu items - TO BE CUSTOMIZED
export const menuItems: MenuItem[] = [
  // Para Abrir os Caminhos
  {
    id: '1',
    name: 'Tábua de Queijos Artesanais',
    description: 'Seleção premium de queijos importados e nacionais com acompanhamentos',
    price: 68,
    category: 'Para Abrir os Caminhos',
  },
  {
    id: '2',
    name: 'Carpaccio de Beterraba',
    description: 'Beterraba fresca com rúcula, queijo de cabra e azeite artesanal',
    price: 42,
    category: 'Para Abrir os Caminhos',
    isNew: true,
  },
  // Para Bater Papo
  {
    id: '3',
    name: 'Bolinhas de Queijo Crocante',
    description: 'Bolinhas de queijo derretido com coating crocante',
    price: 34,
    category: 'Para Bater Papo',
  },
  {
    id: '4',
    name: 'Amendoim Crocante Gourmet',
    description: 'Amendoim tostado com temperos especiais',
    price: 28,
    category: 'Para Bater Papo',
  },
  // Porções
  {
    id: '5',
    name: 'Asa de Frango com Mel e Mostarda',
    description: 'Asas crocantes com glace de mel e mostarda dijon',
    price: 48,
    category: 'Porções',
  },
  // Bebidas - Chopp
  {
    id: '6',
    name: 'Chopp Artesanal Premium',
    description: 'Chopp selecionado de cervejarias locais',
    price: 15,
    category: 'Chopp',
  },
  // Bebidas - Drinks
  {
    id: '7',
    name: 'Old Fashioned BARTÃO',
    description: 'Whisky premium, açúcar de cana, angostura e gelo de cristal',
    price: 38,
    category: 'Drinks',
  },
]

export const getItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter((item) => item.category === category)
}

export const getCategories = (): string[] => {
  return menuCategories
}
