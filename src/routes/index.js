import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import Cart from "../pages/cart";

const Rooutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/cart' element={ <Cart /> }></Route>
        <Route exact path='/' element={ <Store /> }></Route>
      </Routes>
    </Router>
  );
};

export default Rooutes;