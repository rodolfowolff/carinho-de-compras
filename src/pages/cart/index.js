import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const Cart = () => {
  const { total, cartItems, itemCount, checkout, handleCheckout } = useCart();

  return (
    <Layout title="Carrinho" description="Página de carrinho de compras">
      <h1 className="text-1xl font-extrabold leading-9 tracking-tight text-gray-900 md:text-2xl">
        Carrinho de compras
      </h1>
      <div className="h-full lg:flex justify-evenly mt-4">
        <div className="lg:w-1/2 md:w-full">
          {
            cartItems.length > 0
              ? <CartProducts />
              : !checkout
                ? (
                  <div className="max-w-screen-lg mt-10 flex flex-col text-center">
                    <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                      Carrinho vazio: /
                    </p>
                    <p className="mb-8">
                      Mas não se preocupe, você pode encontrar muitas outras coisas em nossa página inicial.
                    </p>
                    <Link to="/">
                      <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors 
                                        duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none
                                          focus:shadow-outline-blue hover:bg-blue-700">
                        Voltar à página inicial
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="max-w-screen-lg mt-10 flex flex-col text-center">
                    <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                      Sua compra foi realizada com sucesso.
                    </p>
                    <p className="mb-8">
                      Agradecemos a preferência :)
                    </p>
                    <Link to="/">
                      <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors
                                        duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none
                                          focus:shadow-outline-blue hover:bg-blue-700">
                        Voltar à página inicial
                      </button>
                    </Link>
                  </div>
                )
          }
        </div>

        {
          cartItems.length > 0 &&

          <div className="lg:w-1/3 lg:ml-14">
            <hr />
            <div className="flex flex-col">
              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium mr-2">
                  Total de produtos
                </p>
                <p className="text-base font-medium leading-normal md:text-sm">
                  { itemCount }
                </p>
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-lg font-semibold mr-2">Total</p>
                <h3 className="font-semibold">R$ { formatNumber(total) }</h3>
              </div>
            </div>

            <hr />

            { (total) > Number('1000').toFixed(2) &&
              <p className="w-full mt-6 bg-green-200 border border-transparent rounded-full 
                              shadow-sm py-2 px-4 text-sm font-normal text-green-700 text-center">
                Parabéns, sua compra tem frete grátis !
              </p>
            }


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
        }
      </div>
    </Layout >

  );
};

export default Cart;
