import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const Cart = () => {
  const { total, cartItems, itemCount, checkout, handleCheckout } = useCart();

  return (
    <Layout title="Carrinho" description="Página de carrinho de compras">
      <div className="bg-white">
        <main>
          <p className="m-3 max-w-3xl mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            <span className="block xl:inline">Carrinho de compras</span>
          </p>
          <div className="lg:min-h-full lg:flex lg:justify-evenly">
            <div>
              {
                cartItems.length > 0
                  ? <CartProducts />
                  : <div>
                    Carrinho vazio, <Link to="/">volte as compras!</Link>
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
              <>
                <hr />
                <div>
                  <div className="flex">
                    <p className="mr-2">Total de produtos</p>
                    <h4 className="font-semibold">{ itemCount }</h4>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-lg font-semibold mr-2">Total</p>
                    <h3 className="font-medium">R$ { formatNumber(total) }</h3>
                  </div>

                  <hr />

                  { (total) > Number('1000').toFixed(2) &&
                    <p className="w-full mt-6 bg-green-200 border border-transparent rounded-full 
                                  shadow-sm py-2 px-4 text-sm font-normal text-green-700 text-center">
                      Parabéns, sua compra tem frete grátis !
                    </p>
                  }

                  <hr />

                  <div>
                    <button
                      type="submit"
                      className="w-full mt-6 bg-blue-600 border border-transparent rounded-md shadow-sm 
                                  py-2 px-4 text-lg font-semibold text-white hover:bg-blue-700 focus:outline-none 
                                  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={ handleCheckout }
                    >
                      Finalizar compra
                    </button>
                  </div>

                </div>
              </>
            }
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Cart;
