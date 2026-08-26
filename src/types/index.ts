export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  category: string;
  collection: string;
  sizes: string[];
  description: string;
  soldOut?: boolean;
  emitterColor?: string;
  accentColor?: string;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}
