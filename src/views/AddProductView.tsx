import React from "react";
import ProductForm from "../components/ProductForm";
import { Product } from "../models/Product";

interface AddProductViewProps {
  onAddProduct: (product: Product) => void;
}

const AddProductView: React.FC<AddProductViewProps> = ({ onAddProduct }) => {
  return (
    <div className="p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Adicionar Produto</h2>
      <ProductForm onSubmit={onAddProduct} />
    </div>
  );
};

export default AddProductView;
