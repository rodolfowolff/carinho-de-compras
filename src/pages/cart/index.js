import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const Cart = () => {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useCart();

  return (
    <Layout title="Carrinho" description="Página de carrinho de compras" >
      <div >
        <div>
          <h1>Carrinho</h1>
        </div>

        <div>
          <div>
            {
              cartItems.length > 0 ?
                <CartProducts /> :
                <div>
                  Carrinho vazio
                </div>
            }

            { checkout &&
              <div>
                <p>Obrigado, sua compra foi realizada com sucesso!</p>
                <Link to="/">Volte as compras!</Link>
              </div>
            }
          </div>

          {
            cartItems.length > 0 &&
            <div>
              <div>
                <p>Total de produtos</p>
                <h4>{ itemCount }</h4>
                <p>Valor total</p>
                <h3>R$ { formatNumber(total) }</h3>
                <hr />
                { (total) > Number('1000').toFixed(2) &&
                  <p>
                    Parabéns, sua compra tem frete grátis!
                  </p>
                }
                <hr />
                <div>
                  <button type="button" onClick={ handleCheckout }>Finalizar compra</button>
                  <button type="button" onClick={ clearCart }>Limpar carrinho</button>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    </Layout>
  );
};

export default Cart;
