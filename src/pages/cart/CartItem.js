import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/solid';

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useCart();

  return (
    <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 mb-2" >
      <li className="flex py-6 space-x-6">
        <img
          src={ product.imageUrl }
          alt={ product.name }
          className="flex-none sm:w-40 sm:h-40 w-28 h-28 object-center object-cover bg-gray-200 rounded-md"
        />
        <div className="flex flex-col justify-between space-y-4">

          <div className="text-base font-semibold space-y-1">
            <h3 className="text-lg">{ product.name }</h3>
            <p className="text-gray-400 font-medium line-through">R$ { formatNumber(product.price) }</p>
            <p className="text-gray-900 text-lg">R$ { formatNumber(product.sellingPrice) }</p>
          </div>

          <div className="flex space-x-4">

            <div className="flex border-r border-gray-300 pr-4">
              {
                product.quantity > 1 &&
                <button onClick={ () => decrease(product) } type="button">
                  <MinusIcon className="h-6 w-6 text-gray-500 border rounded-full hover:text-gray-900" />
                </button>
              }

              {
                product.quantity === 1 &&
                <button onClick={ () => removeProduct(product) }>
                  <TrashIcon className="h-6 w-6 text-gray-400 border rounded-full hover:text-red-900" />
                </button>
              }
            </div>

            <div>
              { product.quantity }
            </div>

            <div className="flex border-l border-gray-300 pl-4">
              <button onClick={ () => increase(product) }>
                <PlusIcon className="h-6 w-6 text-gray-500 border rounded-full hover:text-gray-900" />
              </button>
            </div>

          </div>
        </div>
      </li>
    </section >
  );
};

export default CartItem;
