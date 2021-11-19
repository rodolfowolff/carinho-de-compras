import { useContext } from 'react';
import { Link } from "react-router-dom";

import { CartContext } from '../../contexts/CartContext';
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/solid';

import headerNavLinks from '../../helpers/headerNavLinks';
import siteMetadata from "../../helpers/siteMetaData";

const Header = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <header className="flex items-center justify-around py-10">
      <div>
        <Link to="/" aria-label="Minha loja">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-1xl">
              Logo
            </div>
            <div className="hidden h-6 text-2xl font-semibold">
              { siteMetadata.headerTitle }
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-around">
        <div className="flex items-center">
          { headerNavLinks.map((link) => (
            <Link to={ link.to } key={ link.title }>
              { link.icon === 'home' && (
                <div className="flex items-center">
                  <HomeIcon className="h-6 w-6 text-gray-700 " />
                </div>
              ) }
              { link.icon === 'shopping-cart' && (
                <div className="flex items-center">
                  <ShoppingCartIcon className="h-6 w-6 text-gray-700 ml-4 hover:text-gray-900" />
                </div>
              ) }
            </Link>
          )) }
          { itemCount > 0 && (
            <div className="bg-blue-200 border border-transparent rounded-full shadow-sm py-0.5 px-2 
                                -mt-12 -ml-2 text-sm font-normal text-blue-700 text-center">
              <p>{ itemCount }</p>
            </div>
          ) }
        </div>
      </div>
    </header >
  );
};

export default Header;