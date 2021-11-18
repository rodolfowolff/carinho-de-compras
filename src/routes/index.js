import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Store from '../pages/store';

const Rooutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Store /> }></Route>
      </Routes>
    </Router>
  );
};

export default Rooutes;