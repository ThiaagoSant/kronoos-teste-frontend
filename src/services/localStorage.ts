import { Product } from '../models/Product';

const STORAGE_KEY = 'products';

export const saveProducts = (products: Product[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const getStoredProducts = (): Product[] => {
  const products = localStorage.getItem(STORAGE_KEY);
  return products ? JSON.parse(products) : [];
};
