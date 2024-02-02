import React, { useState } from 'react';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import './styles/main.scss';
import products from './components/Products';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (name, price) => {
    const newCartItems = [...cartItems, { name, price }];
    setCartItems(newCartItems);
    const newTotal = cartTotal + price;
    setCartTotal(newTotal);
  };

  return (
    <div className="container">
      <header>
        <h1>CA Tech Solutions</h1>
      </header>
      <div className="grid-container">
      {products.map(({ id, name, description, price, image }) => (
      <Product
      key={id}
      name={name}
     description={description}
     price={price}
      image={image}
     onAddToCart={() => addToCart(name, price)}
     />
))}
      </div>
      <ShoppingCart cartItems={cartItems} cartTotal={cartTotal} />
      <footer>
        <p>&copy; 2024 CA Tech Solutions</p>
      </footer>
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

export default App;