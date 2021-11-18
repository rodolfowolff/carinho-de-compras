import { useContext } from 'react';
import { Link } from "react-router-dom";

import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <header>
      <Link to='/'>Loja</Link>
      <Link to='/cart'>Carinho ({ itemCount })</Link>
    </header>
  );
};

export default Header;