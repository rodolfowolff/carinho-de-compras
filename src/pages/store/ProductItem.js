import { Link } from 'react-router-dom';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({ product }) => {
  return (
    <div>
      <img
        style={ { display: "block", margin: "0 auto 10px", maxHeight: "200px" } }
        src={ product.imageUrl }
        alt={ product.name }
      />
      <p>{ product.name }</p>
      <h3>{ formatNumber(product.price) }</h3>
      <div>
        <Link to="/">Details</Link>

        <button>
          Add more
        </button>

        <button>
          Add to cart
        </button>

      </div>
    </div>
  );
};

export default ProductItem;