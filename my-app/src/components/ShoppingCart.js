import React from 'react';
import PropTypes from 'prop-types'; 

const ShoppingCart = ({ cartItems, cartTotal }) => {
  return (
    <div id="cart">
      <h2>Shopping Cart</h2>
      <ul id="cart-items">
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - R{item.price}
          </li>
        ))}
      </ul>
      <p>Total: R{cartTotal}</p>
    </div>
  );
};


ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  cartTotal: PropTypes.number.isRequired,
};

export default ShoppingCart;