import { useState } from "react";

let productsData = [];

export function useProductsStore() {
  const [products, setProducts] = useState(productsData);

  const setAllProducts = (newProducts) => {
    productsData = newProducts; 
    setProducts(newProducts); 
  };

  return { products, setAllProducts };
}
