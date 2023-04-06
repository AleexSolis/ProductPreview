import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types';

type ProductContextType = {
  selectedProduct: Product | undefined;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
};

const ProductContext = createContext<ProductContextType>({
  selectedProduct: undefined,
  setSelectedProduct: () => {},
});

export const useProductContext = () => useContext(ProductContext);

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();

  const value = {
    selectedProduct,
    setSelectedProduct,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
