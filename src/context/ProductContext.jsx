import React, { createContext, useState, useEffect } from 'react';
// Import products.json directly
import productsData from '../assets/jsons/products.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Instead of fetching, directly set the imported JSON data
    const fetchProducts = () => {
      try {       
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
