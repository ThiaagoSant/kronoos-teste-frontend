import axios from "axios";
import { Product } from "../models/Product";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const addProduct = async (product: Product): Promise<Product> => {
  const response = await axios.post(`${API_URL}/products`, product);
  return response.data;
};
