export interface Category {
  id: Number,
  name: Number
}

export interface ShopItems {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  discount: boolean;
  discount_percent: number;
  discount_price: number;
  timeCreate: number;
  lastUpdate: number;
  profit: number;
  expenses: number;
  category: Category;
}
