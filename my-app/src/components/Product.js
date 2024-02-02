import React from 'react';
import PropTypes from 'prop-types';
const Product = ({ name, description, price, image, onAddToCart }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p className="price">Price: R{price}</p>
      <img src={image} alt={name} />
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};
Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
export default Product;