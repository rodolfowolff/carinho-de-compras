import ProductItem from './ProductItem';
import { useProducts } from '../../hooks/useProducts';

const Products = () => {
  const { products } = useProducts();

  return (
    <>
      <h2 className="mt-8 text-xl font-bold text-gray-900">Produtos</h2>
      <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
        {
          products ? products.map(product => (
            <ProductItem key={ product.id } product={ product } />
          ))
            : 'Sem produtos'
        }
      </div>
    </>
  );
};

export default Products;
