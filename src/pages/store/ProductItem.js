// import { Link } from 'react-router-dom';
import { formatNumber } from '../../helpers/utils';
import { useCart } from '../../hooks/useCart';
import { ShoppingCartIcon, PlusIcon } from '@heroicons/react/solid';

const ProductItem = ({ product }) => {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id);
  };

  return (
    <div className="border border-gray-200 rounded-lg m-1 p-1 sm:w-96 md:max-w-lg lg:min-w-96 text-center">
      <div className="relative">
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <img
            src={ product.imageUrl }
            alt={ product.name }
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="mt-4 h-16 flex-col flex-wrap">
          <h3 className="text-sm font-medium text-gray-900 h-full">{ product.name }</h3>
          <p className="mt-1 text-sm text-gray-500">Quantidade: { product.quantity }</p>
        </div>
        <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-xl font-semibold text-white">
            R$ { formatNumber(product.sellingPrice) }
          </p>
        </div>
      </div>

      <div className="mt-7">
        {
          isInCart(product) &&
          <button
            onClick={ () => increase(product) }
            className="relative w-full flex  bg-blue-600 border border-transparent rounded-md py-2 px-8 
                        items-center justify-center text-sm font-medium text-white hover:bg-blue-700">
            Adicionar mais
            <PlusIcon className="h-5 w-5 text-white ml-3" />
          </button>
        }

        {
          !isInCart(product) &&
          <button
            onClick={ () => addProduct(product) }
            className="relative w-full flex bg-blue-600 border border-transparent rounded-md py-2 px-8 
                        items-center justify-center text-sm font-medium text-white hover:bg-blue-700">
            Adicionar ao carrinho
            <ShoppingCartIcon className="h-5 w-5 text-white ml-3" />
          </button>
        }

      </div>
    </div>
  );
};

export default ProductItem;
