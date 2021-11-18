import { createContext, useState } from 'react';
import { items } from '../services/abaixo-10-reais.json';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(items);

  return (
    <ProductsContext.Provider value={ { products } } >
      { children }
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
