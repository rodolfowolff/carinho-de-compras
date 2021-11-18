import ProductItem from './ProductItem';
import { useProducts } from '../../hooks/useProducts';

const Products = () => {
  const { products } = useProducts();

  return (
    <div>
      <div>
        <div>
          <div>
            { products ? `Total de ${products.length} productos` : '' }
          </div>
        </div>
      </div>
      <div>
        {
          products ? products.map(product => (
            <ProductItem key={ product.id } product={ product } />
          ))
            : 'Sem produtos'
        }
      </div>
    </div>
  );
};

export default Products;