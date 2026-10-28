export interface NutritionalItem {
  nutrient: string;
  amount: string;
  vd: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  weight: string;
  portion: string;
  packaging: string;
  description: string;
  ingredients: string;
  nutritionalTable: NutritionalItem[];
  glutenFree: boolean;
  conservation: string;
  energyKj?: string;
  notes?: string[];
  badge?: string;
  image?: string;
  differential?: string;
  availableIn?: string[];
  formats?: string;
  applications?: string[];
  shelfLife?: string;
}

export type ActiveModal = 'none' | 'products' | 'contact' | 'search';

export type PageRoute = 'home' | 'fabrica' | 'qualidade' | 'esg' | 'produtos' | 'parceiros' | 'contato';
