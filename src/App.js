import React, { useState, useEffect } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import { Modal, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [resetFlag, setResetFlag] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateSubtotal = (amount) => {
    setSubtotal((prevSubtotal) => {
      const newSubtotal = prevSubtotal + amount
      return newSubtotal < 0 ? 0 : newSubtotal;
    });
  };

  const handleClearAll = () => {
    setCart([]);
    setSubtotal(0);
    setResetFlag(true);
  };

  useEffect(() => {
    // Reset the resetFlag to false after it has been used
    if (resetFlag) {
      setResetFlag(false);
    }
  }, [resetFlag]);

  const handleOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  const updateCart = (title, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.title !== title);
      if (quantity > 0) {
        updatedCart.push({ title, quantity });
      }
      return updatedCart;
    });
  };

  return (
    <div className="container mt-4 p-4">
      <div className="row p-3">
        <div className="col-12 d-flex justify-content-center">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" className="img-fluid w-25" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="heading-1">Premium Japanese</h1>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12">
          <h3 className="heading-2">Cooked to perfection!</h3>
        </div>
      </div>
      <h1>Menu</h1>
      <div className="row p-1">
        <div className="menu">
          {menuItems.map((item) => (
            <MenuItem 
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={`${process.env.PUBLIC_URL}/images/${item.imageName}`}
              updateSubtotal={updateSubtotal}
              updateCart={updateCart}
              resetFlag={resetFlag}
            />
          ))}
        </div>
      </div>
      <div className="spacer"></div>
      <div className="row">
        <div className="col-12">
          <footer className="footer d-flex justify-content-between align-items-center px-4">
            <p className="subtotal mb-0 ml-20">Subtotal: ${subtotal.toFixed(2)}</p>
            <div className="d-flex gap-2">
              <button 
                type="button" 
                className="btn btn-secondary btn-sm rounded-pill px-4 py-2"
                onClick={handleOrder}
              >
                Order
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm rounded-pill px-4 py-2"
                onClick={handleClearAll}
              >
                Clear all
              </button>
            </div>
          </footer>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed!</Modal.Title>
        </Modal.Header>
        {cart.length === 0 ? (
          <p className="pt-3">No items added to cart</p>
        ) : (
          <ul className="pt-3">
            {cart.map((item, index) => (
              <li key={index}>
                {item.quantity} x {item.title}
              </li>
            ))}
          </ul>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
