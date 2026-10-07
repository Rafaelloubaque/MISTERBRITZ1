export interface ProductItem {
  id: string;
  name: string;
  category: string;
  weight: string;
  packaging: string;
  description: string;
  badge?: string;
  image?: string;
}

export type ActiveModal = 'none' | 'products' | 'contact' | 'clientArea' | 'search';
