import React from "react";
import { Product } from "../models/Product";
import { TrashIcon } from "@heroicons/react/solid";

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => (
  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => (
      <li
        key={product.id}
        className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">
                {product.name}
              </h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                {product.category}
              </span>
            </div>
            <p className="mt-1 text-gray-500 text-sm truncate">
              R$ {Number(product.price).toFixed(2)}
            </p>
            <p className="mt-1 text-gray-500 text-sm truncate">
              Quantidade: {product.quantity}
            </p>
          </div>
          <button
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
            onClick={() => onDelete(product.id)}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default ProductList;
