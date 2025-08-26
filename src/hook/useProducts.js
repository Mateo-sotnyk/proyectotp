import { useEffect } from "react";
import { useProductsStore } from "./productsStore";
import { useState } from "react";

export const useProducts = () => {
  const { products, deleteProduct, updateProduct } = useProductsStore();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products
    ? products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return {
    filteredProducts,
    searchTerm,
    setSearchTerm,
    deleteProduct,
    updateProduct,
  };
};