import React from 'react';

import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const CartItem = ({ product }) => {

  const { increase, decrease, removeProduct } = useCart();

  return (
    <div>
      <div>
        <img
          alt={ product.name }
          style={ { margin: "0 auto", maxHeight: "50px" } }
          src={ product.imageUrl } />
      </div>
      <div>
        <h5>{ product.name }</h5>
        <p>Preço un: R$ { formatNumber(product.sellingPrice) } </p>

      </div>
      <div>
        <p>Quantidade: { product.quantity }</p>
      </div>
      <div >
        <button
          onClick={ () => increase(product) }
        >
          +
        </button>

        {
          product.quantity > 1 &&
          <button onClick={ () => decrease(product) }>
            -
          </button>
        }

        {
          product.quantity === 1 &&
          <button onClick={ () => removeProduct(product) }>
            Remover
          </button>
        }

      </div>
    </div>
  );
};

export default CartItem;
