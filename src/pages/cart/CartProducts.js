import CartItem from './CartItem';
import { useCart } from '../../hooks/useCart';

const CartProducts = () => {

  const { cartItems, clearCart } = useCart();

  return (
    <>
      {
        cartItems.map(product => <CartItem key={ product.id } product={ product } />)
      }
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={ clearCart }
          className="w-22 h-9 mb-6 bg-gray-400 border border-transparent rounded-md shadow-sm 
                        py-2 px-4 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none 
                          focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Limpar carrinho
        </button>
      </div>
    </>
  );
};

export default CartProducts;
