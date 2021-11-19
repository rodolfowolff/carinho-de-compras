import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Store from "../pages/store";
import Cart from "../pages/cart";
import NotFound from "../pages/NotFound";

const Rooutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/cart' element={ <Cart /> }></Route>
        <Route exact path='/' element={ <Store /> }></Route>
        <Route exact path='*' element={ <NotFound /> }></Route>
      </Routes>
    </Router>
  );
};

export default Rooutes;