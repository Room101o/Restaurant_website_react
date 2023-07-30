import React, { useState } from 'react';
import './Panier.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Panier = ({ show, onClose, onCheckout, productPrice }) => {
  const [cartCount, setCartCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productPrice); // Mettez ici le prix initial du produit

  const handleIncrement = () => {
    setCartCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + productPrice); 
  };

  const handleDecrement = () => {
    setCartCount((prevCount) => Math.max(prevCount - 1, 1));
    setTotalPrice((prevPrice) => Math.max(prevPrice - productPrice, productPrice)); // Assurez-vous que le prix total ne devienne pas inférieur au prix initial
  };

  return (
    <div className={`cart-modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <h2 className='title-panier'>Panier</h2>
        <p>Quantity: {cartCount}</p>

        <p>Total Price: ${totalPrice}</p>

        <button className='btn-add' onClick={handleIncrement}>Add</button>
        <button className='btn-remove' onClick={handleDecrement}>Remove</button>

        <button  className="checkout-button btn-checkout" onClick={() => onCheckout(cartCount)}>
          Checkout
        </button>

        <button  className="close-button btn-panier" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default Panier;
