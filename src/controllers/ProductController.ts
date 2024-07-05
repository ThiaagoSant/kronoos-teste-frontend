import { Product } from "../models/Product";

const PRODUCTS_KEY = "products";

export const listProducts = (): Product[] => {
  const storedProducts = localStorage.getItem(PRODUCTS_KEY);
  return storedProducts ? JSON.parse(storedProducts) : [];
};

export const addProduct = (product: Product) => {
  const products = listProducts();
  products.push(product);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const removeProduct = (id: string) => {
  let products = listProducts();
  products = products.filter((product) => product.id !== id);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const filterProducts = (name: string, category: string): Product[] => {
  const products = listProducts();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(name.toLowerCase()) ||
      product.category.toLowerCase().includes(category.toLowerCase())
  );
};
