import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import React from 'react';

interface ProductListViewProps {
  products: Product[];
  onDeleteProduct: (id: string) => void;
}

const ProductListView: React.FC<ProductListViewProps> = ({ products, onDeleteProduct }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (query: string) => {
    setFilteredProducts(
      products.filter(
        product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} onDelete={onDeleteProduct} />
    </div>
  );
};

export default ProductListView;
