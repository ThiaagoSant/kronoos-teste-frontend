import { useState } from "react";
import { Product } from "./models/Product";
import Sidebar from "./components/Sidebar";
import ProductListView from "./views/ProductListView";
import AddProductView from "./views/AddProductView";
import { saveProducts, getStoredProducts } from "./services/localStorage";
import React from "react";

const App = () => {
  const [products, setProducts] = useState<Product[]>(getStoredProducts());
  const [view, setView] = useState<"list" | "add">("list");

  const handleAddProduct = (product: Product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
    setView("list");
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setView={setView} />
      <main className="flex-1 p-8 overflow-y-auto">
        {view === "list" ? (
          <ProductListView
            products={products}
            onDeleteProduct={handleDeleteProduct}
          />
        ) : (
          <AddProductView onAddProduct={handleAddProduct} />
        )}
      </main>
    </div>
  );
};

export default App;
0;
