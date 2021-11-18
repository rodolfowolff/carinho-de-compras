import React from 'react';

import CartItem from './CartItem';
import { useCart } from '../../hooks/useCart';

const CartProducts = () => {

  const { cartItems } = useCart();

  return (
    <div>
      <div>

        {
          cartItems.map(product => <CartItem key={ product.id } product={ product } />)
        }

      </div>
    </div>

  );
};

export default CartProducts;
